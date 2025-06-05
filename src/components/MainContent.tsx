
import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import EnhancedOverviewCards from './dashboard/EnhancedOverviewCards';
import ProductViewChart from './dashboard/ProductViewChart';
import EnhancedCustomerSection from './dashboard/EnhancedCustomerSection';
import ContentCarousel from './dashboard/ContentCarousel';
import SocialMediaPromotion from './dashboard/SocialMediaPromotion';

const MainContent = () => {
  return (
    <div className="relative" style={{ width: '432px', height: '880px' }}>
      {/* Main Content Box */}
      <div 
        className="border border-[#e8e8e8] rounded-[32px] relative bg-white overflow-hidden"
        style={{ width: '730px', height: '880px' }}
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
      
      {/* Content Box Overlay */}
      <div 
        className="absolute"
        style={{
          width: '306px',
          height: '880px',
          left: '125px',
          top: '0px',
          background: 'linear-gradient(270deg, #FCFCFC 0%, rgba(252, 252, 252, 0) 100%)'
        }}
      />
    </div>
  );
};

export default MainContent;
