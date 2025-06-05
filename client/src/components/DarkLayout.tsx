
import React, { useState } from 'react';
import DarkSidebar from './DarkSidebar';
import DarkMainContent from './DarkMainContent';

const DarkLayout = () => {
  return (
    <div className="min-h-screen bg-[#1b1b1b] flex items-center justify-center p-8">
      <div className="flex w-[752px] h-[904px] bg-[#202020] rounded-[32px] overflow-hidden">
        <DarkSidebar />
        <DarkMainContent />
      </div>
    </div>
  );
};

export default DarkLayout;
