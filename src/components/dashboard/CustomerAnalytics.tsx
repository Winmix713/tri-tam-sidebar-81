
import React from 'react';
import { Users, Clock } from 'lucide-react';

interface CustomerAnalyticsProps {
  theme: 'light' | 'dark';
}

const CustomerAnalytics: React.FC<CustomerAnalyticsProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  return (
    <div className={`${cardBg} border rounded-[20px] p-6 mb-8`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${textColor}`}>Customer Analytics</h3>
        <div className="flex items-center gap-2">
          <Clock className={`w-4 h-4 ${secondaryText}`} />
          <span className={`text-sm ${secondaryText}`}>Last 7 days</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className={`text-2xl font-bold ${textColor} mb-1`}>857</div>
          <div className={`text-sm ${secondaryText} mb-2`}>New Customers</div>
          <div className="text-green-500 text-xs">+24% from last week</div>
        </div>
        
        <div>
          <div className={`text-2xl font-bold ${textColor} mb-1`}>4.2k</div>
          <div className={`text-sm ${secondaryText} mb-2`}>Total Orders</div>
          <div className="text-green-500 text-xs">+18% from last week</div>
        </div>
        
        <div>
          <div className={`text-2xl font-bold ${textColor} mb-1`}>$12.8k</div>
          <div className={`text-sm ${secondaryText} mb-2`}>Revenue</div>
          <div className="text-red-500 text-xs">-5% from last week</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAnalytics;
