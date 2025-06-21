
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Code, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const VibeCoders = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const coders = [
    {
      id: 1,
      name: "Alex Chen",
      title: "AI Agent Specialist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 23,
      tools: ["Cursor", "Claude", "n8n", "Replit"],
      status: "Available",
      projects: 12,
      location: "San Francisco, CA",
      hourlyRate: "$85/hr",
      description: "Specialized in building AI-driven CRMs and workflow automation tools. 5+ years experience with machine learning and natural language processing.",
      skills: ["AI/ML", "CRM Development", "Automation", "API Integration"],
      portfolio: ["AI Customer Support Bot", "Smart Lead Qualifier", "Automated Report Generator"],
      featured: true
    },
    {
      id: 2,
      name: "Sarah Kim",
      title: "Micro-SaaS Builder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviews: 31,
      tools: ["Lovable", "v0", "Windsurf", "React"],
      status: "Freelance Only",
      projects: 18,
      location: "Austin, TX",
      hourlyRate: "$75/hr",
      description: "Expert in rapid prototyping and beautiful web applications. Focused on creating delightful user experiences and scalable architectures.",
      skills: ["React/Next.js", "UI/UX", "Rapid Prototyping", "SaaS Development"],
      portfolio: ["Social Media Scheduler", "E-commerce Dashboard", "Analytics Platform"],
      featured: false
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      title: "Internal Tools Expert",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviews: 18,
      tools: ["Bolt", "Make", "Gumloop", "Python"],
      status: "Available",
      projects: 25,
      location: "New York, NY",
      hourlyRate: "$90/hr",
      description: "Building dashboard and automation systems for enterprises. Strong background in data visualization and workflow optimization.",
      skills: ["Dashboard Development", "Data Visualization", "Enterprise Tools", "Automation"],
      portfolio: ["Inventory Management System", "HR Dashboard", "Analytics Suite"],
      featured: true
    },
    {
      id: 4,
      name: "Jennifer Walsh",
      title: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviews: 42,
      tools: ["Cursor", "Windsurf", "React", "Node.js"],
      status: "Available",
      projects: 33,
      location: "Seattle, WA",
      hourlyRate: "$80/hr",
      description: "Full-stack developer with expertise in modern web technologies. Passionate about creating scalable and maintainable applications.",
      skills: ["Full-Stack Development", "API Design", "Database Architecture", "DevOps"],
      portfolio: ["E-commerce Platform", "Project Management Tool", "Real-time Chat App"],
      featured: false
    },
    {
      id: 5,
      name: "David Park",
      title: "Automation Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      reviews: 28,
      tools: ["Make", "Gumloop", "n8n", "Zapier"],
      status: "Selling Projects",
      projects: 19,
      location: "Los Angeles, CA",
      hourlyRate: "$70/hr",
      description: "Automation expert helping businesses streamline their workflows. Specialized in no-code/low-code solutions and process optimization.",
      skills: ["Workflow Automation", "No-Code Solutions", "Process Optimization", "Integration"],
      portfolio: ["Lead Generation Bot", "Email Automation System", "Data Sync Tool"],
      featured: true
    },
    {
      id: 6,
      name: "Emma Thompson",
      title: "AI/ML Developer",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviews: 35,
      tools: ["Claude", "Replit", "Python", "TensorFlow"],
      status: "Available",
      projects: 22,
      location: "Boston, MA",
      hourlyRate: "$95/hr",
      description: "AI/ML specialist with a focus on practical business applications. Expert in natural language processing and predictive analytics.",
      skills: ["Machine Learning", "NLP", "Predictive Analytics", "AI Integration"],
      portfolio: ["Sentiment Analysis Tool", "Predictive Model", "Chatbot Framework"],
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Freelance Only":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Selling Projects":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

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
              <Link to="/marketplace" className="text-gray-300 hover:text-purple-400 transition-colors">
                Marketplace
              </Link>
              <Link to="/coders" className="text-purple-400 font-medium">
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
          <h1 className="text-4xl font-bold text-white mb-4">Vibe Coders</h1>
          <p className="text-gray-400 text-lg">Discover talented developers who build with cutting-edge AI tools</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, skills, or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
            </div>
            
            <div className="flex gap-3">
              <Select defaultValue="all-status">
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="freelance-only">Freelance Only</SelectItem>
                  <SelectItem value="selling-projects">Selling Projects</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-tools">
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Tools" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="all-tools">All Tools</SelectItem>
                  <SelectItem value="cursor">Cursor</SelectItem>
                  <SelectItem value="claude">Claude</SelectItem>
                  <SelectItem value="lovable">Lovable</SelectItem>
                  <SelectItem value="windsurf">Windsurf</SelectItem>
                  <SelectItem value="bolt">Bolt</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-skills">
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="all-skills">All Skills</SelectItem>
                  <SelectItem value="ai-ml">AI/ML</SelectItem>
                  <SelectItem value="full-stack">Full-Stack</SelectItem>
                  <SelectItem value="automation">Automation</SelectItem>
                  <SelectItem value="ui-ux">UI/UX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-400">{coders.length} vibe coders found</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-40 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="projects">Most Projects</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Coders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {coders.map((coder) => (
            <Card 
              key={coder.id} 
              className={`bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${
                coder.featured ? "ring-1 ring-purple-400/20" : ""
              }`}
            >
              {coder.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Featured
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={coder.avatar}
                      alt={coder.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-white text-xl">{coder.name}</CardTitle>
                      <p className="text-purple-400 font-medium">{coder.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{coder.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(coder.status)}>
                      {coder.status}
                    </Badge>
                    <p className="text-purple-400 font-bold mt-2">{coder.hourlyRate}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4">{coder.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{coder.rating}</span>
                    <span className="text-gray-400">({coder.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="text-white">{coder.projects} projects</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {coder.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-pink-300 border-pink-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {coder.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-gray-300 bg-slate-700/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Recent Projects</h4>
                  <div className="space-y-1">
                    {coder.portfolio.slice(0, 3).map((project) => (
                      <div key={project} className="flex items-center space-x-2">
                        <ExternalLink className="w-3 h-3 text-purple-400" />
                        <span className="text-gray-300 text-sm hover:text-purple-400 cursor-pointer">
                          {project}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    View Profile
                  </Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10 px-8">
            Load More Coders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VibeCoders;
