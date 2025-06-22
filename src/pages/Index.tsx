import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Star, Users, Clock, Sparkles, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ToolLogo from "@/components/ToolLogo";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "AI Customer Support Bot",
      price: "$2,999",
      creator: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI Agent", "Customer Service"],
      tools: ["Claude", "n8n"],
      rating: 4.9,
      reviews: 23,
      description: "Complete AI-powered customer support system with natural language processing and automated ticket routing."
    },
    {
      id: 2,
      title: "E-commerce Analytics Suite",
      price: "$2,499",
      creator: "Sarah Kim",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Analytics", "Dashboard"],
      tools: ["Lovable", "v0"],
      rating: 4.8,
      reviews: 31,
      description: "Advanced analytics dashboard with real-time sales tracking, customer insights, and revenue optimization."
    },
    {
      id: 3,
      title: "Project Management Platform",
      price: "$3,299",
      creator: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      tags: ["Project Management", "Team Collaboration"],
      tools: ["Cursor", "Make"],
      rating: 4.9,
      reviews: 42,
      description: "Comprehensive project management solution with team collaboration, time tracking, and resource allocation."
    }
  ];

  const stats = [
    { number: "500+", label: "Vibe Coders" },
    { number: "1,200+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "48hrs", label: "Average Delivery" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b586?w=150&h=150&fit=crop&crop=face",
      content: "Vibe Board connected me with an incredible developer who built my MVP in just 3 days. The quality exceeded my expectations!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The speed and quality of development here is unmatched. Our internal tools were delivered faster than we thought possible.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Owner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "I found the perfect analytics dashboard in the marketplace. It transformed how we track our business metrics.",
      rating: 5
    }
  ];

  const tools = [
    { name: "Cursor", category: "AI IDE" },
    { name: "Windsurf", category: "AI IDE" },
    { name: "Claude", category: "AI Assistant" },
    { name: "Lovable", category: "AI Builder" },
    { name: "v0", category: "AI Builder" },
    { name: "Bolt", category: "AI Builder" },
    { name: "n8n", category: "Automation" },
    { name: "Make", category: "Automation" },
    { name: "Gumloop", category: "Automation" },
    { name: "Replit", category: "Development" }
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Join 500+ developers building at lightning speed
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Build Apps at 
              <span className="hero-gradient-text block">Vibe Speed</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with talented developers who build production-ready apps in hours, not months. 
              Using cutting-edge AI tools for blazing-fast development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="vibe-button text-lg px-8 py-4">
                <Link to="/coders" className="flex items-center">
                  Find a Vibe Coder
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="vibe-button-outline text-lg px-8 py-4">
                <Link to="/marketplace">
                  Browse Marketplace
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="hero-gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-use applications built by our top vibe coders. Get started instantly with these production-ready solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="vibe-card hover:scale-105 transition-transform overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-purple-600 font-bold">
                      {product.price}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-gray-900">{product.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={product.avatar}
                        alt={product.creator}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-purple-600 text-sm">by {product.creator}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-700 text-sm">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-pink-600 border-pink-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-purple-700 bg-purple-100">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full vibe-button">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="vibe-button-outline">
              <Link to="/marketplace">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="hero-gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your app built in three simple steps. Our vibe coders use AI tools to deliver fast, high-quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="vibe-card text-center p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">1. Post Your Project</h3>
              <p className="text-gray-600 leading-relaxed">
                Describe your app idea, features, and timeline. Our vibe coders will review and send you proposals within hours.
              </p>
            </Card>

            <Card className="vibe-card text-center p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">2. Choose Your Coder</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse profiles, portfolios, and reviews. Select the vibe coder who best matches your project needs and budget.
              </p>
            </Card>

            <Card className="vibe-card text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">3. Get Your App</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your app come to life in real-time. Most projects are delivered within 24-48 hours with full source code.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by <span className="hero-gradient-text">AI Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our vibe coders leverage the latest AI development tools to build faster and better than traditional methods.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="vibe-card p-6 text-center hover:scale-105 transition-transform">
                <ToolLogo name={tool.name} category={tool.category} />
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="hero-gradient-text">Vibe Board</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of app development with our unique approach that combines AI tools with human expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="vibe-card p-8">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vibe coders use AI tools to build apps 10x faster than traditional development, without compromising quality.
              </p>
            </Card>

            <Card className="vibe-card p-8">
              <Shield className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                Every project goes through rigorous testing and review. We guarantee production-ready code that scales.
              </p>
            </Card>

            <Card className="vibe-card p-8">
              <CheckCircle className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Full Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                You get complete source code ownership, detailed documentation, and deployment assistance for your app.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="hero-gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their ideas into reality with Vibe Board.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="vibe-card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build at Vibe Speed?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs and businesses who have accelerated their growth with our vibe coders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/jobs" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
              <Link to="/waitlist">
                Join as Vibe Coder
              </Link>
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
    </div>
  );
};

export default Index;
