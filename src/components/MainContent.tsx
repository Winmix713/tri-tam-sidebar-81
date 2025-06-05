
import React from 'react';

const MainContent = () => {
  return (
    <div className="relative" style={{ width: '432px', height: '880px' }}>
      {/* Main Content Box */}
      <div 
        className="border border-[#e8e8e8] rounded-[32px] relative"
        style={{ width: '730px', height: '880px' }}
      >
        {/* Content Title */}
        <div 
          className="absolute font-sf-pro font-medium text-[32px] leading-6 text-[#1e1e1e]"
          style={{ 
            width: '161px', 
            height: '24px',
            left: '32px', 
            top: '32px',
            letterSpacing: '-0.03em' 
          }}
        >
          Dashboard
        </div>
        
        {/* Content Sections */}
        <div 
          className="absolute flex flex-col gap-8"
          style={{ 
            width: '804px', 
            height: '760px',
            left: '32px',
            top: '88px'
          }}
        >
          <div 
            className="bg-[#ededed] rounded-2xl flex-1"
            style={{ width: '804px', height: '364px' }}
          />
          <div 
            className="bg-[#ededed] rounded-2xl flex-1"
            style={{ width: '804px', height: '364px' }}
          />
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
