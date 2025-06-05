
import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  theme: 'light' | 'dark';
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ theme }) => {
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const inputBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const dropdownBg = theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className={`text-3xl font-bold ${textPrimary} mb-2`}>
          Dashboard Overview
        </h1>
        <p className={`${textSecondary} text-base`}>
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Time Period Selector */}
        <div className={`flex items-center gap-3 px-4 py-2 ${dropdownBg} border rounded-xl cursor-pointer hover:shadow-md transition-all`}>
          <span className={`text-sm font-medium ${textPrimary}`}>Last 7 days</span>
          <ChevronDown className={`w-4 h-4 ${textSecondary}`} />
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${textSecondary}`} />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className={`${inputBg} border rounded-xl pl-10 pr-4 py-3 text-sm ${textPrimary} placeholder:${textSecondary} w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
          />
        </div>
        
        {/* Notifications */}
        <div className="relative">
          <button className={`p-3 ${dropdownBg} border rounded-xl hover:shadow-md transition-all`}>
            <Bell className={`w-5 h-5 ${textSecondary}`} />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-semibold">3</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
