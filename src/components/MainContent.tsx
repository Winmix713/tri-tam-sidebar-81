
import React from 'react';

const MainContent = () => {
  return (
    <div className="flex-1 p-8 bg-white">
      <div className="h-full">
        <h1 className="text-[32px] font-medium text-gray-800 mb-8 tracking-tight">
          Dashboard
        </h1>
        
        <div className="space-y-8 h-[760px]">
          <div className="flex-1 bg-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Analytics Overview</h3>
              <p className="text-gray-500 text-sm">Your performance metrics will appear here</p>
            </div>
          </div>
          
          <div className="flex-1 bg-gray-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Content Management</h3>
              <p className="text-gray-500 text-sm">Manage your content and resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
