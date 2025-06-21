
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Code, Zap, Users, Star, ArrowRight, Sparkles, Monitor, Bot, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredCoders = [
    {
      id: 1,
      name: "Alex Chen",
      title: "AI Agent Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      tools: ["Cursor", "Claude", "n8n", "Replit"],
      status: "Available",
      projects: 12,
      description: "Building AI-driven CRMs and workflow automation tools"
    },
    {
      id: 2,
      name: "Sarah Kim",
      title: "Micro-SaaS Builder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      tools: ["Lovable", "v0", "Windsurf"],
      status: "Freelance Only",
      projects: 8,
      description: "Rapid prototyping and beautiful web applications"
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      title: "Internal Tools Expert",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      tools: ["Bolt", "Make", "Gumloop"],
      status: "Available",
      projects: 15,
      description: "Dashboard and automation systems for enterprises"
    }
  ];

  const featuredApps = [
    {
      id: 1,
      title: "AI Customer Support Bot",
      price: "$299",
      creator: "Alex Chen",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI Agent", "Customer Service"],
      tools: ["Claude", "n8n"]
    },
    {
      id: 2,
      title: "Inventory Management Dashboard",
      price: "$199",
      creator: "Marcus Rodriguez",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Dashboard", "Internal Tool"],
      tools: ["Bolt", "React"]
    },
    {
      id: 3,
      title: "Social Media Scheduler",
      price: "$149",
      creator: "Sarah Kim",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Micro-SaaS", "Marketing"],
      tools: ["Lovable", "v0"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/30 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Vibe Board
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/marketplace" className="text-gray-300 hover:text-purple-400 transition-colors">
                Marketplace
              </Link>
              <Link to="/coders" className="text-gray-300 hover:text-purple-400 transition-colors">
                Vibe Coders
              </Link>
              <Link to="/jobs" className="text-gray-300 hover:text-purple-400 transition-colors">
                Jobs
              </Link>
              <Link to="/post-gig" className="text-gray-300 hover:text-purple-400 transition-colors">
                Post Gig
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-300 hover:text-purple-400">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Join as Vibe Coder
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Vibe Coders
              </span>
              <br />
              <span className="text-white">Meet Companies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The marketplace for fast, high-quality app development. Connect with talented developers 
              who build with AI tools, or find ready-made solutions for your business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for vibe coders, apps, or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Vibe Coders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">1,200+</div>
              <div className="text-gray-300">Apps Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Companies Hiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vibe Coders */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Vibe Coders</h2>
              <p className="text-gray-400">Top-rated developers ready to build your next project</p>
            </div>
            <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCoders.map((coder) => (
              <Card key={coder.id} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={coder.avatar}
                        alt={coder.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-white text-lg">{coder.name}</CardTitle>
                        <p className="text-purple-400 text-sm">{coder.title}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={coder.status === "Available" ? "default" : "secondary"}
                      className={coder.status === "Available" 
                        ? "bg-green-500/20 text-green-400 border-green-500/30" 
                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }
                    >
                      {coder.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{coder.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{coder.rating}</span>
                    </div>
                    <div>{coder.projects} projects</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {coder.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-purple-300 border-purple-500/30">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps Marketplace */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Apps & Tools</h2>
              <p className="text-gray-400">Ready-made solutions you can purchase and deploy today</p>
            </div>
            <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
              Browse Marketplace <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app) => (
              <Card key={app.id} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {app.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">{app.title}</CardTitle>
                  <p className="text-purple-400 text-sm">by {app.creator}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-pink-300 border-pink-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-gray-300 bg-slate-700/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How Vibe Board Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you're a developer or a company, getting started is simple
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Vibe Coders */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center">
                <Code className="mr-3" />
                For Vibe Coders
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Create Your Profile</h4>
                    <p className="text-gray-400">Showcase your skills, tools, and previous projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">List Your Apps</h4>
                    <p className="text-gray-400">Upload demos and sell ready-made solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Get Hired</h4>
                    <p className="text-gray-400">Companies will reach out for projects and full-time roles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Companies */}
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-8 flex items-center">
                <Users className="mr-3" />
                For Companies
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Browse Talent</h4>
                    <p className="text-gray-400">Discover vibe coders with the exact skills you need</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Buy or Hire</h4>
                    <p className="text-gray-400">Purchase ready apps or hire for custom projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Deploy Fast</h4>
                    <p className="text-gray-400">Get your solution deployed quickly with expert support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Vibe?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether you're looking to build, buy, or hire — Vibe Board has you covered
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8">
              Join as Vibe Coder
            </Button>
            <Button size="lg" variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10 px-8">
              Post a Gig
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-slate-900/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/marketplace" className="hover:text-purple-400">Marketplace</Link></li>
                <li><Link to="/coders" className="hover:text-purple-400">Vibe Coders</Link></li>
                <li><Link to="/jobs" className="hover:text-purple-400">Jobs</Link></li>
                <li><Link to="/post-gig" className="hover:text-purple-400">Post Gig</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Cursor</li>
                <li>Windsurf</li>
                <li>Claude Code</li>
                <li>Lovable</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-purple-400">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
                <li><Link to="/terms" className="hover:text-purple-400">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-purple-400">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Vibe Board
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting vibe coders with companies for fast, high-quality development.
              </p>
            </div>
          </div>
          <div className="border-t border-purple-800/30 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vibe Board. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
