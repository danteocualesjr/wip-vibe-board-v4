import React, { useState, useEffect } from 'react';
import { Pie, Cell, ResponsiveContainer, PieChart, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Lightbulb, Clock, CheckCircle, AlertCircle, Wrench } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ProjectData {
  status: string;
  count: number;
  percentage: number;
}

interface TechStackData {
  tech: string;
  count: number;
  percentage: number;
}

interface ProjectInsightsProps {
  userId: string;
}

export const ProjectInsights: React.FC<ProjectInsightsProps> = ({ userId }) => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [techStackData, setTechStackData] = useState<TechStackData[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    fetchProjectInsights();
  }, [userId]);

  const fetchProjectInsights = async () => {
    try {
      const { data: projects, error } = await supabase
        .from('projects')
        .select('status, tech_stack, featured')
        .eq('user_id', userId);

      if (error) throw error;

      const projectCount = projects?.length || 0;
      setTotalProjects(projectCount);

      if (projectCount === 0) {
        setProjectData([]);
        setTechStackData([]);
        return;
      }

      // Analyze project status distribution
      const statusCounts = projects?.reduce((acc, project) => {
        acc[project.status] = (acc[project.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>) || {};

      const statusData = Object.entries(statusCounts).map(([status, count]) => ({
        status,
        count,
        percentage: Math.round((count / projectCount) * 100)
      }));

      setProjectData(statusData);

      // Analyze tech stack usage
      const techCounts: Record<string, number> = {};
      projects?.forEach(project => {
        project.tech_stack?.forEach(tech => {
          techCounts[tech] = (techCounts[tech] || 0) + 1;
        });
      });

      const techData = Object.entries(techCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 8)
        .map(([tech, count]) => ({
          tech,
          count,
          percentage: Math.round((count / projectCount) * 100)
        }));

      setTechStackData(techData);
    } catch (error) {
      console.error('Error fetching project insights:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in_progress': return '#3b82f6';
      case 'planning': return '#f59e0b';
      case 'maintenance': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in_progress': return Clock;
      case 'planning': return Lightbulb;
      case 'maintenance': return Wrench;
      default: return AlertCircle;
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="surface-elevated p-3 rounded-lg border shadow-lg">
          <p className="font-medium text-foreground">{data.status}</p>
          <p className="text-sm text-muted-foreground">
            {data.count} projects ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <Card className="premium-card animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-60 bg-muted rounded"></div>
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (totalProjects === 0) {
    return (
      <Card className="premium-card">
        <CardContent className="text-center py-12">
          <Lightbulb className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Projects to Analyze</h3>
          <p className="text-muted-foreground">
            Add some projects to see detailed insights and analytics
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="premium-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 gradient-text">
          <Lightbulb className="w-5 h-5" />
          Project Insights
        </CardTitle>
        <CardDescription>
          Analyze your project portfolio and technology usage
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Status Distribution */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Project Status Distribution</h3>
            
            {projectData.length > 0 && (
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="count"
                    >
                      {projectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getStatusColor(entry.status)} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            <div className="space-y-3">
              {projectData.map((item) => {
                const Icon = getStatusIcon(item.status);
                return (
                  <div key={item.status} className="flex items-center justify-between p-3 surface-elevated rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" style={{ color: getStatusColor(item.status) }} />
                      <span className="text-sm font-medium capitalize">
                        {item.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.count}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Analysis */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Technology Usage</h3>
            
            <div className="space-y-3">
              {techStackData.map((tech, index) => (
                <div key={tech.tech} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{tech.tech}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {tech.count} projects
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {tech.percentage}%
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={tech.percentage} 
                    className="h-2"
                    style={{
                      background: `linear-gradient(90deg, hsl(var(--primary)), hsl(${260 + index * 20} 70% 60%))`
                    }}
                  />
                </div>
              ))}
            </div>

            {techStackData.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">
                  Add tech stacks to your projects to see usage analytics
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-xl font-bold gradient-text">{totalProjects}</div>
            <div className="text-xs text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-xl font-bold gradient-text">
              {projectData.find(p => p.status === 'completed')?.count || 0}
            </div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-xl font-bold gradient-text">
              {techStackData.length}
            </div>
            <div className="text-xs text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-xl font-bold gradient-text">
              {projectData.find(p => p.status === 'in_progress')?.count || 0}
            </div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};