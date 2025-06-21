
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Clock, DollarSign, Building, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior AI Agent Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      salary: "$120k - $180k",
      posted: "2 days ago",
      description: "Build and deploy AI agents for customer service automation. Work with Claude, GPT-4, and custom training pipelines.",
      requirements: ["3+ years AI/ML experience", "Python expertise", "Experience with Claude/GPT APIs", "Docker/Kubernetes"],
      tools: ["Claude", "Python", "Docker", "n8n"],
      urgency: "Urgent",
      company_logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop",
      applicants: 23,
      featured: true
    },
    {
      id: 2,
      title: "Micro-SaaS Developer (Lovable/v0)",
      company: "StartupBuilder Inc",
      location: "Austin, TX",
      type: "Contract",
      remote: true,
      salary: "$80 - $120/hr",
      posted: "1 day ago",
      description: "Rapid prototyping specialist needed for multiple micro-SaaS projects. Must be proficient with Lovable and v0.",
      requirements: ["Lovable expertise", "React/Next.js", "Rapid prototyping", "UI/UX sensibilities"],
      tools: ["Lovable", "v0", "React", "Tailwind"],
      urgency: null,
      company_logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=80&h=80&fit=crop",
      applicants: 15,
      featured: false
    },
    {
      id: 3,
      title: "Internal Tools Specialist",
      company: "Enterprise Corp",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      salary: "$100k - $140k",
      posted: "3 days ago",
      description: "Lead the development of internal dashboards and automation tools for our 500+ person company.",
      requirements: ["5+ years experience", "Dashboard development", "Enterprise software", "Team leadership"],
      tools: ["Bolt", "Make", "React", "Python"],
      urgency: null,
      company_logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop",
      applicants: 31,
      featured: true
    },
    {
      id: 4,
      title: "Automation Engineer (No-Code)",
      company: "FlowTech",
      location: "Remote",
      type: "Contract",
      remote: true,
      salary: "$60 - $90/hr",
      posted: "5 days ago",
      description: "Build complex automation workflows using no-code tools. Help businesses streamline their operations.",
      requirements: ["No-code expertise", "Workflow design", "API integrations", "Client communication"],
      tools: ["Make", "Gumloop", "Zapier", "n8n"],
      urgency: null,
      company_logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=80&h=80&fit=crop",
      applicants: 18,
      featured: false
    },
    {
      id: 5,
      title: "Full-Stack Vibe Coder",
      company: "InnovateLab",
      location: "Seattle, WA",
      type: "Full-time",
      remote: true,
      salary: "$110k - $160k",
      posted: "1 week ago",
      description: "Join our team building next-gen productivity tools. Experience with modern AI coding tools required.",
      requirements: ["Full-stack development", "Modern AI tools", "React/Node.js", "Startup experience"],
      tools: ["Cursor", "Windsurf", "React", "Node.js"],
      urgency: "Urgent",
      company_logo: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=80&h=80&fit=crop",
      applicants: 42,
      featured: false
    },
    {
      id: 6,
      title: "AI-First Developer",
      company: "FutureAI Systems",
      location: "Boston, MA",
      type: "Full-time",
      remote: true,
      salary: "$130k - $200k",
      posted: "4 days ago",
      description: "Lead AI integration projects using cutting-edge tools. Build the future of human-AI collaboration.",
      requirements: ["AI tool expertise", "Python/JavaScript", "ML background", "Innovation mindset"],
      tools: ["Claude", "Cursor", "Python", "TensorFlow"],
      urgency: null,
      company_logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&h=80&fit=crop",
      applicants: 67,
      featured: true
    }
  ];

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Contract":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Part-time":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
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
              <Link to="/coders" className="text-gray-300 hover:text-purple-400 transition-colors">
                Vibe Coders
              </Link>
              <Link to="/jobs" className="text-purple-400 font-medium">
                Jobs
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-300 hover:text-purple-400">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Post Job
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Jobs & Gigs</h1>
          <p className="text-gray-400 text-lg">Find opportunities with companies looking for vibe coders</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-slate-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
            </div>
            
            <div className="flex gap-3">
              <Select defaultValue="all-types">
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all-locations">
                <SelectTrigger className="w-48 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
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
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-400">{jobs.length} jobs found</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-40 bg-slate-800/50 border-purple-500/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/30">
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  <SelectItem value="most-applicants">Most Applicants</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card 
              key={job.id} 
              className={`bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${
                job.featured ? "ring-1 ring-purple-400/20" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job.company_logo}
                      alt={job.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {job.featured && (
                          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                            Featured
                          </Badge>
                        )}
                        {job.urgency && (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                            {job.urgency}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl mb-1">{job.title}</CardTitle>
                      <p className="text-purple-400 font-medium">{job.company}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                          {job.remote && <span className="text-green-400">(Remote)</span>}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.posted}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-purple-400 font-medium">{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{job.applicants} applicants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={getJobTypeColor(job.type)}>
                      {job.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-gray-300 bg-slate-700/50">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
                    Save Job
                  </Button>
                  <Button variant="outline" className="text-gray-400 border-gray-400/30 hover:bg-gray-400/10">
                    View Company
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10 px-8">
            Load More Jobs
          </Button>
        </div>

        {/* Post Job CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Looking to hire vibe coders?</h2>
          <p className="text-gray-300 mb-6">
            Post your job and connect with talented developers who build with cutting-edge AI tools
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8">
            Post a Job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
