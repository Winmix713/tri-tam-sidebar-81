
import React from 'react';
import { SubMenuItemProps, Theme } from '@/types/sidebar';

interface SubMenuItemComponentProps extends SubMenuItemProps {
  theme: Theme;
}

const SubMenuItem: React.FC<SubMenuItemComponentProps> = ({ label, onClick, theme }) => {
  const textColor = theme === 'dark' ? 'text-[#a8a8a8] hover:text-[#f1f1f1]' : 'text-[#989898] hover:text-gray-700';
  
  return (
    <div 
      className={`py-3 ${textColor} font-sf-pro font-semibold text-[15px] leading-6 cursor-pointer transition-colors`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default SubMenuItem;
