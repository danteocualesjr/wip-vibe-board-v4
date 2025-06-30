
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Minimize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const VibeyChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [runId, setRunId] = useState<string | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat on first open
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      initializeChat();
      setHasInitialized(true);
    }
  }, [isOpen, hasInitialized]);

  const initializeChat = async () => {
    setIsLoading(true);
    
    try {
      abortControllerRef.current = new AbortController();
      
      const response = await fetch('https://agents.toolhouse.ai/1afa6656-54c7-44e9-a2a7-095529198ba9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: abortControllerRef.current.signal,
      });

      const toolhouseRunId = response.headers.get('X-Toolhouse-Run-ID');
      if (toolhouseRunId) {
        setRunId(toolhouseRunId);
      }

      // Handle streaming response
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedContent = '';
        
        const messageId = Date.now().toString();
        
        // Add initial empty message
        setMessages(prev => [...prev, {
          id: messageId,
          content: '',
          isUser: false,
          timestamp: new Date()
        }]);

        try {
          while (true) {
            const { done, value } = await reader.read();
            
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            accumulatedContent += chunk;
            
            // Update the message with accumulated content
            setMessages(prev => prev.map(msg => 
              msg.id === messageId 
                ? { ...msg, content: accumulatedContent }
                : msg
            ));
          }
        } catch (error) {
          if (error.name !== 'AbortError') {
            console.error('Stream reading error:', error);
          }
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Initialize chat error:', error);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          content: 'Sorry, I encountered an error while initializing. Please try again.',
          isUser: false,
          timestamp: new Date()
        }]);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !runId || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Add user message
    const userMessageObj: Message = {
      id: Date.now().toString(),
      content: userMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessageObj]);

    try {
      abortControllerRef.current = new AbortController();
      
      const response = await fetch(`https://agents.toolhouse.ai/1afa6656-54c7-44e9-a2a7-095529198ba9/${runId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
        signal: abortControllerRef.current.signal,
      });

      // Handle streaming response
      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedContent = '';
        
        const messageId = (Date.now() + 1).toString();
        
        // Add initial empty AI response
        setMessages(prev => [...prev, {
          id: messageId,
          content: '',
          isUser: false,
          timestamp: new Date()
        }]);

        try {
          while (true) {
            const { done, value } = await reader.read();
            
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            accumulatedContent += chunk;
            
            // Update the message with accumulated content
            setMessages(prev => prev.map(msg => 
              msg.id === messageId 
                ? { ...msg, content: accumulatedContent }
                : msg
            ));
          }
        } catch (error) {
          if (error.name !== 'AbortError') {
            console.error('Stream reading error:', error);
          }
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Send message error:', error);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          content: 'Sorry, I encountered an error. Please try again.',
          isUser: false,
          timestamp: new Date()
        }]);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const stopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Vibey
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-96 h-[500px] shadow-2xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Vibey
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex flex-col h-[calc(500px-80px)]">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.isUser ? (
                      <p className="text-sm">{message.content}</p>
                    ) : (
                      <div className="text-sm prose prose-sm max-w-none">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={stopGeneration}
                        className="text-xs text-gray-500 hover:text-gray-700 p-1 h-auto"
                      >
                        Stop
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading || !runId}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading || !runId}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
