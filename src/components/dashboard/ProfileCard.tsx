import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Github, Linkedin, Globe, Edit, Briefcase } from 'lucide-react';

interface Profile {
  id: string;
  display_name: string;
  bio: string;
  avatar_url: string;
  github_url: string;
  linkedin_url: string;
  portfolio_url: string;
  skills: string[];
  experience_level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  location: string;
  available_for_hire: boolean;
}

interface ProfileCardProps {
  userId: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ userId }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      setProfile(data as Profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const getExperienceColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20 text-green-700';
      case 'intermediate': return 'bg-blue-500/20 text-blue-700';
      case 'advanced': return 'bg-purple-500/20 text-purple-700';
      case 'expert': return 'bg-red-500/20 text-red-700';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded"></div>
            <div className="h-3 bg-muted rounded w-4/5"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!profile) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground">Profile not found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src={profile.avatar_url} alt={profile.display_name} />
          <AvatarFallback className="text-lg">
            {profile.display_name?.charAt(0)?.toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
        
        <CardTitle className="text-xl">{profile.display_name}</CardTitle>
        
        {profile.experience_level && (
          <Badge className={getExperienceColor(profile.experience_level)}>
            {profile.experience_level}
          </Badge>
        )}
        
        {profile.available_for_hire && (
          <Badge variant="outline" className="bg-green-500/20 text-green-700 mt-2">
            <Briefcase className="w-3 h-3 mr-1" />
            Available for hire
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        {profile.bio && (
          <p className="text-sm text-muted-foreground">{profile.bio}</p>
        )}
        
        {profile.location && (
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {profile.location}
          </div>
        )}
        
        {profile.skills && profile.skills.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Skills</h4>
            <div className="flex flex-wrap gap-1">
              {profile.skills.slice(0, 8).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {profile.skills.length > 8 && (
                <Badge variant="secondary" className="text-xs">
                  +{profile.skills.length - 8} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="flex flex-col space-y-2">
          {profile.github_url && (
            <Button variant="outline" size="sm" asChild>
              <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
          
          {profile.linkedin_url && (
            <Button variant="outline" size="sm" asChild>
              <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          )}
          
          {profile.portfolio_url && (
            <Button variant="outline" size="sm" asChild>
              <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                Portfolio
              </a>
            </Button>
          )}
        </div>
        
        <Button variant="ghost" size="sm" className="w-full">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};