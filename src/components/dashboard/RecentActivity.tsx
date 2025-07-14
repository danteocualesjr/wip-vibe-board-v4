import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Code, User, FolderPlus, LogIn, Users } from 'lucide-react';

interface ActivityItem {
  id: string;
  activity_type: 'code_commit' | 'project_update' | 'profile_update' | 'login' | 'collaboration';
  activity_date: string;
  activity_count: number;
  metadata: any;
  created_at: string;
}

interface RecentActivityProps {
  userId: string;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ userId }) => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentActivity();
  }, [userId]);

  const fetchRecentActivity = async () => {
    try {
      const { data, error } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setActivities(data as ActivityItem[] || []);
    } catch (error) {
      console.error('Error fetching recent activity:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'code_commit': return <Code className="w-4 h-4" />;
      case 'project_update': return <FolderPlus className="w-4 h-4" />;
      case 'profile_update': return <User className="w-4 h-4" />;
      case 'login': return <LogIn className="w-4 h-4" />;
      case 'collaboration': return <Users className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'code_commit': return 'bg-green-500/20 text-green-700';
      case 'project_update': return 'bg-blue-500/20 text-blue-700';
      case 'profile_update': return 'bg-purple-500/20 text-purple-700';
      case 'login': return 'bg-gray-500/20 text-gray-700';
      case 'collaboration': return 'bg-orange-500/20 text-orange-700';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getActivityDescription = (type: string, count: number) => {
    switch (type) {
      case 'code_commit': return `Made ${count} code commit${count > 1 ? 's' : ''}`;
      case 'project_update': return `Updated ${count} project${count > 1 ? 's' : ''}`;
      case 'profile_update': return 'Updated profile';
      case 'login': return 'Logged in';
      case 'collaboration': return `Collaborated on ${count} project${count > 1 ? 's' : ''}`;
      default: return 'Activity recorded';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-muted rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
                <div className="h-6 w-16 bg-muted rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No recent activity</h3>
          <p className="text-muted-foreground">
            Start coding and your activity will appear here!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${getActivityColor(activity.activity_type)}`}>
                {getActivityIcon(activity.activity_type)}
              </div>
              
              <div className="flex-1">
                <p className="font-medium">
                  {getActivityDescription(activity.activity_type, activity.activity_count)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(activity.created_at)}
                </p>
              </div>
              
              <Badge variant="secondary" className="text-xs">
                {activity.activity_type.replace('_', ' ')}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};