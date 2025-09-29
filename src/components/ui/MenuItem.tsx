
import React from 'react';
import { MenuItemProps, Theme } from '@/types/sidebar';

interface MenuItemComponentProps extends MenuItemProps {
  theme: Theme;
}

const MenuItem: React.FC<MenuItemComponentProps> = ({ 
  icon: Icon, 
  label, 
  active = false, 
  badge = null, 
  onClick = () => {}, 
  theme 
}) => {
  const baseClasses = "flex items-center justify-between p-3 rounded-[10px] cursor-pointer transition-all duration-200 font-sf-pro text-[15px] font-semibold leading-6";
  
  const themeClasses = theme === 'dark' 
    ? {
        active: 'bg-[#363636] border border-[#4c4c4c] text-[#f1f1f1] shadow-[0px_16px_24px_-13px_rgba(0,0,0,0.5),0px_2px_0.5px_-2px_rgba(0,0,0,0.25),inset_2px_4px_16px_rgba(253,253,253,0.05)]',
        inactive: 'hover:bg-[#282828] text-[#f1f1f1]',
        iconColor: 'text-[#f1f1f1]',
        badgeClasses: 'bg-[#2d68ff]/20 text-[#2d68ff] border border-[#2d68ff]/30'
      }
    : {
        active: 'bg-[#f6f6f6] border border-[#eeeeee] text-[#1e1e1e] shadow-[0px_14px_40.7px_-9px_rgba(0,0,0,0.12),inset_0px_0px_0px_2px_#ffffff]',
        inactive: 'hover:bg-gray-50 text-[#1e1e1e]',
        iconColor: 'text-[#1e1e1e]',
        badgeClasses: 'bg-[#edbfff] text-[#1e1e1e]'
      };

  return (
    <div 
      className={`${baseClasses} ${active ? themeClasses.active : themeClasses.inactive}`}
      onClick={onClick}
      style={{ width: '256px', height: '48px' }}
    >
      <div className="flex items-center gap-3">
        <Icon className={`w-6 h-6 ${themeClasses.iconColor}`} />
        <span>{label}</span>
      </div>
      {badge && (
        <div className={`${themeClasses.badgeClasses} text-[15px] font-semibold px-[7px] py-0 rounded-md w-6 h-6 flex items-center justify-center`}>
          {badge}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
