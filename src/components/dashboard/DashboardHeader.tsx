
import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  theme: 'light' | 'dark';
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ theme }) => {
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';
  const inputBg = theme === 'dark' ? 'bg-[#363636] border-[#4c4c4c]' : 'bg-gray-50 border-[#e8e8e8]';

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className={`text-2xl font-bold ${textColor} mb-1`}>Dashboard Overview</h1>
        <p className={`${secondaryText} text-sm`}>Welcome back! Here's what's happening with your store today.</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Time Period Selector */}
        <div className="flex items-center gap-2">
          <span className={`text-sm ${secondaryText}`}>Last 7 days</span>
          <ChevronDown className={`w-4 h-4 ${secondaryText}`} />
        </div>
        
        {/* Search */}
        <div className={`relative`}>
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${secondaryText}`} />
          <input 
            type="text" 
            placeholder="Search..." 
            className={`${inputBg} border rounded-lg pl-10 pr-4 py-2 text-sm ${textColor} placeholder-${secondaryText} w-64`}
          />
        </div>
        
        {/* Notifications */}
        <div className="relative">
          <Bell className={`w-5 h-5 ${secondaryText} cursor-pointer`} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
