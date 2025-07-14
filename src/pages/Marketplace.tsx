import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Zap, Search, Filter, Grid, List, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTool, setSelectedTool] = useState("all");

  const apps = [
    {
      id: 1,
      title: "AI Customer Support Bot",
      price: "$299",
      creator: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI Agent", "Customer Service"],
      tools: ["Claude", "n8n"],
      rating: 4.9,
      reviews: 23,
      description: "Complete AI-powered customer support system with natural language processing",
      featured: true
    },
    {
      id: 2,
      title: "Inventory Management Dashboard",
      price: "$199",
      creator: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Dashboard", "Internal Tool"],
      tools: ["Bolt", "React"],
      rating: 4.8,
      reviews: 18,
      description: "Real-time inventory tracking with automated alerts and reporting",
      featured: false
    },
    {
      id: 3,
      title: "Social Media Scheduler",
      price: "$149",
      creator: "Sarah Kim",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Micro-SaaS", "Marketing"],
      tools: ["Lovable", "v0"],
      rating: 4.7,
      reviews: 31,
      description: "Schedule and manage social media posts across multiple platforms",
      featured: true
    },
    {
      id: 4,
      title: "E-commerce Analytics Tool",
      price: "$249",
      creator: "Jennifer Walsh",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Analytics", "E-commerce"],
      tools: ["Cursor", "Windsurf"],
      rating: 4.9,
      reviews: 15,
      description: "Advanced analytics dashboard for e-commerce performance tracking",
      featured: false
    },
    {
      id: 5,
      title: "Project Management Suite",
      price: "$349",
      creator: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      tags: ["Project Management", "Internal Tool"],
      tools: ["Make", "Gumloop"],
      rating: 4.6,
      reviews: 42,
      description: "Complete project management solution with team collaboration features",
      featured: true
    },
    {
      id: 6,
      title: "Lead Generation Bot",
      price: "$179",
      creator: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&h=250&fit=crop",
      tags: ["AI Agent", "Sales"],
      tools: ["Claude", "Replit"],
      rating: 4.8,
      reviews: 27,
      description: "Automated lead generation and qualification system",
      featured: false
    }
  ];

  const categories = [
    "All Categories",
    "AI Agent",
    "Dashboard",
    "Micro-SaaS",
    "Internal Tool",
    "E-commerce",
    "Analytics",
    "Marketing",
    "CRM",
    "Automation"
  ];

  const tools = [
    "All Tools",
    "Cursor",
    "Windsurf", 
    "Claude",
    "Lovable",
    "v0",
    "Bolt",
    "n8n",
    "Make",
    "Gumloop",
    "Replit"
  ];

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
              <Link to="/marketplace" className="text-purple-600 font-semibold">
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
              <Link to="/auth">
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="vibe-button">
                  Join as Vibe Coder
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            App <span className="hero-gradient-text">Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover ready-made apps and tools built by talented vibe coders using cutting-edge AI development tools.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card className="vibe-card p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search apps, tools, or creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTool} onValueChange={setSelectedTool}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Tool" />
                  </SelectTrigger>
                  <SelectContent>
                    {tools.map((tool) => (
                      <SelectItem key={tool} value={tool.toLowerCase().replace(' ', '-')}>
                        {tool}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex bg-white border border-gray-200 rounded-lg p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "vibe-button" : ""}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "vibe-button" : ""}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">{apps.length} apps found</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-6"
        }>
          {apps.map((app) => (
            <Card 
              key={app.id} 
              className={`vibe-card hover:scale-105 transition-transform overflow-hidden ${
                viewMode === "list" ? "flex" : ""
              } ${app.featured ? "ring-2 ring-purple-200" : ""}`}
            >
              {app.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-purple-500 text-white">
                    Featured
                  </Badge>
                </div>
              )}
              
              <div className={`${viewMode === "list" ? "w-80" : ""} aspect-video relative overflow-hidden`}>
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-purple-600 font-bold">
                    {app.price}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white text-pink-500">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-900 text-lg">{app.title}</CardTitle>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={app.avatar}
                        alt={app.creator}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-purple-600 text-sm">by {app.creator}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700 text-sm">{app.rating}</span>
                      <span className="text-gray-500 text-sm">({app.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-pink-600 border-pink-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-purple-700 bg-purple-100">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 vibe-button">
                      View Details
                    </Button>
                    <Button variant="outline" className="vibe-button-outline">
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="vibe-button-outline px-8">
            Load More Apps
          </Button>
        </div>
      </div>

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
                <li><a href="#" className="hover:text-purple-600 transition-colors">Join as Coder</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Sell Your Apps</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Success Stories</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Vibe Board. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Marketplace;
