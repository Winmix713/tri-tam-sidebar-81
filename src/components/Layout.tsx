
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex max-w-7xl mx-auto bg-white rounded-[32px] overflow-hidden shadow-xl">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
