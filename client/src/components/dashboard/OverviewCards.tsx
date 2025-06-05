
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface OverviewCardsProps {
  theme: 'light' | 'dark';
}

const OverviewCards: React.FC<OverviewCardsProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* Customers Card */}
      <div className={`${cardBg} border rounded-[20px] p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-sm font-medium ${secondaryText}`}>CUSTOMERS</h3>
          <div className="flex items-center gap-1 text-green-500">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">+12.5%</span>
          </div>
        </div>
        <div className={`text-3xl font-bold ${textColor} mb-2`}>1,293</div>
        <div className={`text-xs ${secondaryText}`}>vs last 7 days</div>
      </div>

      {/* Balance Card */}
      <div className={`${cardBg} border rounded-[20px] p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-sm font-medium ${secondaryText}`}>BALANCE</h3>
          <div className="flex items-center gap-1 text-red-500">
            <TrendingDown className="w-4 h-4" />
            <span className="text-xs">-2.4%</span>
          </div>
        </div>
        <div className={`text-3xl font-bold ${textColor} mb-2`}>256k</div>
        <div className={`text-xs ${secondaryText}`}>vs last 7 days</div>
      </div>
    </div>
  );
};

export default OverviewCards;
