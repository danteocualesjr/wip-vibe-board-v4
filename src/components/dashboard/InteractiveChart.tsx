import React, { useState, useEffect } from 'react';
import { LineChart, BarChart, AreaChart, Line, Bar, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, BarChart as BarChartIcon, LineChart as LineChartIcon, Activity } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ChartData {
  date: string;
  activity: number;
  projects: number;
  commits: number;
}

interface InteractiveChartProps {
  userId: string;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({ userId }) => {
  const [data, setData] = useState<ChartData[]>([]);
  const [chartType, setChartType] = useState<'line' | 'bar' | 'area'>('area');
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ trend: 0, total: 0 });

  useEffect(() => {
    fetchChartData();
  }, [userId, timeRange]);

  const fetchChartData = async () => {
    setLoading(true);
    try {
      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const { data: activityData, error } = await supabase
        .from('user_activity')
        .select('activity_date, activity_count, activity_type')
        .eq('user_id', userId)
        .gte('activity_date', startDate.toISOString().split('T')[0])
        .order('activity_date', { ascending: true });

      if (error) throw error;

      // Generate chart data for the selected time range
      const chartData: ChartData[] = [];
      const currentDate = new Date(startDate);
      const endDate = new Date();

      while (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const dayActivity = activityData?.filter(a => a.activity_date === dateStr) || [];
        
        chartData.push({
          date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          activity: dayActivity.reduce((sum, a) => sum + a.activity_count, 0),
          projects: dayActivity.filter(a => a.activity_type === 'project').length,
          commits: dayActivity.filter(a => a.activity_type === 'commit').length,
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      setData(chartData);

      // Calculate trend
      const firstHalf = chartData.slice(0, Math.floor(chartData.length / 2));
      const secondHalf = chartData.slice(Math.floor(chartData.length / 2));
      const firstAvg = firstHalf.reduce((sum, d) => sum + d.activity, 0) / firstHalf.length;
      const secondAvg = secondHalf.reduce((sum, d) => sum + d.activity, 0) / secondHalf.length;
      const trend = firstAvg > 0 ? ((secondAvg - firstAvg) / firstAvg) * 100 : 0;
      const total = chartData.reduce((sum, d) => sum + d.activity, 0);

      setStats({ trend, total });
    } catch (error) {
      console.error('Error fetching chart data:', error);
    } finally {
      setLoading(false);
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="surface-elevated p-3 rounded-lg border shadow-lg">
          <p className="text-sm font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (chartType) {
      case 'line':
        return (
          <LineChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="activity" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: 'hsl(var(--primary))' }} />
            <Line type="monotone" dataKey="projects" stroke="hsl(var(--accent-purple))" strokeWidth={2} />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="activity" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="projects" fill="hsl(var(--accent-purple))" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case 'area':
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="activity" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#activityGradient)" 
            />
          </AreaChart>
        );
      default:
        return null;
    }
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

  return (
    <Card className="premium-card animate-fade-in">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 gradient-text text-xl">
              <Activity className="w-5 h-5" />
              Activity Analytics
            </CardTitle>
            <CardDescription className="mt-2">
              Interactive visualization of your coding activity over time
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {stats.trend !== 0 && (
              <Badge variant={stats.trend > 0 ? "default" : "secondary"} className="glow-effect">
                {stats.trend > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {Math.abs(stats.trend).toFixed(1)}%
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex bg-muted rounded-lg p-1">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="h-8 px-3"
              >
                {range}
              </Button>
            ))}
          </div>

          <div className="flex bg-muted rounded-lg p-1">
            {([
              { type: 'area' as const, icon: Activity },
              { type: 'line' as const, icon: LineChartIcon },
              { type: 'bar' as const, icon: BarChartIcon }
            ]).map(({ type, icon: Icon }) => (
              <Button
                key={type}
                variant={chartType === type ? "default" : "ghost"}
                size="sm"
                onClick={() => setChartType(type)}
                className="h-8 w-8 p-0"
              >
                <Icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-2xl font-bold gradient-text">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total Activities</div>
          </div>
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-2xl font-bold gradient-text">{Math.round(stats.total / data.length) || 0}</div>
            <div className="text-sm text-muted-foreground">Daily Average</div>
          </div>
          <div className="text-center p-3 surface-elevated rounded-lg">
            <div className="text-2xl font-bold gradient-text">{data.filter(d => d.activity > 0).length}</div>
            <div className="text-sm text-muted-foreground">Active Days</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};