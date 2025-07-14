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
    if (count === 0) return 'bg-gray-100 border border-gray-200';
    if (count <= 2) return 'bg-green-100 border border-green-200';
    if (count <= 4) return 'bg-green-300 border border-green-400';
    if (count <= 6) return 'bg-green-500 border border-green-600';
    return 'bg-green-700 border border-green-800';
  };

  const getMonths = () => {
    const months = [];
    const today = new Date();
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push(date.toLocaleDateString('en-US', { month: 'short' }));
    }
    return months;
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
    <div className="w-full">
      {/* GitHub-style header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{heatmapData.filter(d => d.count > 0).length}</span> contributions in the last year
        </div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-gray-100 border border-gray-200 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-100 border border-green-200 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-300 border border-green-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-500 border border-green-600 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-700 border border-green-800 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Month labels */}
      <div className="relative">
        <div className="flex justify-start mb-2 ml-8">
          {getMonths().map((month, index) => (
            <div key={index} className="text-xs text-muted-foreground w-11 text-left">
              {index % 2 === 0 ? month : ''}
            </div>
          ))}
        </div>

        {/* Days and grid */}
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col justify-between text-xs text-muted-foreground pr-2 h-24">
            <div>Mon</div>
            <div>Wed</div>
            <div>Fri</div>
          </div>

          {/* Contribution grid */}
          <div className="grid grid-cols-53 gap-1 flex-1">
            {Array.from({ length: weeks }).map((_, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const dataPoint = heatmapData.find(d => d.week === weekIndex && d.day === dayIndex);
                  return (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${
                        dataPoint ? getIntensityClass(dataPoint.count) : 'bg-gray-100 border border-gray-200'
                      } hover:ring-2 hover:ring-green-400 transition-all duration-200 cursor-pointer`}
                      title={dataPoint ? `${dataPoint.count} contributions on ${dataPoint.date}` : 'No contributions'}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};