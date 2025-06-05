
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, ChevronDown } from 'lucide-react';

interface ProductViewChartProps {
  theme: 'light' | 'dark';
}

const ProductViewChart: React.FC<ProductViewChartProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';
  const highlightBg = theme === 'dark' ? 'bg-[#363636]' : 'bg-gray-50';

  const data = [
    { day: '14', value: 4200, highlighted: false },
    { day: '15', value: 5800, highlighted: false },
    { day: '16', value: 2900, highlighted: true },
    { day: '17', value: 8200, highlighted: false },
    { day: '18', value: 6500, highlighted: false },
    { day: '19', value: 2400, highlighted: true },
    { day: '20', value: 7100, highlighted: false },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-3 rounded-lg shadow-lg ${cardBg} border`}>
          <p className={`text-sm ${textColor}`}>{`Day ${label}: $${(payload[0].value / 1000).toFixed(1)}k`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`${cardBg} border rounded-[20px] p-6 mb-8`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-xl font-semibold ${textColor}`}>Product view</h3>
        <div className={`flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer hover:${highlightBg} transition-colors border-gray-300`}>
          <span className={`text-sm ${textColor}`}>Last 7 days</span>
          <ChevronDown className={`w-4 h-4 ${secondaryText}`} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-end gap-8 mb-6">
        <div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className={`text-2xl ${secondaryText}`}>$</span>
            <span className={`text-4xl font-bold ${textColor}`}>10.2m</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-medium">
              <TrendingUp className="w-3 h-3" />
              36.8%
            </div>
            <span className={`text-xs ${secondaryText}`}>vs last month</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: theme === 'dark' ? '#a8a8a8' : '#666666', fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              radius={[6, 6, 0, 0]}
              fill={(entry: any) => entry.highlighted ? '#3b82f6' : theme === 'dark' ? 'rgba(168, 168, 168, 0.3)' : 'rgba(156, 163, 175, 0.4)'}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductViewChart;
