
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EnhancedCustomerSectionProps {
  theme: 'light' | 'dark';
}

const EnhancedCustomerSection: React.FC<EnhancedCustomerSectionProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
    : 'bg-white/80 border-gray-200/50 backdrop-blur-sm';
  
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  const customers = [
    { id: 1, name: 'Gladyce', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face' },
    { id: 2, name: 'Elbert', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
    { id: 3, name: 'Joyce', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face' },
    { id: 4, name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face' },
    { id: 5, name: 'Anna', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face' },
    { id: 6, name: 'Mike', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face' },
    { id: 7, name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face' },
    { id: 8, name: 'David', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face' },
  ];

  return (
    <div className={`${cardBg} border rounded-3xl p-8 mb-10 hover:shadow-2xl transition-all duration-300`}>
      {/* Enhanced Message Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <h3 className={`text-2xl font-bold ${textPrimary}`}>857 new customers today!</h3>
        </div>
        <p className={`text-base ${textSecondary} ml-5`}>
          Send a welcome message to all new customers and increase engagement.
        </p>
      </div>

      {/* Enhanced Customer Avatars */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {customers.map((customer) => (
            <div key={customer.id} className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
              <div className="relative">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-20 h-20 rounded-2xl object-cover border-3 border-transparent group-hover:border-blue-500 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-800"></div>
              </div>
              <span className={`text-sm font-medium ${textSecondary} group-hover:${textPrimary} transition-colors text-center`}>
                {customer.name}
              </span>
            </div>
          ))}
          
          {/* Enhanced View All Button */}
          <div className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group">
            <div className={`w-20 h-20 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-300`}>
              <ArrowRight className={`w-8 h-8 ${textSecondary} group-hover:text-blue-500 transition-colors`} />
            </div>
            <span className={`text-sm font-medium ${textSecondary} group-hover:text-blue-500 transition-colors text-center`}>
              View all
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCustomerSection;
