
import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import OverviewCards from './dashboard/OverviewCards';
import CustomerAnalytics from './dashboard/CustomerAnalytics';
import CustomerAvatars from './dashboard/CustomerAvatars';
import PopularProducts from './dashboard/PopularProducts';

const DarkMainContent = () => {
  return (
    <div className="relative" style={{ width: '432px', height: '880px' }}>
      {/* Main Content Box */}
      <div 
        className="border border-[#363636] rounded-[32px] relative bg-[#1b1b1b] overflow-hidden"
        style={{ width: '730px', height: '880px' }}
      >
        {/* Content Container */}
        <div className="p-8 h-full overflow-y-auto">
          <DashboardHeader theme="dark" />
          
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="col-span-2">
              <OverviewCards theme="dark" />
              <CustomerAnalytics theme="dark" />
              <CustomerAvatars theme="dark" />
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1">
              <PopularProducts theme="dark" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Box Overlay */}
      <div 
        className="absolute"
        style={{
          width: '306px',
          height: '880px',
          left: '125px',
          top: '0px',
          background: 'linear-gradient(270deg, #202020 0%, rgba(32, 32, 32, 0) 100%)'
        }}
      />
    </div>
  );
};

export default DarkMainContent;
