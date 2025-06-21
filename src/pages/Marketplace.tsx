
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Grid, List, Star, Heart } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/30 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vibe Board
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/marketplace" className="text-purple-400 font-medium">
                Marketplace
              </Link>
              <Link to="/coders" className="text-gray-300 hover:text-purple-400 transition-colors">
                Vibe Coders
              </Link>
              <Link to="/jobs" className="text-gray-300 hover:text-purple-400 transition-colors">
                Jobs
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-300 hover:text-purple-400">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Join
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">App Marketplace</h1>
          <p className="text-gray-400 text-lg">Discover ready-made apps and tools built by vibe coders</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search apps, tools, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTool} onValueChange={setSelectedTool}>
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Tool" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  {tools.map((tool) => (
                    <SelectItem key={tool} value={tool.toLowerCase().replace(' ', '-')}>
                      {tool}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex bg-slate-800/50 border border-purple-500/30 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-purple-500" : ""}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-purple-500" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-400">{apps.length} apps found</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-40 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
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
              className={`bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden ${
                viewMode === "list" ? "flex" : ""
              } ${app.featured ? "ring-1 ring-purple-400/20" : ""}`}
            >
              {app.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
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
                  <Badge className="bg-slate-900/80 text-purple-400 border-purple-500/30">
                    {app.price}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-slate-900/60 hover:bg-slate-900/80">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">{app.title}</CardTitle>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={app.avatar}
                        alt={app.creator}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-purple-400 text-sm">by {app.creator}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm">{app.rating}</span>
                      <span className="text-gray-500 text-sm">({app.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{app.description}</p>
                  
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

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      View Details
                    </Button>
                    <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
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
          <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10 px-8">
            Load More Apps
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
