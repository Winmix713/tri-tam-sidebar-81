
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import UnifiedSidebar from './UnifiedSidebar';
import MainContent from './MainContent';
import DarkMainContent from './DarkMainContent';
import { ProfileData, EarningsData } from '@/types/sidebar';

const UnifiedLayout: React.FC = () => {
  const { theme } = useTheme();
  
  const profileData: ProfileData = {
    name: 'Tran Mau Tri Tam ✪',
    email: 'tam@ui8.net',
    initials: 'TT'
  };

  const earningsData: EarningsData = {
    amount: '$8,326.00',
    period: 'EARNING THIS MONTH'
  };

  const backgroundClass = theme === 'dark' ? 'bg-[#1b1b1b]' : 'bg-gray-50';
  const containerBackground = theme === 'dark' ? 'bg-[#202020]' : 'bg-[#fcfcfc]';

  return (
    <div className={`min-h-screen ${backgroundClass} flex items-center justify-center p-8`}>
      <div className={`flex w-full max-w-none h-[904px] ${containerBackground} rounded-[32px] overflow-hidden`}>
        <UnifiedSidebar 
          theme={theme} 
          profileData={profileData} 
          earningsData={earningsData} 
        />
        {theme === 'dark' ? <DarkMainContent /> : <MainContent />}
      </div>
    </div>
  );
};

export default UnifiedLayout;
