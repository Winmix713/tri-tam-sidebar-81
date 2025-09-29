
import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import EnhancedOverviewCards from './dashboard/EnhancedOverviewCards';
import ProductViewChart from './dashboard/ProductViewChart';
import EnhancedCustomerSection from './dashboard/EnhancedCustomerSection';
import ContentCarousel from './dashboard/ContentCarousel';
import SocialMediaPromotion from './dashboard/SocialMediaPromotion';

const MainContent = () => {
  return (
    <div className="relative flex-1">
      {/* Main Content Box */}
      <div 
        className="border border-[#e8e8e8] rounded-[32px] relative bg-white overflow-hidden w-full h-[880px]"
      >
        {/* Content Container */}
        <div className="p-8 h-full overflow-y-auto">
          <DashboardHeader theme="light" />
          
          <div className="grid grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="col-span-2">
              <EnhancedOverviewCards theme="light" />
              <ProductViewChart theme="light" />
              <EnhancedCustomerSection theme="light" />
              <ContentCarousel theme="light" />
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1">
              <SocialMediaPromotion theme="light" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
