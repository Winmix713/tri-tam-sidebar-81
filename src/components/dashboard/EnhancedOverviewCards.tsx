
import React from 'react';
import { TrendingUp, TrendingDown, Users, Wallet, ChevronDown } from 'lucide-react';

interface EnhancedOverviewCardsProps {
  theme: 'light' | 'dark';
}

const EnhancedOverviewCards: React.FC<EnhancedOverviewCardsProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';
  const highlightBg = theme === 'dark' ? 'bg-[#363636]' : 'bg-gray-50';

  return (
    <div className="mb-8">
      {/* Header with time selector */}
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-semibold ${textColor}`}>Overview</h2>
        <div className={`flex items-center gap-2 px-4 py-2 border rounded-full cursor-pointer hover:${highlightBg} transition-colors ${cardBg} border-gray-300`}>
          <span className={`text-sm ${textColor}`}>Last 7 days</span>
          <ChevronDown className={`w-4 h-4 ${secondaryText}`} />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Customers Card */}
        <div className={`${cardBg} border rounded-[20px] p-6 transition-all hover:shadow-lg cursor-pointer group`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Users className={`w-6 h-6 ${textColor} group-hover:text-blue-500 transition-colors`} />
              <h3 className={`text-sm font-medium ${secondaryText} uppercase tracking-wide`}>CUSTOMERS</h3>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-medium">
              <TrendingDown className="w-3 h-3" />
              36.8%
            </div>
          </div>
          <div className={`text-3xl font-bold ${textColor} mb-2`}>1,293</div>
          <div className={`text-xs ${secondaryText}`}>vs last month</div>
        </div>

        {/* Balance Card */}
        <div className={`${cardBg} border rounded-[20px] p-6 transition-all hover:shadow-lg cursor-pointer group`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Wallet className={`w-6 h-6 ${secondaryText} group-hover:text-green-500 transition-colors`} />
              <h3 className={`text-sm font-medium ${secondaryText} uppercase tracking-wide`}>BALANCE</h3>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-medium">
              <TrendingUp className="w-3 h-3" />
              36.8%
            </div>
          </div>
          <div className={`text-3xl font-bold ${textColor} mb-2`}>256k</div>
          <div className={`text-xs ${secondaryText}`}>vs last month</div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedOverviewCards;
