import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ActivityData {
  date: string;
  count: number;
}

interface ActivityHeatmapProps {
  userId: string;
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({ userId }) => {
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivityData();
  }, [userId]);

  const fetchActivityData = async () => {
    try {
      const { data, error } = await supabase
        .from('user_activity')
        .select('activity_date, activity_count')
        .eq('user_id', userId)
        .gte('activity_date', new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);

      if (error) throw error;

      // Aggregate activity by date
      const aggregated = data?.reduce((acc: { [key: string]: number }, item) => {
        const date = item.activity_date;
        acc[date] = (acc[date] || 0) + item.activity_count;
        return acc;
      }, {}) || {};

      const activityArray = Object.entries(aggregated).map(([date, count]) => ({
        date,
        count: count as number,
      }));

      setActivityData(activityArray);
    } catch (error) {
      console.error('Error fetching activity data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateHeatmapData = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364); // Last 365 days

    const heatmapData = [];
    const currentDate = new Date(startDate);

    while (currentDate <= today) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const activity = activityData.find(a => a.date === dateStr);
      
      heatmapData.push({
        date: dateStr,
        count: activity?.count || 0,
        day: currentDate.getDay(),
        week: Math.floor((currentDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000))
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return heatmapData;
  };

  const getIntensityClass = (count: number) => {
    if (count === 0) return 'bg-muted';
    if (count <= 2) return 'bg-primary/20';
    if (count <= 4) return 'bg-primary/40';
    if (count <= 6) return 'bg-primary/60';
    return 'bg-primary';
  };

  const heatmapData = generateHeatmapData();
  const weeks = Math.max(...heatmapData.map(d => d.week)) + 1;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-sm bg-muted transition-all hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/20 transition-all hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/40 transition-all hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-primary/60 transition-all hover:scale-110"></div>
            <div className="w-3 h-3 rounded-sm bg-primary glow-effect transition-all hover:scale-110"></div>
          </div>
          <span>More</span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <span className="gradient-text font-medium">{heatmapData.filter(d => d.count > 0).length}</span> active days
        </div>
      </div>
      
      <div className="grid grid-cols-53 gap-1 min-w-[700px] animate-fade-in">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-1">
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const dataPoint = heatmapData.find(d => d.week === weekIndex && d.day === dayIndex);
              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${
                    dataPoint ? getIntensityClass(dataPoint.count) : 'bg-muted'
                  } hover:ring-2 hover:ring-primary/50 hover:scale-125 transition-all duration-200 cursor-pointer group ${
                    dataPoint?.count > 6 ? 'animate-glow-pulse' : ''
                  }`}
                  title={dataPoint ? `${dataPoint.date}: ${dataPoint.count} activities` : ''}
                  style={{
                    animationDelay: `${(weekIndex * 7 + dayIndex) * 10}ms`
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};