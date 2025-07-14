import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Code, Star, Calendar } from 'lucide-react';

interface StatsData {
  totalProjects: number;
  totalActivity: number;
  featuredProjects: number;
  joinDate: string;
}

interface StatsCardsProps {
  userId: string;
}

export const StatsCards: React.FC<StatsCardsProps> = ({ userId }) => {
  const [stats, setStats] = useState<StatsData>({
    totalProjects: 0,
    totalActivity: 0,
    featuredProjects: 0,
    joinDate: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, [userId]);

  const fetchStats = async () => {
    try {
      // Fetch projects stats
      const { data: projects, error: projectsError } = await supabase
        .from('projects')
        .select('featured')
        .eq('user_id', userId);

      if (projectsError) throw projectsError;

      // Fetch activity stats
      const { data: activity, error: activityError } = await supabase
        .from('user_activity')
        .select('activity_count')
        .eq('user_id', userId);

      if (activityError) throw activityError;

      // Fetch profile join date
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('user_id', userId)
        .single();

      if (profileError) throw profileError;

      const totalActivity = activity?.reduce((sum, item) => sum + item.activity_count, 0) || 0;
      const featuredProjects = projects?.filter(p => p.featured).length || 0;

      setStats({
        totalProjects: projects?.length || 0,
        totalActivity,
        featuredProjects,
        joinDate: profile?.created_at || '',
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatJoinDate = (dateString: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 w-4 bg-muted rounded"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded w-1/3 mb-1"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          <Code className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalProjects}</div>
          <p className="text-xs text-muted-foreground">
            {stats.featuredProjects} featured
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Activity</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalActivity}</div>
          <p className="text-xs text-muted-foreground">
            Activities logged
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Featured Projects</CardTitle>
          <Star className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.featuredProjects}</div>
          <p className="text-xs text-muted-foreground">
            Showcased work
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Member Since</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{formatJoinDate(stats.joinDate)}</div>
          <p className="text-xs text-muted-foreground">
            VibeCode member
          </p>
        </CardContent>
      </Card>
    </div>
  );
};