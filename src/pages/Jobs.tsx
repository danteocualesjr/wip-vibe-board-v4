
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, Zap, Briefcase, DollarSign, Calendar, Users, Clock, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    timeline: "",
    category: "",
    skills: [],
    experience: ""
  });

  const recentJobs = [
    {
      id: 1,
      title: "AI-Powered E-commerce Dashboard",
      budget: "$2,500 - $5,000",
      timeline: "2-3 weeks",
      category: "Dashboard",
      skills: ["Cursor", "React", "AI Integration"],
      postedBy: "TechCorp Inc.",
      postedDate: "2 hours ago",
      proposals: 12,
      description: "Need a modern dashboard for our e-commerce platform with AI-powered analytics and recommendations.",
      featured: true
    },
    {
      id: 2,
      title: "Mobile-First SaaS Landing Page",
      budget: "$800 - $1,500",
      timeline: "1 week",
      category: "Frontend",
      skills: ["v0", "Lovable", "Responsive Design"],
      postedBy: "StartupXYZ",
      postedDate: "5 hours ago",
      proposals: 8,
      description: "Create a converting landing page for our new SaaS product with modern design and animations.",
      featured: false
    },
    {
      id: 3,
      title: "Workflow Automation System",
      budget: "$3,000 - $7,000",
      timeline: "3-4 weeks",
      category: "Automation",
      skills: ["n8n", "Make", "API Integration"],
      postedBy: "BusinessFlow Co.",
      postedDate: "1 day ago",
      proposals: 15,
      description: "Build a comprehensive workflow automation system to streamline our business processes.",
      featured: true
    },
    {
      id: 4,
      title: "AI Chatbot for Customer Support",
      budget: "$1,500 - $3,000",
      timeline: "2 weeks",
      category: "AI Agent",
      skills: ["Claude", "Chatbot Development"],
      postedBy: "SupportTech",
      postedDate: "2 days ago",
      proposals: 6,
      description: "Develop an intelligent chatbot for handling customer inquiries and support tickets.",
      featured: false
    }
  ];

  const categories = [
    "Web Application",
    "Mobile App",
    "Dashboard",
    "AI Agent",
    "Automation",
    "Frontend",
    "Backend",
    "Full-Stack",
    "No-Code Solution"
  ];

  const skillOptions = [
    "Cursor", "Claude", "v0", "Lovable", "Bolt", "Windsurf", "n8n", "Make", 
    "Gumloop", "React", "Next.js", "Python", "Node.js", "AI Integration"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posted:", formData);
    // Here you would typically send the data to your backend
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
              <Link to="/jobs" className="text-purple-600 font-semibold">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Post Job Form */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Post a <span className="hero-gradient-text">Gig</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
                Get your project built by talented vibe coders who specialize in rapid development with cutting-edge AI tools.
              </p>
            </div>

            {/* Post Job Form */}
            <Card className="vibe-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-purple-600" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-lg font-semibold text-gray-700">
                      Project Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., AI-powered dashboard for analytics"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="mt-2 h-12 text-lg"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-lg font-semibold text-gray-700">
                      Project Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="mt-2 min-h-32"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget" className="text-lg font-semibold text-gray-700">
                        Budget Range
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-lg font-semibold text-gray-700">
                        Timeline
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-week">1 week</SelectItem>
                          <SelectItem value="2-weeks">2 weeks</SelectItem>
                          <SelectItem value="1-month">1 month</SelectItem>
                          <SelectItem value="2-months">2 months</SelectItem>
                          <SelectItem value="3-months+">3+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-lg font-semibold text-gray-700">
                      Project Category
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select project category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-700">
                      Required Skills/Tools
                    </Label>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                      {skillOptions.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={skill}
                            className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label htmlFor={skill} className="text-sm text-gray-700">
                            {skill}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience" className="text-lg font-semibold text-gray-700">
                      Experience Level Required
                    </Label>
                    <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger className="mt-2 h-12">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-4 years)</SelectItem>
                        <SelectItem value="expert">Expert (5+ years)</SelectItem>
                        <SelectItem value="any">Any level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full vibe-button text-lg py-4">
                    <Briefcase className="mr-2 w-5 h-5" />
                    Post Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Recent Jobs */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="vibe-card p-6 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Why Post on Vibe Board?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Lightning Fast</h4>
                      <p className="text-sm text-gray-600">Get your project completed 10x faster with AI-powered development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Elite Talent</h4>
                      <p className="text-sm text-gray-600">Access vetted developers who master cutting-edge tools</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Great Value</h4>
                      <p className="text-sm text-gray-600">Competitive pricing with guaranteed quality results</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="vibe-card p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Recent Jobs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentJobs.slice(0, 3).map((job) => (
                    <div key={job.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      {job.featured && (
                        <Badge className="bg-purple-500 text-white mb-2">Featured</Badge>
                      )}
                      <h4 className="font-semibold text-gray-900 mb-1">{job.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{job.description.substring(0, 80)}...</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-medium text-purple-600">{job.budget}</span>
                        <span>{job.proposals} proposals</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full vibe-button-outline mt-4">
                    View All Jobs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Recent Jobs Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="gradient-text">Job Posts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what other companies are building with our talented vibe coders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentJobs.map((job) => (
              <Card key={job.id} className="vibe-card hover:scale-105 transition-transform">
                {job.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-purple-500 text-white">Featured</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.budget}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.timeline}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {job.proposals} proposals
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Posted by {job.postedBy}</p>
                      <p className="text-xs text-gray-400">{job.postedDate}</p>
                    </div>
                    <Button className="vibe-button">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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

export default Jobs;
