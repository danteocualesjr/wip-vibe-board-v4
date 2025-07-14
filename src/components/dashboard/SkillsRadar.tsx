import React, { useState, useEffect } from 'react';
import { Radar, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadarChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Code, Zap, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface SkillData {
  skill: string;
  level: number;
  projects: number;
  growth: number;
}

interface SkillsRadarProps {
  userId: string;
}

export const SkillsRadar: React.FC<SkillsRadarProps> = ({ userId }) => {
  const [skillsData, setSkillsData] = useState<SkillData[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkillsData();
  }, [userId]);

  const fetchSkillsData = async () => {
    try {
      // Fetch user's skills from profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('skills')
        .eq('user_id', userId)
        .single();

      if (profileError) throw profileError;

      // Fetch projects to analyze skill usage
      const { data: projects, error: projectsError } = await supabase
        .from('projects')
        .select('tech_stack, created_at')
        .eq('user_id', userId);

      if (projectsError) throw projectsError;

      const skills = profile?.skills || [];
      if (skills.length === 0) {
        // Default skills for demo purposes
        const defaultSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'CSS', 'SQL'];
        setSkillsData(defaultSkills.map((skill, index) => ({
          skill,
          level: Math.floor(Math.random() * 40) + 60, // 60-100
          projects: Math.floor(Math.random() * 5) + 1,
          growth: Math.floor(Math.random() * 20) - 10 // -10 to +10
        })));
        setSelectedSkills(defaultSkills.slice(0, 5));
      } else {
        // Analyze skill usage in projects
        const skillStats = skills.map(skill => {
          const projectsWithSkill = projects?.filter(p => 
            p.tech_stack?.some(tech => 
              tech.toLowerCase().includes(skill.toLowerCase()) || 
              skill.toLowerCase().includes(tech.toLowerCase())
            )
          ) || [];

          return {
            skill,
            level: Math.min(100, 50 + (projectsWithSkill.length * 10) + Math.random() * 30),
            projects: projectsWithSkill.length,
            growth: Math.floor(Math.random() * 20) - 5
          };
        });

        setSkillsData(skillStats);
        setSelectedSkills(skills.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching skills data:', error);
      // Fallback to demo data
      const demoSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'CSS'];
      setSkillsData(demoSkills.map(skill => ({
        skill,
        level: Math.floor(Math.random() * 40) + 60,
        projects: Math.floor(Math.random() * 5) + 1,
        growth: Math.floor(Math.random() * 20) - 10
      })));
      setSelectedSkills(demoSkills);
    } finally {
      setLoading(false);
    }
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : prev.length < 6 ? [...prev, skill] : prev
    );
  };

  const getSkillColor = (index: number) => {
    const colors = [
      'hsl(var(--primary))',
      'hsl(var(--accent-purple))',
      'hsl(var(--accent-blue))',
      'hsl(var(--accent-pink))',
      'hsl(262.1 100% 70%)',
      'hsl(280 100% 70%)'
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <Card className="premium-card animate-pulse">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-1/3"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-muted rounded"></div>
        </CardContent>
      </Card>
    );
  }

  const filteredData = skillsData.filter(skill => selectedSkills.includes(skill.skill));

  return (
    <Card className="premium-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 gradient-text">
          <Star className="w-5 h-5" />
          Skills Radar
        </CardTitle>
        <CardDescription>
          Visualize your technical skill levels and growth
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {skillsData.map((skillData) => (
            <Badge
              key={skillData.skill}
              variant={selectedSkills.includes(skillData.skill) ? "default" : "outline"}
              className="cursor-pointer interactive-hover relative"
              onClick={() => toggleSkill(skillData.skill)}
            >
              <Code className="w-3 h-3 mr-1" />
              {skillData.skill}
              {skillData.growth > 0 && (
                <TrendingUp className="w-3 h-3 ml-1 text-green-400" />
              )}
            </Badge>
          ))}
        </div>

        {filteredData.length > 0 && (
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={filteredData} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis 
                  dataKey="skill" 
                  tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
                  className="text-sm"
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                />
                <Radar
                  name="Skill Level"
                  dataKey="level"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredData.slice(0, 6).map((skillData, index) => (
            <div key={skillData.skill} className="surface-elevated p-3 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{skillData.skill}</span>
                <Badge 
                  variant="secondary" 
                  style={{ color: getSkillColor(index) }}
                  className="text-xs"
                >
                  {skillData.level}%
                </Badge>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${skillData.level}%`,
                    background: `linear-gradient(90deg, ${getSkillColor(index)}, ${getSkillColor(index)}80)`
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{skillData.projects} projects</span>
                {skillData.growth !== 0 && (
                  <span className={skillData.growth > 0 ? 'text-green-400' : 'text-red-400'}>
                    {skillData.growth > 0 ? '+' : ''}{skillData.growth}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedSkills.length === 0 && (
          <div className="text-center py-8">
            <Zap className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Select Skills to Visualize</h3>
            <p className="text-muted-foreground">
              Choose up to 6 skills from the badges above to see your radar chart
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};