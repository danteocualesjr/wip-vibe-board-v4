
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Code, Briefcase, ArrowRight, Zap, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import ToolLogo from "@/components/ToolLogo";

const Index = () => {
  const tools = [
    { name: "Cursor", category: "AI Code Editor" },
    { name: "Windsurf", category: "AI Development" },
    { name: "Claude Code", category: "AI Assistant" },
    { name: "Codex", category: "AI Code Generation" },
    { name: "Devin", category: "AI Software Engineer" },
    { name: "Bolt", category: "Full-Stack Development" },
    { name: "Lovable", category: "AI Web Builder" },
    { name: "Replit", category: "Cloud IDE" },
    { name: "v0", category: "UI Generation" },
    { name: "Manus AI", category: "Code Assistant" },
    { name: "Gamma", category: "Presentation Builder" },
    { name: "Zapier", category: "Automation" },
    { name: "Lindy", category: "AI Assistant" },
    { name: "Sora", category: "Video Generation" },
    { name: "Veo 3", category: "Video AI" },
    { name: "Factory", category: "AI Development" },
    { name: "Rork", category: "Development Tools" },
    { name: "Firebase Studio", category: "Backend Platform" }
  ];

  const stats = [
    { icon: Users, label: "Active Vibe Coders", value: "2,500+" },
    { icon: Code, label: "Projects Completed", value: "10,000+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
    { icon: Briefcase, label: "Companies Served", value: "500+" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Development",
      description: "Our vibe coders specialize in rapid prototyping and can deliver MVPs in days, not months."
    },
    {
      icon: Target,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI tools and frameworks to build smarter, more efficient applications."
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      description: "Access top developers from around the world, vetted for their expertise in modern development tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vibe Board
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/marketplace" className="text-gray-600 hover:text-blue-600 transition-colors">
                Marketplace
              </Link>
              <Link to="/coders" className="text-gray-600 hover:text-blue-600 transition-colors">
                Vibe Coders
              </Link>
              <Link to="/jobs" className="text-gray-600 hover:text-blue-600 transition-colors">
                Jobs
              </Link>
              <Link to="/waitlist">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Now in Beta - Join the Future of Development
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Where Vibe Coders
              <br />
              <span className="relative">
                Meet Companies
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with top vibe builders who specialize in rapid prototyping, AI-driven development, and cutting-edge tools
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/marketplace">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/coders">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  Find Vibe Coders
                </Button>
              </Link>
            </div>
          </div>

          {/* Tool Logos Grid */}
          <div className="mb-20">
            <h3 className="text-lg font-semibold text-gray-700 mb-8">Powered by the tools our vibe coders love</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <ToolLogo name={tool.name} category={tool.category} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vibe Board?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing how companies connect with top-tier developers who excel at modern development practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of companies and developers who are already building amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 block">
                Vibe Board
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                The premier marketplace connecting companies with elite vibe coders who specialize in rapid, AI-driven development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link to="/coders" className="hover:text-white transition-colors">Vibe Coders</Link></li>
                <li><Link to="/jobs" className="hover:text-white transition-colors">Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/waitlist" className="hover:text-white transition-colors">Join Waitlist</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vibe Board. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
