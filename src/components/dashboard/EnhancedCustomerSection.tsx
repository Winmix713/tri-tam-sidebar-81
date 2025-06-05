
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EnhancedCustomerSectionProps {
  theme: 'light' | 'dark';
}

const EnhancedCustomerSection: React.FC<EnhancedCustomerSectionProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  const customers = [
    { id: 1, name: 'Gladyce', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face' },
    { id: 2, name: 'Elbert', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face' },
    { id: 3, name: 'Joyce', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face' },
    { id: 4, name: 'John', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face' },
    { id: 5, name: 'Anna', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face' },
    { id: 6, name: 'Mike', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face' },
    { id: 7, name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face' },
    { id: 8, name: 'David', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=face' },
  ];

  return (
    <div className={`${cardBg} border rounded-[20px] p-6 mb-8`}>
      {/* Message Section */}
      <div className="mb-6">
        <h3 className={`text-lg font-semibold ${textColor} mb-2`}>857 new customers today!</h3>
        <p className={`text-sm ${secondaryText}`}>Send a welcome message to all new customers.</p>
      </div>

      {/* Customer Avatars */}
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {customers.map((customer) => (
            <div key={customer.id} className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group">
              <div className="relative">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-transparent group-hover:border-blue-500 transition-all"
                />
              </div>
              <span className={`text-xs ${secondaryText} group-hover:${textColor} transition-colors`}>
                {customer.name}
              </span>
            </div>
          ))}
          
          {/* View All Button */}
          <div className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group">
            <div className={`w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center group-hover:border-blue-500 transition-all ${theme === 'dark' ? 'hover:bg-[#363636]' : 'hover:bg-gray-50'}`}>
              <ArrowRight className={`w-6 h-6 ${secondaryText} group-hover:text-blue-500 transition-colors`} />
            </div>
            <span className={`text-xs ${secondaryText} group-hover:text-blue-500 transition-colors`}>
              View all
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCustomerSection;
