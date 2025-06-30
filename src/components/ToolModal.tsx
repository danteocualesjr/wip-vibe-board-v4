
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Users, Calendar, Globe } from "lucide-react";
import ToolLogo from "@/components/ToolLogo";

interface ToolData {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  pricing: string;
  website: string;
  rating: number;
  userCount: string;
  releaseDate: string;
  tags: string[];
}

interface ToolModalProps {
  tool: ToolData | null;
  isOpen: boolean;
  onClose: () => void;
}

const getToolData = (toolName: string): ToolData => {
  const toolsData: Record<string, ToolData> = {
    "Cursor": {
      name: "Cursor",
      category: "AI Editor",
      description: "The AI-first code editor built for pair-programming with AI",
      longDescription: "Cursor is a revolutionary code editor that integrates AI directly into your development workflow. Built on VS Code, it offers intelligent code completion, chat-based assistance, and seamless AI pair programming. Perfect for developers who want to accelerate their coding with AI assistance.",
      features: [
        "AI-powered code completion",
        "Natural language code editing",
        "Chat with your codebase",
        "Intelligent refactoring",
        "Built on VS Code",
        "Multi-language support"
      ],
      pricing: "Free tier available, Pro from $20/month",
      website: "https://cursor.sh",
      rating: 4.8,
      userCount: "500K+",
      releaseDate: "2023",
      tags: ["AI", "Code Editor", "VS Code", "Productivity"]
    },
    "Windsurf": {
      name: "Windsurf",
      category: "AI IDE",
      description: "The first agentic IDE that can plan, code, and execute",
      longDescription: "Windsurf is the world's first agentic IDE that goes beyond code completion. It can understand your project, plan features, write code, and even execute tasks autonomously. Perfect for developers who want an AI assistant that can handle complex coding tasks end-to-end.",
      features: [
        "Agentic AI programming",
        "Project understanding",
        "Autonomous task execution",
        "Multi-file editing",
        "Context-aware suggestions",
        "Integrated terminal"
      ],
      pricing: "Free tier available, Pro from $15/month",
      website: "https://windsurf.ai",
      rating: 4.9,
      userCount: "200K+",
      releaseDate: "2024",
      tags: ["AI", "IDE", "Autonomous", "Planning"]
    },
    "Claude Code": {
      name: "Claude Code",
      category: "AI Assistant",
      description: "Anthropic's AI assistant specialized for coding tasks",
      longDescription: "Claude Code is Anthropic's powerful AI assistant designed specifically for programming tasks. It excels at code analysis, debugging, refactoring, and explaining complex code. With strong reasoning capabilities and safety features, it's perfect for developers who need reliable AI assistance.",
      features: [
        "Advanced code analysis",
        "Debugging assistance",
        "Code explanation",
        "Refactoring suggestions",
        "Multi-language support",
        "Safety-focused responses"
      ],
      pricing: "Free tier available, Pro from $20/month",
      website: "https://claude.ai",
      rating: 4.7,
      userCount: "1M+",
      releaseDate: "2023",
      tags: ["AI", "Assistant", "Anthropic", "Safety"]
    },
    "Codex": {
      name: "OpenAI Codex",
      category: "AI Model",
      description: "OpenAI's AI system that translates natural language to code",
      longDescription: "OpenAI Codex is a powerful AI model that understands and generates code in dozens of programming languages. It powers GitHub Copilot and can translate natural language descriptions into working code, making it an essential tool for rapid prototyping and learning.",
      features: [
        "Natural language to code",
        "Multi-language support",
        "Code completion",
        "Documentation generation",
        "API integration",
        "Powers GitHub Copilot"
      ],
      pricing: "API pricing starts at $0.002/1K tokens",
      website: "https://openai.com/codex",
      rating: 4.6,
      userCount: "10M+",
      releaseDate: "2021",
      tags: ["AI", "Model", "OpenAI", "API"]
    },
    "Devin": {
      name: "Devin",
      category: "AI Engineer",
      description: "The first AI software engineer that can plan and execute complex tasks",
      longDescription: "Devin is the world's first fully autonomous AI software engineer. It can plan, code, debug, and deploy applications with minimal human intervention. Devin represents the future of software development, handling complex engineering tasks from start to finish.",
      features: [
        "Autonomous software engineering",
        "End-to-end development",
        "Planning and execution",
        "Debugging and testing",
        "Deployment automation",
        "Learning from feedback"
      ],
      pricing: "Waitlist - Pricing TBA",
      website: "https://devin.ai",
      rating: 4.9,
      userCount: "Limited Beta",
      releaseDate: "2024",
      tags: ["AI", "Engineer", "Autonomous", "Beta"]
    },
    "Bolt": {
      name: "Bolt",
      category: "Full-Stack",
      description: "AI-powered full-stack development platform",
      longDescription: "Bolt is an AI-powered platform that enables rapid full-stack development. It can generate complete applications, handle both frontend and backend code, and deploy them instantly. Perfect for entrepreneurs and developers who want to build and ship products quickly.",
      features: [
        "Full-stack code generation",
        "Instant deployment",
        "Database integration",
        "API generation",
        "Frontend frameworks",
        "Real-time preview"
      ],
      pricing: "Free tier available, Pro from $25/month",
      website: "https://bolt.new",
      rating: 4.5,
      userCount: "300K+",
      releaseDate: "2024",
      tags: ["AI", "Full-Stack", "Deployment", "Web Apps"]
    },
    "Lovable": {
      name: "Lovable",
      category: "Web Apps",
      description: "AI-powered web application builder",
      longDescription: "Lovable is an AI-powered platform for building beautiful web applications. It combines the power of AI with modern web technologies like React, Tailwind CSS, and TypeScript to help you create stunning applications quickly and efficiently.",
      features: [
        "AI-powered development",
        "React & TypeScript",
        "Tailwind CSS styling",
        "Real-time preview",
        "Component library",
        "Instant deployment"
      ],
      pricing: "Free tier available, Pro from $20/month",
      website: "https://lovable.dev",
      rating: 4.8,
      userCount: "150K+",
      releaseDate: "2024",
      tags: ["AI", "Web Apps", "React", "TypeScript"]
    },
    "Replit": {
      name: "Replit",
      category: "Cloud IDE",
      description: "Browser-based IDE with AI-powered features",
      longDescription: "Replit is a powerful browser-based IDE that brings coding to the cloud. With AI-powered features, collaborative editing, and instant deployment, it's perfect for learning, prototyping, and building applications without local setup.",
      features: [
        "Browser-based IDE",
        "AI code assistant",
        "Collaborative editing",
        "Instant deployment",
        "Multiple languages",
        "Package management"
      ],
      pricing: "Free tier available, Pro from $7/month",
      website: "https://replit.com",
      rating: 4.6,
      userCount: "2M+",
      releaseDate: "2016",
      tags: ["Cloud", "IDE", "Collaboration", "Education"]
    },
    "v0": {
      name: "v0",
      category: "UI Generator",
      description: "AI-powered UI component generator by Vercel",
      longDescription: "v0 is Vercel's AI-powered tool for generating React components and UI elements. It transforms text descriptions into beautiful, functional UI components using modern frameworks like React and Tailwind CSS, perfect for rapid prototyping.",
      features: [
        "Text to UI generation",
        "React components",
        "Tailwind CSS styling",
        "Shadcn/ui integration",
        "Copy-paste ready code",
        "Responsive design"
      ],
      pricing: "Free tier available, Pro from $20/month",
      website: "https://v0.dev",
      rating: 4.7,
      userCount: "800K+",
      releaseDate: "2023",
      tags: ["AI", "UI", "React", "Vercel"]
    },
    "Manus AI": {
      name: "Manus AI",
      category: "AI Tool",
      description: "AI-powered development assistant",
      longDescription: "Manus AI is a comprehensive AI development assistant that helps with coding, debugging, and project management. It offers intelligent suggestions and automation to streamline your development workflow.",
      features: [
        "Code assistance",
        "Project management",
        "Debugging support",
        "Workflow automation",
        "Integration support",
        "Team collaboration"
      ],
      pricing: "Contact for pricing",
      website: "https://manus.ai",
      rating: 4.4,
      userCount: "50K+",
      releaseDate: "2024",
      tags: ["AI", "Development", "Automation", "Team"]
    },
    "Gamma": {
      name: "Gamma",
      category: "Presentations",
      description: "AI-powered presentation and document creator",
      longDescription: "Gamma is an AI-powered platform for creating beautiful presentations, documents, and web pages. It uses AI to help you structure content, design layouts, and create professional-looking materials in minutes.",
      features: [
        "AI content generation",
        "Beautiful templates",
        "Interactive elements",
        "Web publishing",
        "Collaboration tools",
        "Analytics dashboard"
      ],
      pricing: "Free tier available, Pro from $8/month",
      website: "https://gamma.app",
      rating: 4.6,
      userCount: "1M+",
      releaseDate: "2022",
      tags: ["AI", "Presentations", "Design", "Content"]
    },
    "Zapier": {
      name: "Zapier",
      category: "Automation",
      description: "Automation platform connecting thousands of apps",
      longDescription: "Zapier is the leading automation platform that connects over 5,000 apps to automate workflows. With AI-powered features, it helps businesses save time by automating repetitive tasks and creating seamless integrations.",
      features: [
        "5,000+ app integrations",
        "Visual workflow builder",
        "AI-powered automation",
        "Multi-step workflows",
        "Team collaboration",
        "Enterprise security"
      ],
      pricing: "Free tier available, Pro from $19.99/month",
      website: "https://zapier.com",
      rating: 4.5,
      userCount: "5M+",
      releaseDate: "2011",
      tags: ["Automation", "Integration", "Workflow", "SaaS"]
    },
    "Lindy": {
      name: "Lindy",
      category: "AI Agent",
      description: "AI assistant that automates business processes",
      longDescription: "Lindy is an AI agent platform that helps businesses automate complex processes and workflows. It can handle customer service, data entry, scheduling, and other business tasks with human-like intelligence.",
      features: [
        "Process automation",
        "Customer service AI",
        "Data processing",
        "Scheduling automation",
        "Integration capabilities",
        "Learning algorithms"
      ],
      pricing: "Custom pricing based on usage",
      website: "https://lindy.ai",
      rating: 4.7,
      userCount: "100K+",
      releaseDate: "2023",
      tags: ["AI", "Agent", "Business", "Automation"]
    },
    "Sora": {
      name: "Sora",
      category: "AI Video",
      description: "OpenAI's text-to-video AI model",
      longDescription: "Sora is OpenAI's groundbreaking text-to-video AI model that can generate high-quality videos from text descriptions. It represents a major breakthrough in AI video generation technology.",
      features: [
        "Text-to-video generation",
        "High-quality output",
        "Complex scene understanding",
        "Multiple shot types",
        "Consistent characters",
        "Realistic physics"
      ],
      pricing: "Limited access - Pricing TBA",
      website: "https://openai.com/sora",
      rating: 4.9,
      userCount: "Limited Beta",
      releaseDate: "2024",
      tags: ["AI", "Video", "OpenAI", "Generation"]
    },
    "Veo 3": {
      name: "Veo 3",
      category: "AI Video",
      description: "Google's advanced AI video generation model",
      longDescription: "Veo 3 is Google's latest AI video generation model that creates high-quality videos from text prompts. It offers advanced control over video generation with improved realism and consistency.",
      features: [
        "Text-to-video generation",
        "High resolution output",
        "Advanced controls",
        "Realistic motion",
        "Style consistency",
        "Long-form videos"
      ],
      pricing: "Research preview - Pricing TBA",
      website: "https://deepmind.google/technologies/veo/",
      rating: 4.8,
      userCount: "Research Access",
      releaseDate: "2024",
      tags: ["AI", "Video", "Google", "Research"]
    },
    "Factory": {
      name: "Factory",
      category: "AI Tool",
      description: "AI-powered software development platform",
      longDescription: "Factory is an AI-powered platform that automates software development workflows. It helps teams build, test, and deploy applications faster with intelligent automation and AI assistance.",
      features: [
        "Automated development",
        "CI/CD integration",
        "Code quality checks",
        "Testing automation",
        "Deployment pipelines",
        "Team collaboration"
      ],
      pricing: "Contact for pricing",
      website: "https://factory.ai",
      rating: 4.5,
      userCount: "Enterprise",
      releaseDate: "2024",
      tags: ["AI", "Development", "Enterprise", "Automation"]
    },
    "Rork": {
      name: "Rork",
      category: "AI Tool",
      description: "AI development assistant and code generator",
      longDescription: "Rork is an AI-powered development tool that assists with code generation, debugging, and optimization. It's designed to help developers write better code faster with intelligent suggestions and automation.",
      features: [
        "Code generation",
        "Debugging assistance",
        "Code optimization",
        "Pattern recognition",
        "Language support",
        "IDE integration"
      ],
      pricing: "Free tier available, Pro from $15/month",
      website: "https://rork.ai",
      rating: 4.3,
      userCount: "75K+",
      releaseDate: "2024",
      tags: ["AI", "Code", "Debugging", "Optimization"]
    },
    "Firebase Studio": {
      name: "Firebase Studio",
      category: "Database",
      description: "Google's app development platform with AI features",
      longDescription: "Firebase Studio is Google's comprehensive app development platform that now includes AI-powered features. It provides backend services, databases, authentication, and hosting with intelligent automation and optimization.",
      features: [
        "Real-time database",
        "Authentication system",
        "Cloud functions",
        "Hosting platform",
        "Analytics integration",
        "AI-powered insights"
      ],
      pricing: "Free tier available, Pay-as-you-go",
      website: "https://firebase.google.com",
      rating: 4.6,
      userCount: "3M+",
      releaseDate: "2011",
      tags: ["Database", "Backend", "Google", "Mobile"]
    }
  };

  return toolsData[toolName] || {
    name: toolName,
    category: "AI Tool",
    description: "AI-powered development tool",
    longDescription: "This is an AI-powered tool that helps developers build better applications faster.",
    features: ["AI assistance", "Code generation", "Productivity boost"],
    pricing: "Contact for pricing",
    website: "#",
    rating: 4.5,
    userCount: "10K+",
    releaseDate: "2024",
    tags: ["AI", "Development"]
  };
};

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  if (!tool) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4 mb-4">
            <ToolLogo name={tool.name} category={tool.category} />
            <div>
              <DialogTitle className="text-2xl font-bold">{tool.name}</DialogTitle>
              <Badge variant="secondary" className="mt-1">
                {tool.category}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
              <div className="font-semibold">{tool.rating}</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Users className="w-5 h-5 text-blue-500 mx-auto mb-1" />
              <div className="font-semibold">{tool.userCount}</div>
              <div className="text-sm text-gray-600">Users</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-green-500 mx-auto mb-1" />
              <div className="font-semibold">{tool.releaseDate}</div>
              <div className="text-sm text-gray-600">Released</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Globe className="w-5 h-5 text-purple-500 mx-auto mb-1" />
              <div className="font-semibold">Available</div>
              <div className="text-sm text-gray-600">Platform</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About {tool.name}</h3>
            <p className="text-gray-600 leading-relaxed">{tool.longDescription}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tool.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Pricing</h3>
            <p className="text-gray-700 font-medium">{tool.pricing}</p>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <Button 
              className="flex-1 vibe-button" 
              onClick={() => window.open(tool.website, '_blank')}
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              Visit Website
            </Button>
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
