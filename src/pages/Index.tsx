
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, Star, Trophy, Briefcase, Search, Sparkles, Code, MapPin, Clock, DollarSign, ShoppingCart, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ToolLogo from "@/components/ToolLogo";
import { SparklesCore } from "@/components/ui/sparkles";
import { ToolModal } from "@/components/ToolModal";
import { VibeyChat } from "@/components/VibeyChat";
import { useState } from "react";

const Index = () => {
  
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tools = [
    
    { name: "Cursor", category: "AI Editor" },
    { name: "Windsurf", category: "AI IDE" },
    { name: "Claude Code", category: "AI Assistant" },
    { name: "Codex", category: "AI Model" },
    { name: "Devin", category: "AI Engineer" },
    { name: "Bolt", category: "Full-Stack" },
    { name: "Lovable", category: "Web Apps" },
    { name: "Replit", category: "Cloud IDE" },
    { name: "v0", category: "UI Generator" },
    { name: "Manus AI", category: "AI Tool" },
    { name: "Gamma", category: "Presentations" },
    { name: "Zapier", category: "Automation" },
    { name: "Lindy", category: "AI Agent" },
    { name: "Sora", category: "AI Video" },
    { name: "Veo 3", category: "AI Video" },
    { name: "Factory", category: "AI Tool" },
    { name: "Rork", category: "AI Tool" },
    { name: "Firebase Studio", category: "Database" }
  ];

  const handleToolClick = (toolName: string) => {
    setSelectedTool(toolName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTool(null);
  };

  const getSkillBadgeColor = (skill: string) => {
    const skillCategories = {
      // AI Tools
      "Cursor": "bg-blue-100 text-blue-700 border-blue-200",
      "Claude": "bg-orange-100 text-orange-700 border-orange-200",
      "ChatGPT": "bg-green-100 text-green-700 border-green-200",
      "Copilot": "bg-purple-100 text-purple-700 border-purple-200",
      "v0": "bg-gray-100 text-gray-700 border-gray-200",
      "Bolt": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Windsurf": "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Replit": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Lovable": "bg-pink-100 text-pink-700 border-pink-200",
      "Codex": "bg-indigo-100 text-indigo-700 border-indigo-200",
      
      // Frontend
      "React": "bg-sky-100 text-sky-700 border-sky-200",
      "Next.js": "bg-slate-100 text-slate-700 border-slate-200",
      "Vue": "bg-green-100 text-green-700 border-green-200",
      "Angular": "bg-red-100 text-red-700 border-red-200",
      "Tailwind": "bg-teal-100 text-teal-700 border-teal-200",
      
      // Backend
      "Node.js": "bg-lime-100 text-lime-700 border-lime-200",
      "Python": "bg-blue-100 text-blue-700 border-blue-200",
      "FastAPI": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Supabase": "bg-green-100 text-green-700 border-green-200",
      "Firebase": "bg-orange-100 text-orange-700 border-orange-200",
      
      // Automation
      "n8n": "bg-red-100 text-red-700 border-red-200",
      "Make": "bg-purple-100 text-purple-700 border-purple-200",
      "Zapier": "bg-orange-100 text-orange-700 border-orange-200",
      "Gumloop": "bg-indigo-100 text-indigo-700 border-indigo-200",
      
      // Mobile
      "React Native": "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Flutter": "bg-blue-100 text-blue-700 border-blue-200",
      
      // No-Code
      "Bubble": "bg-blue-100 text-blue-700 border-blue-200",
      "Webflow": "bg-purple-100 text-purple-700 border-purple-200",
    };
    
    return skillCategories[skill] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getSpecialtyBadgeColor = (specialty: string) => {
    const specialtyColors = {
      "AI Agents": "bg-purple-100 text-purple-700 border-purple-200",
      "Custom Dashboards": "bg-blue-100 text-blue-700 border-blue-200",
      "Mobile Apps": "bg-green-100 text-green-700 border-green-200",
      "Micro SaaS": "bg-orange-100 text-orange-700 border-orange-200",
      "Automation": "bg-red-100 text-red-700 border-red-200",
      "E-commerce": "bg-pink-100 text-pink-700 border-pink-200",
      "Data Visualization": "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Landing Pages": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Web Scraping": "bg-indigo-100 text-indigo-700 border-indigo-200",
      "API Integration": "bg-emerald-100 text-emerald-700 border-emerald-200"
    };
    
    return specialtyColors[specialty] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="border-b border-purple-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Vibe Board
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/coders" className="text-gray-600 hover:text-purple-600 transition-colors">
                Browse Vibe Coders
              </Link>
              <Link to="/marketplace" className="text-gray-600 hover:text-purple-600 transition-colors">
                Marketplace
              </Link>
              <Link to="/jobs" className="text-gray-600 hover:text-purple-600 transition-colors">
                Post a Gig
              </Link>
              <Link to="/waitlist" className="text-gray-600 hover:text-purple-600 transition-colors">
                Waitlist
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/waitlist">
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                  Sign In
                </Button>
              </Link>
              <Link to="/waitlist">
                <Button className="vibe-button">
                  Apply as Vibe Coder
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center relative z-20">
          {/* Background Sparkles */}
          <div className="absolute inset-0 w-full h-full">
            <SparklesCore
              id="tsparticleshero"
              background="transparent"
              minSize={0.4}
              maxSize={1.2}
              particleDensity={80}
              className="w-full h-full"
              particleColor="#9333ea"
              speed={0.5}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-30">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Vibe Coders Meet{" "}
              <span className="hero-gradient-text">
                Amazing Opportunities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with top vibe builders who specialize in rapid prototyping, AI-driven development, and cutting-edge tools
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/coders">
                <Button size="lg" className="vibe-button text-lg px-8 py-4">
                  <Users className="mr-2 w-5 h-5" />
                  Find Vibe Coders
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button size="lg" variant="outline" className="vibe-button-outline text-lg px-8 py-4">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Post a Project
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">300+</div>
                <div className="text-gray-600 text-lg">Vibe Coders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">1,000+</div>
                <div className="text-gray-600 text-lg">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">$100k+</div>
                <div className="text-gray-600 text-lg">Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Vibe Board</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect you with developers who live and breathe modern tools like Cursor, Claude, v0, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="vibe-card p-8 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Lightning Fast Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Our vibe coders use AI-powered tools and modern frameworks to deliver projects 10x faster than traditional development.
                </p>
              </CardContent>
            </Card>

            <Card className="vibe-card p-8 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Cutting-Edge Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  From Cursor and Claude to v0 and Bolt, our developers are experts in the latest AI-driven development tools.
                </p>
              </CardContent>
            </Card>

            <Card className="vibe-card p-8 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Join thousands of satisfied clients who've built successful products with our talented vibe coders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Popular Tools</span> Our Coders Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with developers who master the latest AI-powered development tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={tool.name} 
                className="vibe-card p-6 text-center hover:scale-105 transition-transform cursor-pointer"
                onClick={() => handleToolClick(tool.name)}
              >
                <CardContent className="p-0 flex flex-col items-center justify-center">
                  <ToolLogo name={tool.name} category={tool.category} />
                  <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                    {tool.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vibe Coders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Featured Vibe Coders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover talented developers who are ready to bring your ideas to life with cutting-edge tools and lightning-fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "AI Agent Specialist",
                avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face",
                rating: 4.9,
                reviews: 127,
                location: "San Francisco, CA",
                oneLiner: "Specializes in AI-powered web apps with rapid prototyping using Cursor and Claude.",
                tools: ["Cursor", "Claude", "Next.js", "Supabase", "TypeScript"],
                specialties: ["AI Agents", "Custom Dashboards", "API Integration"],
                recentProjects: [
                  { name: "AI Chat Assistant", price: "$2,500" },
                  { name: "Smart Analytics Dashboard", price: "$3,200" }
                ],
                completedProjects: 89,
                hourlyRate: "$85",
                featured: true,
                available: true
              },
              {
                name: "Sarah Rodriguez",
                role: "Micro SaaS Builder",
                avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
                rating: 5.0,
                reviews: 203,
                location: "Austin, TX",
                oneLiner: "Expert in creating beautiful, responsive micro SaaS applications using v0 and modern design tools.",
                tools: ["v0", "Lovable", "React", "Tailwind", "Webflow"],
                specialties: ["Micro SaaS", "Landing Pages", "E-commerce"],
                recentProjects: [
                  { name: "SaaS Landing Page", price: "$1,800" },
                  { name: "E-commerce Store", price: "$4,500" }
                ],
                completedProjects: 156,
                hourlyRate: "$75",
                featured: true,
                available: true
              },
              {
                name: "Marcus Thompson",
                role: "Automation Expert",
                avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
                rating: 4.8,
                reviews: 94,
                location: "Remote",
                oneLiner: "Building seamless workflows and automations that save businesses time and money.",
                tools: ["n8n", "Make", "Zapier", "Supabase", "Python"],
                specialties: ["Automation", "API Integration", "Web Scraping"],
                recentProjects: [
                  { name: "CRM Automation System", price: "$3,800" },
                  { name: "Data Pipeline Setup", price: "$2,200" }
                ],
                completedProjects: 67,
                hourlyRate: "$90",
                featured: false,
                available: true
              },
              {
                name: "Emma Wilson",
                role: "Full-Stack Developer",
                avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
                rating: 4.9,
                reviews: 156,
                location: "Seattle, WA",
                oneLiner: "End-to-end application development with modern AI tools and frameworks.",
                tools: ["Bolt", "Windsurf", "React", "Node.js", "TypeScript"],
                specialties: ["Custom Dashboards", "Mobile Apps", "API Integration"],
                recentProjects: [
                  { name: "Project Management App", price: "$5,200" },
                  { name: "Mobile Dashboard", price: "$3,700" }
                ],
                completedProjects: 112,
                hourlyRate: "$80",
                featured: false,
                available: false
              },
              {
                name: "David Kim",
                role: "AI & Backend Specialist",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                rating: 4.7,
                reviews: 89,
                location: "New York, NY",
                oneLiner: "Building intelligent backends and AI integrations for modern applications.",
                tools: ["Claude", "Replit", "Python", "FastAPI", "Codex"],
                specialties: ["AI Agents", "Data Visualization", "API Integration"],
                recentProjects: [
                  { name: "AI Content Generator", price: "$4,800" },
                  { name: "Analytics Platform", price: "$6,200" }
                ],
                completedProjects: 73,
                hourlyRate: "$95",
                featured: true,
                available: true
              },
              {
                name: "Lisa Chang",
                role: "No-Code Solutions Expert",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=400&h=400&fit=crop&crop=face",
                rating: 5.0,
                reviews: 134,
                location: "Los Angeles, CA",
                oneLiner: "Rapid prototyping and MVP development using cutting-edge no-code platforms.",
                tools: ["Gumloop", "Make", "Bubble", "Webflow", "Lovable"],
                specialties: ["Landing Pages", "E-commerce", "Micro SaaS"],
                recentProjects: [
                  { name: "MVP Prototype", price: "$2,800" },
                  { name: "Business Directory", price: "$3,500" }
                ],
                completedProjects: 98,
                hourlyRate: "$70",
                featured: false,
                available: true
              }
            ].map((coder, index) => (
              <Card 
                key={coder.name} 
                className={`vibe-card hover:scale-105 transition-transform relative ${
                  coder.featured ? "ring-2 ring-purple-200" : ""
                }`}
              >
                {coder.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-purple-500 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Header with Avatar, Name, Role, Rating */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <img 
                        src={coder.avatar} 
                        alt={coder.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                        coder.available ? "bg-green-400" : "bg-gray-400"
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{coder.name}</h3>
                      <p className="text-purple-600 font-semibold mb-2">{coder.role}</p>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold ml-1">{coder.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({coder.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {coder.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-purple-600">{coder.hourlyRate}/hr</div>
                      <div className={`text-sm font-medium ${
                        coder.available ? "text-green-600" : "text-gray-500"
                      }`}>
                        {coder.available ? "Available" : "Busy"}
                      </div>
                    </div>
                  </div>
                  
                  {/* One-liner */}
                  <p className="text-gray-600 mb-4 italic">"{coder.oneLiner}"</p>
                  
                  {/* Tools */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {coder.tools.map((tool) => (
                        <Badge 
                          key={tool} 
                          variant="secondary" 
                          className={`${getSkillBadgeColor(tool)} border text-xs`}
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {coder.specialties.map((specialty) => (
                        <Badge 
                          key={specialty} 
                          variant="outline" 
                          className={`${getSpecialtyBadgeColor(specialty)} text-xs`}
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Recent Projects */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Recent Projects</h4>
                    <div className="space-y-2">
                      {coder.recentProjects.map((project, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{project.name}</span>
                          <span className="font-semibold text-green-600">{project.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Projects Completed */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-gray-600">{coder.completedProjects} projects completed</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 vibe-button-outline">
                      View Profile
                    </Button>
                    <Button className="flex-1 vibe-button">
                      Hire
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/coders">
              <Button size="lg" variant="outline" className="vibe-button-outline">
                <Users className="mr-2 w-5 h-5" />
                Browse All Vibe Coders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use apps and tools built by our talented vibe coders. Get started instantly with these high-quality solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "AI Chat Dashboard",
                description: "Complete chat interface with AI integration, real-time messaging, and beautiful UI components.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
                price: "$2,499",
                rating: 4.9,
                reviews: 87,
                tags: ["AI", "Chat", "React"],
                author: "Alex Chen"
              },
              {
                name: "E-commerce Starter Kit",
                description: "Full-featured online store with payment integration, inventory management, and admin dashboard.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                price: "$3,299",
                rating: 5.0,
                reviews: 134,
                tags: ["E-commerce", "Payments", "Admin"],
                author: "Sarah Rodriguez"
              },
              {
                name: "SaaS Landing Page Template",
                description: "Modern, conversion-optimized landing page template with animations and responsive design.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                price: "$2,199",
                rating: 4.8,
                reviews: 156,
                tags: ["Landing Page", "SaaS", "Conversion"],
                author: "Emma Wilson"
              },
              {
                name: "Task Management App",
                description: "Complete project management solution with team collaboration, time tracking, and reporting.",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
                price: "$2,799",
                rating: 4.7,
                reviews: 92,
                tags: ["Productivity", "Teams", "Management"],
                author: "Marcus Thompson"
              },
              {
                name: "Crypto Portfolio Tracker",
                description: "Real-time cryptocurrency portfolio tracking with charts, alerts, and market analysis tools.",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
                price: "$2,099",
                rating: 4.6,
                reviews: 73,
                tags: ["Crypto", "Finance", "Charts"],
                author: "David Kim"
              },
              {
                name: "Social Media Scheduler",
                description: "Automated social media posting tool with content calendar, analytics, and multi-platform support.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
                price: "$2,599",
                rating: 4.9,
                reviews: 108,
                tags: ["Social Media", "Automation", "Analytics"],
                author: "Lisa Chang"
              }
            ].map((product, index) => (
              <Card key={product.name} className="vibe-card overflow-hidden hover:scale-105 transition-transform">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    </div>
                    <span className="text-sm text-gray-500">by {product.author}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 vibe-button text-sm">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Buy Now
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="vibe-button-outline">
                <Search className="mr-2 w-5 h-5" />
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join the community of vibe coders and companies building the future with AI-powered development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coders">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Search className="mr-2 w-5 h-5" />
                Find Developers
              </Button>
            </Link>
            <Link to="/waitlist">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
                <Users className="mr-2 w-5 h-5" />
                Join as Coder
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Vibe Board</span>
              </Link>
              <p className="text-gray-600 mb-4 max-w-md">
                The marketplace for fast, high-quality app development. Connect with talented vibe coders or find ready-made solutions for your business.
              </p>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">
                  For feedback and requests, email support at{" "}
                  <a 
                    href="mailto:dante@nativestack.ai" 
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    dante@nativestack.ai
                  </a>
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For Clients</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/coders" className="hover:text-purple-600 transition-colors">Browse Developers</Link></li>
                <li><Link to="/marketplace" className="hover:text-purple-600 transition-colors">App Marketplace</Link></li>
                <li><Link to="/jobs" className="hover:text-purple-600 transition-colors">Post a Project</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For Developers</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/waitlist" className="hover:text-purple-600 transition-colors">Apply as Vibe Coder</Link></li>
                <li><Link to="/marketplace" className="hover:text-purple-600 transition-colors">Sell Your Apps</Link></li>
                <li><Link to="/waitlist" className="hover:text-purple-600 transition-colors">Success Stories</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Vibe Board by NativeStack AI LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/waitlist" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Privacy Policy</Link>
              <Link to="/waitlist" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Terms of Service</Link>
              <Link to="/waitlist" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Tool Modal */}
      <ToolModal 
        tool={selectedTool ? { name: selectedTool, category: tools.find(t => t.name === selectedTool)?.category || "AI Tool" } : null}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Vibey Chat Widget */}
      <VibeyChat />
    </div>
  );
};

export default Index;
