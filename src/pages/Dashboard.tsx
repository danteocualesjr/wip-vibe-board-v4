import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Code2, Plus, Settings, TrendingUp, Users, Briefcase } from 'lucide-react';
import { ActivityHeatmap } from '@/components/dashboard/ActivityHeatmap';
import { ProjectsGrid } from '@/components/dashboard/ProjectsGrid';
import { ProfileCard } from '@/components/dashboard/ProfileCard';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session) {
          navigate('/auth');
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session) {
        navigate('/auth');
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <nav className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                VibeCode
              </span>
              <span className="text-muted-foreground">Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-1">
            <ProfileCard userId={user.id} />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Cards */}
            <StatsCards userId={user.id} />

            {/* Activity Heatmap */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Activity Heatmap
                </CardTitle>
                <CardDescription>
                  Your coding activity over the past year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityHeatmap userId={user.id} />
              </CardContent>
            </Card>

            {/* Tabs for Projects and Activity */}
            <Tabs defaultValue="projects" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="projects" className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Projects
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Recent Activity
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Your Projects</h3>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </div>
                <ProjectsGrid userId={user.id} />
              </TabsContent>
              
              <TabsContent value="activity" className="space-y-4">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <RecentActivity userId={user.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;