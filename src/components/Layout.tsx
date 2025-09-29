
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="flex w-[752px] h-[904px] bg-[#fcfcfc] rounded-[32px] overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
