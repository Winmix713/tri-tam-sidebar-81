
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, ChevronDown } from 'lucide-react';

interface ProductViewChartProps {
  theme: 'light' | 'dark';
}

const ProductViewChart: React.FC<ProductViewChartProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
    : 'bg-white/80 border-gray-200/50 backdrop-blur-sm';
  
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const selectorBg = theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200';

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
      return theme === 'dark' ? '#3b82f6' : '#2563eb';
    }
    return theme === 'dark' ? 'rgba(156, 163, 175, 0.3)' : 'rgba(156, 163, 175, 0.4)';
  };

  return (
    <div className={`${cardBg} border rounded-3xl p-8 mb-10 hover:shadow-2xl transition-all duration-300`}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className={`text-2xl font-bold ${textPrimary} mb-1`}>Product Views</h3>
          <p className={`${textSecondary} text-sm`}>Revenue from product interactions</p>
        </div>
        <div className={`flex items-center gap-3 px-5 py-3 ${selectorBg} border rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300`}>
          <span className={`text-sm font-medium ${textPrimary}`}>Last 7 days</span>
          <ChevronDown className={`w-4 h-4 ${textSecondary}`} />
        </div>
      </div>

      <div className="flex items-end gap-12">
        <div className="flex-shrink-0 space-y-6">
          <div className="flex items-baseline gap-2">
            <span className={`text-lg ${textSecondary} font-medium`}>$</span>
            <span className={`text-5xl font-bold ${textPrimary}`}>10.2m</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              36.8%
            </div>
            <span className={`text-sm ${textSecondary}`}>vs last month</span>
          </div>
        </div>

        <div className="flex-1 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: theme === 'dark' ? '#9ca3af' : '#6b7280', fontWeight: 500 }}
              />
              <YAxis hide />
              <Bar dataKey="value" radius={[8, 8, 8, 8]}>
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
