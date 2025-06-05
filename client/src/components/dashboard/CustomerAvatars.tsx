
import React from 'react';

interface CustomerAvatarsProps {
  theme: 'light' | 'dark';
}

const CustomerAvatars: React.FC<CustomerAvatarsProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  const customers = [
    { id: 1, name: 'JD', color: 'bg-blue-500' },
    { id: 2, name: 'AM', color: 'bg-green-500' },
    { id: 3, name: 'SK', color: 'bg-purple-500' },
    { id: 4, name: 'LM', color: 'bg-pink-500' },
    { id: 5, name: 'RT', color: 'bg-yellow-500' },
    { id: 6, name: 'BK', color: 'bg-red-500' },
    { id: 7, name: 'CL', color: 'bg-indigo-500' },
    { id: 8, name: 'DM', color: 'bg-orange-500' },
  ];

  return (
    <div className={`${cardBg} border rounded-[20px] p-6`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${textColor}`}>Recent Customers</h3>
        <span className={`text-sm ${secondaryText}`}>857 new today</span>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2">
        {customers.map((customer) => (
          <div key={customer.id} className="flex flex-col items-center gap-2 min-w-[60px]">
            <div className={`w-12 h-12 ${customer.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
              {customer.name}
            </div>
            <div className={`text-xs ${secondaryText}`}>{customer.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerAvatars;
