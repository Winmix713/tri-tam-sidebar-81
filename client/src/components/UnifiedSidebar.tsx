
import React, { useState } from 'react';
import { Home, Palette, Bookmark, BarChart3, Users, Plus, Minus, ChevronUp } from 'lucide-react';
import { SidebarProps, Theme } from '@/types/sidebar';
import { SIDEBAR_DIMENSIONS, SIDEBAR_COLORS } from '@/constants/sidebar';
import Logo from '@/components/ui/Logo';
import MenuItem from '@/components/ui/MenuItem';
import SubMenuItem from '@/components/ui/SubMenuItem';

const UnifiedSidebar: React.FC<SidebarProps> = ({ theme, profileData, earningsData }) => {
  const [resourcesExpanded, setResourcesExpanded] = useState(true);
  
  const colors = SIDEBAR_COLORS[theme];
  const { width, height } = SIDEBAR_DIMENSIONS;

  const AddButton = () => (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <button 
        className={`w-10 h-10 rounded-full transition-shadow backdrop-blur-[32px] flex items-center justify-center ${
          theme === 'dark' 
            ? 'bg-[#282828] shadow-[0px_16px_24px_-13px_rgba(0,0,0,0.5),inset_2px_4px_16px_rgba(253,253,253,0.05)] hover:shadow-lg'
            : 'bg-[#fcfcfc] shadow-[0px_4px_16px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg'
        }`}
      >
        <Plus className={`w-[18px] h-[18px] ${theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]'}`} />
      </button>
    </div>
  );

  const EarningsBox = () => (
    <div className="px-2 pb-2" style={{ width: '320px', height: '168px' }}>
      <div 
        className={`p-6 rounded-[32px] flex flex-col gap-4 ${
          theme === 'dark' 
            ? 'border-[#363636] backdrop-blur-[32px] bg-[#282828]'
            : 'border-[#f6f6f6] bg-gradient-to-br from-[#F7F7F7] to-[#FEFEFE]'
        }`}
        style={{
          width: '304px',
          height: '168px',
          border: `1px solid ${theme === 'dark' ? '#363636' : '#f6f6f6'}`,
          boxShadow: theme === 'dark' 
            ? '0px 16px 24px -13px rgba(0, 0, 0, 0.5), 0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25), 0px 5px 1.5px -4px rgba(8, 8, 8, 0.2), 0px 6px 4px -4px rgba(8, 8, 8, 0.16), 0px 6px 13px rgba(8, 8, 8, 0.12), 0px 24px 24px -16px rgba(8, 8, 8, 0.08), inset 2px 4px 16px rgba(253, 253, 253, 0.05)'
            : '0px 32px 32px -12px rgba(0, 0, 0, 0.1), 0px 16px 32px -13px rgba(39, 39, 39, 0.25), 0px 2px 4px rgba(194, 194, 194, 0.34), inset 0px 0px 0px 3px rgba(255, 255, 255, 0.4)'
        }}
      >
        <div className="flex flex-col gap-1">
          <div className={`font-sf-pro font-bold text-[10px] leading-4 uppercase ${colors.text}`}>
            {earningsData.period}
          </div>
          <div className={`font-sf-pro font-semibold text-4xl leading-9 ${colors.text}`} style={{ letterSpacing: '-0.08em' }}>
            {earningsData.amount}
          </div>
        </div>
        <button 
          className="w-full h-12 rounded-full font-sf-pro-display font-semibold text-sm border-[1.25px] border-[#515151]"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(180deg, #779DFF 0%, #2D68FF 100%)'
              : 'radial-gradient(145.77% 145.77% at 50% 50%, #3A3A3A 0%, #A0A0A0 100%)',
            color: theme === 'dark' ? 'white' : '#f5f5f5',
            boxShadow: '0px 4px 4px -3px rgba(0, 0, 0, 0.25), inset 0px 2px 0px rgba(255, 255, 255, 0.19)'
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );

  const ProfileSection = () => (
    <div className="flex items-center justify-between px-8 py-6" style={{ width: '320px', height: '96px' }}>
      <div className="flex items-center gap-px">
        <div className="w-12 h-12 flex items-center justify-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-[#363636] to-[#282828]'
              : 'bg-gradient-to-br from-blue-400 to-purple-500'
          }`}>
            <span className={`font-bold text-sm ${theme === 'dark' ? 'text-[#f1f1f1]' : 'text-white'}`}>
              {profileData.initials}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={`font-sf-pro font-semibold text-[15px] leading-5 ${colors.text}`}>
            {profileData.name}
          </div>
          <div className={`font-sf-pro font-medium text-xs leading-3 ${colors.secondaryText}`}>
            {profileData.email}
          </div>
        </div>
      </div>
      <div className={`w-6 h-6 flex items-center justify-center cursor-pointer rounded ${
        theme === 'dark' ? 'hover:bg-[#363636]' : 'hover:bg-gray-100'
      }`}>
        <ChevronUp className={`w-[18px] h-[18px] ${colors.text}`} />
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col justify-between`} style={{ width: width, height: height, backgroundColor: colors.background }}>
      {/* Header and Navigation */}
      <div className="p-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center" style={{ width: '256px', height: '48px' }}>
          <Logo theme={theme} />
          <AddButton />
        </div>

        {/* Navigation */}
        <div className="flex flex-col" style={{ width: '256px' }}>
          <MenuItem icon={Home} label="Home" active theme={theme} />
          
          {/* Resources Section */}
          <div className="flex flex-col">
            <div 
              className={`flex items-center justify-between pl-3 cursor-pointer rounded-[10px] h-12 ${
                theme === 'dark' ? 'hover:bg-[#282828]' : 'hover:bg-gray-50'
              }`}
              onClick={() => setResourcesExpanded(!resourcesExpanded)}
            >
              <div className="flex items-center gap-3">
                <Palette className={`w-6 h-6 ${colors.text}`} />
                <span className={`font-sf-pro font-semibold text-[15px] leading-6 ${colors.text}`}>Resources</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                {resourcesExpanded ? (
                  <Minus className={`w-[18px] h-[18px] ${colors.text}`} />
                ) : (
                  <Plus className={`w-[18px] h-[18px] ${colors.text}`} />
                )}
              </div>
            </div>
            
            {resourcesExpanded && (
              <div className="flex pl-3 gap-3" style={{ width: '256px', height: '192px' }}>
                <div className={`w-px h-full`} style={{ backgroundColor: colors.divider }}></div>
                <div className="flex-1">
                  <SubMenuItem label="Fonts" theme={theme} />
                  <SubMenuItem label="Icons" theme={theme} />
                  <SubMenuItem label="Color" theme={theme} />
                  <SubMenuItem label="Illustrations" theme={theme} />
                </div>
              </div>
            )}
          </div>

          <MenuItem icon={Bookmark} label="Saved" badge="8" theme={theme} />
          <MenuItem icon={BarChart3} label="Metrics" theme={theme} />
          <MenuItem icon={Users} label="Community" theme={theme} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center" style={{ width: '320px', height: '264px' }}>
        <EarningsBox />
        <ProfileSection />
      </div>
    </div>
  );
};

export default UnifiedSidebar;
