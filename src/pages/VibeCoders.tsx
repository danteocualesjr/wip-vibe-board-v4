
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Zap, Search, Filter, Grid, List, Star, MapPin, Clock, Users, Code, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const VibeCoders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedRate, setSelectedRate] = useState("all");

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
      
      // Frontend
      "React": "bg-sky-100 text-sky-700 border-sky-200",
      "Next.js": "bg-slate-100 text-slate-700 border-slate-200",
      "Vue": "bg-green-100 text-green-700 border-green-200",
      "Angular": "bg-red-100 text-red-700 border-red-200",
      "Tailwind": "bg-teal-100 text-teal-700 border-teal-200",
      "Lovable": "bg-pink-100 text-pink-700 border-pink-200",
      
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
      
      // Data Science
      "TensorFlow": "bg-orange-100 text-orange-700 border-orange-200",
      "Jupyter": "bg-orange-100 text-orange-700 border-orange-200",
      "Pandas": "bg-blue-100 text-blue-700 border-blue-200",
      
      // DevOps
      "Docker": "bg-blue-100 text-blue-700 border-blue-200",
      "AWS": "bg-orange-100 text-orange-700 border-orange-200",
      "Terraform": "bg-purple-100 text-purple-700 border-purple-200",
      "Kubernetes": "bg-blue-100 text-blue-700 border-blue-200",
      
      // Languages
      "TypeScript": "bg-blue-100 text-blue-700 border-blue-200",
      "JavaScript": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Go": "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Rust": "bg-orange-100 text-orange-700 border-orange-200"
    };
    
    return skillCategories[skill] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const coders = [
    {
      name: "Alex Chen",
      title: "Full-Stack AI Developer",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 127,
      location: "San Francisco, CA",
      hourlyRate: "$85",
      skills: ["Cursor", "Claude", "Next.js", "Supabase", "TypeScript", "Tailwind", "ChatGPT", "React", "Node.js"],
      completedProjects: 89,
      responseTime: "< 1 hour",
      description: "Specialized in AI-powered web apps with rapid prototyping using Cursor and Claude.",
      featured: true,
      available: true
    },
    {
      name: "Sarah Rodriguez",
      title: "UI/UX & Frontend Specialist",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      rating: 5.0,
      reviews: 203,
      location: "Austin, TX",
      hourlyRate: "$75",
      skills: ["v0", "Lovable", "React", "Tailwind", "Figma", "Framer", "Vue", "TypeScript", "Webflow"],
      completedProjects: 156,
      responseTime: "< 30 min",
      description: "Expert in creating beautiful, responsive interfaces using v0 and modern design tools.",
      featured: true,
      available: true
    },
    {
      name: "Marcus Thompson",
      title: "Automation & Integration Expert",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      reviews: 94,
      location: "Remote",
      hourlyRate: "$90",
      skills: ["n8n", "Make", "Zapier", "Supabase", "Gumloop", "Python", "JavaScript", "Node.js", "Firebase"],
      completedProjects: 67,
      responseTime: "< 2 hours",
      description: "Building seamless workflows and automations that save businesses time and money.",
      featured: false,
      available: true
    },
    {
      name: "Emma Wilson",
      title: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 156,
      location: "New York, NY",
      hourlyRate: "$80",
      skills: ["Bolt", "Windsurf", "React", "Node.js", "TypeScript", "Next.js", "Cursor", "Supabase", "Tailwind"],
      completedProjects: 112,
      responseTime: "< 1 hour",
      description: "End-to-end application development with modern AI tools and frameworks.",
      featured: false,
      available: false
    },
    {
      name: "David Kim",
      title: "AI & Backend Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 4.7,
      reviews: 89,
      location: "Seattle, WA",
      hourlyRate: "$95",
      skills: ["Claude", "Replit", "Python", "FastAPI", "TensorFlow", "Jupyter", "ChatGPT", "Pandas", "AWS"],
      completedProjects: 73,
      responseTime: "< 3 hours",
      description: "Building intelligent backends and AI integrations for modern applications.",
      featured: true,
      available: true
    },
    {
      name: "Lisa Chang",
      title: "No-Code Solutions Expert",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=400&h=400&fit=crop&crop=face",
      rating: 5.0,
      reviews: 134,
      location: "Los Angeles, CA",
      hourlyRate: "$70",
      skills: ["Gumloop", "Make", "Bubble", "Webflow", "Zapier", "n8n", "Lovable", "v0", "Cursor"],
      completedProjects: 98,
      responseTime: "< 45 min",
      description: "Rapid prototyping and MVP development using cutting-edge no-code platforms.",
      featured: false,
      available: true
    },
    {
      name: "Jordan Martinez",
      title: "Mobile & Web Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      reviews: 167,
      location: "Miami, FL",
      hourlyRate: "$82",
      skills: ["Cursor", "React Native", "Firebase", "TypeScript", "React", "Flutter", "Next.js", "Tailwind", "Supabase"],
      completedProjects: 134,
      responseTime: "< 1.5 hours",
      description: "Cross-platform mobile and web applications with focus on performance and UX.",
      featured: false,
      available: true
    },
    {
      name: "Priya Patel",
      title: "Data Science & AI Engineer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      reviews: 92,
      location: "Boston, MA",
      hourlyRate: "$88",
      skills: ["Claude", "Python", "TensorFlow", "Jupyter", "Pandas", "ChatGPT", "FastAPI", "AWS", "Replit"],
      completedProjects: 67,
      responseTime: "< 2 hours",
      description: "Machine learning models and data-driven applications with AI integration expertise.",
      featured: true,
      available: true
    },
    {
      name: "Ryan O'Connor",
      title: "DevOps & Cloud Architect",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      rating: 4.7,
      reviews: 78,
      location: "Denver, CO",
      hourlyRate: "$92",
      skills: ["Docker", "AWS", "Terraform", "Kubernetes", "Python", "Go", "Node.js", "Rust", "TypeScript"],
      completedProjects: 89,
      responseTime: "< 4 hours",
      description: "Scalable cloud infrastructure and deployment pipelines for modern applications.",
      featured: false,
      available: true
    }
  ];

  const skills = [
    "All Skills",
    "Cursor",
    "Claude",
    "v0",
    "Lovable",
    "Bolt",
    "Windsurf",
    "n8n",
    "Make",
    "Gumloop",
    "React",
    "Next.js",
    "Python"
  ];

  const locations = [
    "All Locations",
    "Remote",
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Seattle, WA",
    "Los Angeles, CA"
  ];

  const rates = [
    "All Rates",
    "$50-$75/hr",
    "$75-$100/hr",
    "$100+/hr"
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
              <Link to="/coders" className="text-purple-600 font-semibold">
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
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                Sign In
              </Button>
              <Button className="vibe-button">
                Join as Vibe Coder
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Browse <span className="hero-gradient-text">Vibe Coders</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with elite developers who specialize in rapid prototyping, AI-driven development, and cutting-edge tools.
          </p>
        </div>

        {/* Stats Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 rounded-3xl mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600 text-lg">Active Vibe Coders</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">1,200+</div>
                <div className="text-gray-600 text-lg">Projects Completed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">4.8</div>
                <div className="text-gray-600 text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card className="vibe-card p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by name, skills, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg"
                />
              </div>
              
              <div className="flex gap-3">
                <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Skills" />
                  </SelectTrigger>
                  <SelectContent>
                    {skills.map((skill) => (
                      <SelectItem key={skill} value={skill.toLowerCase().replace(' ', '-')}>
                        {skill}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location.toLowerCase().replace(' ', '-')}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedRate} onValueChange={setSelectedRate}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    {rates.map((rate) => (
                      <SelectItem key={rate} value={rate.toLowerCase().replace(' ', '-')}>
                        {rate}
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
            <p className="text-gray-600">{coders.length} vibe coders found</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Rate: Low to High</SelectItem>
                  <SelectItem value="price-high">Rate: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Coders Grid */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-6"
        }>
          {coders.map((coder, index) => (
            <Card 
              key={coder.name} 
              className={`vibe-card hover:scale-105 transition-transform ${
                viewMode === "list" ? "flex" : ""
              } ${coder.featured ? "ring-2 ring-purple-200" : ""}`}
            >
              {coder.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-purple-500 text-white">
                    Featured
                  </Badge>
                </div>
              )}
              
              <div className={`${viewMode === "list" ? "w-80" : ""} p-6`}>
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
                    <p className="text-purple-600 font-semibold mb-2">{coder.title}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold ml-1">{coder.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({coder.reviews} reviews)</span>
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
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {coder.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {coder.responseTime}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{coder.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {coder.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`${getSkillBadgeColor(skill)} border`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-gray-600">{coder.completedProjects} projects completed</span>
                </div>
                
                <Button className="w-full vibe-button">
                  View Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="vibe-button-outline px-8">
            Load More Coders
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

export default VibeCoders;
