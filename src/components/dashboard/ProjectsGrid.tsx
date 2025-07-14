import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Clock } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  live_url: string;
  image_url: string;
  status: 'planning' | 'in_progress' | 'completed' | 'maintenance';
  featured: boolean;
  created_at: string;
}

interface ProjectsGridProps {
  userId: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ userId }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, [userId]);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data as Project[] || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-700';
      case 'in_progress': return 'bg-blue-500/20 text-blue-700';
      case 'planning': return 'bg-yellow-500/20 text-yellow-700';
      case 'maintenance': return 'bg-purple-500/20 text-purple-700';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in_progress': return '🔄';
      case 'planning': return '📋';
      case 'maintenance': return '🔧';
      default: return '⭐';
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded"></div>
                <div className="h-3 bg-muted rounded w-4/5"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <Card className="text-center py-12">
        <CardContent>
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
            <p className="text-muted-foreground mb-4">
              Start showcasing your work by adding your first project!
            </p>
            <Button>Add Your First Project</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="group hover:shadow-lg transition-shadow">
          {project.featured && (
            <div className="absolute -top-2 -right-2 z-10">
              <div className="bg-yellow-500 text-white p-1 rounded-full">
                <Star className="w-4 h-4" />
              </div>
            </div>
          )}
          
          <CardHeader className="relative">
            {project.image_url && (
              <div className="w-full h-32 bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image_url} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}
            
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" className={getStatusColor(project.status)}>
                    {getStatusIcon(project.status)} {project.status.replace('_', ' ')}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <CardDescription className="line-clamp-3">
              {project.description}
            </CardDescription>
            
            {project.tech_stack && project.tech_stack.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {project.tech_stack.slice(0, 4).map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.tech_stack.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tech_stack.length - 4} more
                  </Badge>
                )}
              </div>
            )}
            
            <div className="flex space-x-2">
              {project.github_url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              )}
              {project.live_url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};