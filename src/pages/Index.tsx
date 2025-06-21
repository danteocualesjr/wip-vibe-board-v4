import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, Star, Trophy, Briefcase, Search, Sparkles, Code, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ToolLogo from "@/components/ToolLogo";

const Index = () => {
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
              <span className="text-gray-600">Waitlist</span>
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-500/5 to-orange-500/5 rounded-3xl"></div>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Vibe Coders Meet{" "}
              <span className="hero-gradient-text">
                Amazing Opportunities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with elite developers who specialize in rapid prototyping, AI-driven development, and cutting-edge tools. Build your next app, hire top talent, or showcase your skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="vibe-button text-lg px-8 py-4">
                <Users className="mr-2 w-5 h-5" />
                Find Vibe Coders
                <Sparkles className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="vibe-button-outline text-lg px-8 py-4">
                <Briefcase className="mr-2 w-5 h-5" />
                Post a Project
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600 text-lg">Vibe Coders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">1,200+</div>
                <div className="text-gray-600 text-lg">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">$2M+</div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Cursor", category: "AI Editor" },
              { name: "Claude", category: "AI Assistant" },
              { name: "v0", category: "UI Generator" },
              { name: "Bolt", category: "Full-Stack" },
              { name: "Lovable", category: "Web Apps" },
              { name: "Windsurf", category: "AI IDE" },
              { name: "Replit", category: "Cloud IDE" },
              { name: "n8n", category: "Automation" },
              { name: "Make", category: "Workflows" },
              { name: "Gumloop", category: "No-Code" },
              { name: "Supabase", category: "Backend" },
              { name: "Vercel", category: "Deployment" }
            ].map((tool, index) => (
              <Card key={tool.name} className="vibe-card p-6 text-center hover:scale-105 transition-transform">
                <CardContent className="p-0">
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
                title: "Full-Stack AI Developer",
                avatar: "AC",
                rating: 4.9,
                reviews: 127,
                location: "San Francisco, CA",
                hourlyRate: "$85",
                skills: ["Cursor", "Claude", "Next.js", "Supabase"],
                completedProjects: 89,
                responseTime: "< 1 hour",
                description: "Specialized in AI-powered web apps with rapid prototyping using Cursor and Claude."
              },
              {
                name: "Sarah Rodriguez",
                title: "UI/UX & Frontend Specialist",
                avatar: "SR",
                rating: 5.0,
                reviews: 203,
                location: "Austin, TX",
                hourlyRate: "$75",
                skills: ["v0", "Lovable", "React", "Tailwind"],
                completedProjects: 156,
                responseTime: "< 30 min",
                description: "Expert in creating beautiful, responsive interfaces using v0 and modern design tools."
              },
              {
                name: "Marcus Thompson",
                title: "Automation & Integration Expert",
                avatar: "MT",
                rating: 4.8,
                reviews: 94,
                location: "Remote",
                hourlyRate: "$90",
                skills: ["n8n", "Make", "Zapier", "Supabase"],
                completedProjects: 67,
                responseTime: "< 2 hours",
                description: "Building seamless workflows and automations that save businesses time and money."
              }
            ].map((coder, index) => (
              <Card key={coder.name} className="vibe-card p-6 hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {coder.avatar}
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
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{coder.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {coder.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-gray-600">{coder.completedProjects} projects completed</span>
                    <span className="font-bold text-lg text-purple-600">{coder.hourlyRate}/hr</span>
                  </div>
                  
                  <Button className="w-full vibe-button">
                    View Profile
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
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
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Search className="mr-2 w-5 h-5" />
              Find Developers
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
              <Users className="mr-2 w-5 h-5" />
              Join as Coder
            </Button>
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

export default Index;
