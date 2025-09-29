
import React from 'react';
import { TrendingUp, TrendingDown, Users, Wallet, ChevronDown } from 'lucide-react';

interface EnhancedOverviewCardsProps {
  theme: 'light' | 'dark';
}

const EnhancedOverviewCards: React.FC<EnhancedOverviewCardsProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
    : 'bg-white/80 border-gray-200/50 backdrop-blur-sm';
  
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const selectorBg = theme === 'dark' ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50/80 border-gray-200';

  return (
    <div className="mb-10">
      {/* Header with enhanced styling */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className={`text-2xl font-bold ${textPrimary} mb-1`}>Overview</h2>
          <p className={`${textSecondary} text-sm`}>Your business metrics at a glance</p>
        </div>
        <div className={`flex items-center gap-3 px-5 py-3 ${selectorBg} border rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300`}>
          <span className={`text-sm font-medium ${textPrimary}`}>Last 7 days</span>
          <ChevronDown className={`w-4 h-4 ${textSecondary}`} />
        </div>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Customers Card */}
        <div className={`${cardBg} border rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <Users className={`w-7 h-7 text-blue-600 dark:text-blue-400`} />
              </div>
              <div>
                <h3 className={`text-sm font-semibold ${textSecondary} uppercase tracking-wider`}>CUSTOMERS</h3>
                <p className={`text-xs ${textSecondary} mt-1`}>Total active users</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium">
              <TrendingDown className="w-4 h-4" />
              36.8%
            </div>
          </div>
          <div className="space-y-2">
            <div className={`text-4xl font-bold ${textPrimary}`}>1,293</div>
            <div className={`text-sm ${textSecondary}`}>vs last month</div>
          </div>
        </div>

        {/* Balance Card */}
        <div className={`${cardBg} border rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Wallet className={`w-7 h-7 text-green-600 dark:text-green-400`} />
              </div>
              <div>
                <h3 className={`text-sm font-semibold ${textSecondary} uppercase tracking-wider`}>BALANCE</h3>
                <p className={`text-xs ${textSecondary} mt-1`}>Current account balance</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              36.8%
            </div>
          </div>
          <div className="space-y-2">
            <div className={`text-4xl font-bold ${textPrimary}`}>256k</div>
            <div className={`text-sm ${textSecondary}`}>vs last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedOverviewCards;
