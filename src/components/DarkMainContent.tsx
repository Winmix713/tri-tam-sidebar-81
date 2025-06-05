
import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import EnhancedOverviewCards from './dashboard/EnhancedOverviewCards';
import ProductViewChart from './dashboard/ProductViewChart';
import EnhancedCustomerSection from './dashboard/EnhancedCustomerSection';
import ContentCarousel from './dashboard/ContentCarousel';
import SocialMediaPromotion from './dashboard/SocialMediaPromotion';

const DarkMainContent = () => {
  return (
    <div className="relative flex-1">
      {/* Main Content Box */}
      <div 
        className="border border-[#363636] rounded-[32px] relative bg-[#1b1b1b] overflow-hidden w-full h-[880px]"
      >
        {/* Content Container */}
        <div className="p-8 h-full overflow-y-auto">
          <DashboardHeader theme="dark" />
          
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="col-span-2">
              <EnhancedOverviewCards theme="dark" />
              <ProductViewChart theme="dark" />
              <EnhancedCustomerSection theme="dark" />
              <ContentCarousel theme="dark" />
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1">
              <SocialMediaPromotion theme="dark" />
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
