
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface ProductViewChartProps {
  theme: 'light' | 'dark';
}

const ProductViewChart: React.FC<ProductViewChartProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  const data = [
    { name: '14', value: 520, highlighted: false },
    { name: '15', value: 680, highlighted: false },
    { name: '16', value: 320, highlighted: true },
    { name: '17', value: 890, highlighted: false },
    { name: '18', value: 750, highlighted: false },
    { name: '19', value: 280, highlighted: true },
    { name: '20', value: 820, highlighted: false },
  ];

  const getBarColor = (highlighted: boolean) => {
    if (highlighted) {
      return theme === 'dark' ? '#3b82f6' : '#3b82f6';
    }
    return theme === 'dark' ? 'rgba(168, 168, 168, 0.3)' : 'rgba(156, 163, 175, 0.4)';
  };

  return (
    <div className={`${cardBg} border rounded-[20px] p-6 mb-8`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${textColor}`}>Product view</h3>
        <div className={`flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer ${cardBg} border-gray-300`}>
          <span className={`text-sm ${textColor}`}>Last 7 days</span>
        </div>
      </div>

      <div className="flex items-end gap-8">
        <div className="flex-shrink-0">
          <div className="flex items-baseline gap-2 mb-4">
            <span className={`text-sm ${secondaryText}`}>$</span>
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

        <div className="flex-1 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: theme === 'dark' ? '#a8a8a8' : '#666666' }}
              />
              <YAxis hide />
              <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.highlighted)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProductViewChart;
