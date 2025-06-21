
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, Star, CheckCircle, Clock, Bell, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Waitlist signup:", email);
    setIsSubmitted(true);
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
              <Link to="/jobs" className="text-gray-600 hover:text-purple-600 transition-colors">
                Post a Gig
              </Link>
              <Link to="/waitlist" className="text-purple-600 font-semibold">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-500/5 to-orange-500/5 rounded-3xl"></div>
          <div className="relative">
            <div className="flex justify-center mb-8">
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-lg">
                <Bell className="w-4 h-4 mr-2" />
                Early Access
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join the{" "}
              <span className="hero-gradient-text">
                Vibe Board
              </span>{" "}
              Waitlist
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Be among the first to access our revolutionary platform connecting elite vibe coders with amazing opportunities. Get early access to exclusive features and priority support.
            </p>

            {!isSubmitted ? (
              <Card className="vibe-card max-w-md mx-auto p-8">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 text-lg p-4 h-12"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full vibe-button text-lg py-4">
                      <Sparkles className="mr-2 w-5 h-5" />
                      Join Waitlist
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="vibe-card max-w-md mx-auto p-8">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">You're In!</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Thank you for joining our waitlist. We'll notify you as soon as early access is available.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    variant="outline" 
                    className="vibe-button-outline"
                  >
                    Sign Up Another Email
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Join the <span className="gradient-text">Waitlist</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get exclusive early access and be part of the future of AI-powered development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="vibe-card p-8 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Be the first to experience our platform before the public launch. Skip the line and get immediate access to all features.
                </p>
              </CardContent>
            </Card>

            <Card className="vibe-card p-8 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Exclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Join an elite community of early adopters, get direct access to our team, and help shape the future of the platform.
                </p>
              </CardContent>
            </Card>

            <Card className="vibe-card p-8 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">Priority Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Get priority customer support, early access to new features, and direct feedback channels with our development team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Join <span className="gradient-text">Thousands</span> of Others
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">2,500+</div>
              <div className="text-gray-600 text-lg">People on Waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-2">150+</div>
              <div className="text-gray-600 text-lg">Companies Interested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600 text-lg">Countries Represented</div>
            </div>
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

export default Waitlist;
