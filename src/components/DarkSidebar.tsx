
import React, { useState } from 'react';
import { 
  Home, 
  Palette, 
  Bookmark, 
  BarChart3, 
  Users, 
  Plus, 
  Minus, 
  ChevronUp,
  LucideIcon
} from 'lucide-react';

const DarkSidebar = () => {
  const [resourcesExpanded, setResourcesExpanded] = useState(true);

  const Logo = () => (
    <div className="relative w-12 h-12">
      <svg width="48" height="48" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M14 1.3094C16.4752 -0.119662 19.5248 -0.119662 22 1.3094L31.3205 6.6906C33.7957 8.11966 35.3205 10.7607 35.3205 13.6188V24.3812C35.3205 27.2393 33.7957 29.8803 31.3205 31.3094L22 36.6906C19.5248 38.1197 16.4752 38.1197 14 36.6906L4.67949 31.3094C2.20428 29.8803 0.679491 27.2393 0.679491 24.3812V13.6188C0.679491 10.7607 2.20428 8.11966 4.67949 6.6906L14 1.3094Z" fill="#727272" />
      </svg>
      <svg width="48" height="48" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M-0.000600243 32.5348C-1.23787 31.8202 -2 30.4999 -2 29.0711L-2 16.0596C-2 12.9801 1.33393 11.0556 4.0006 12.5958L15.2706 19.1052C16.5079 19.8198 17.27 21.1401 17.27 22.5689L17.27 35.5804C17.27 38.6599 13.9361 40.5844 11.2694 39.0442L-0.000600243 32.5348Z" fill="url(#paint0_linear_dark)" />
        <path d="M25.2706 39.0442C22.604 40.5844 19.27 38.6599 19.27 35.5804L19.27 22.5689C19.27 21.1401 20.0322 19.8198 21.2694 19.1052L32.5394 12.5958C35.2061 11.0556 38.54 12.9801 38.54 16.0596L38.54 29.0711C38.54 30.4999 37.7779 31.8202 36.5406 32.5348L25.2706 39.0442Z" fill="url(#paint1_linear_dark)" />
        <path d="M31.543 10.5938C34.2089 9.054 34.2089 5.206 31.543 3.66624L20.2706 -2.84449C19.0327 -3.55948 17.5073 -3.55948 16.2694 -2.84449L4.997 3.66624C2.33113 5.206 2.33113 9.054 4.99699 10.5938L16.2694 17.1045C17.5073 17.8195 19.0327 17.8195 20.2706 17.1045L31.543 10.5938Z" fill="url(#paint2_linear_dark)" />
        <defs>
          <linearGradient id="paint0_linear_dark" x1="-7.31" y1="24.47" x2="112.76" y2="35.33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor="#787878" />
          </linearGradient>
          <linearGradient id="paint1_linear_dark" x1="15.34" y1="26.62" x2="154.26" y2="18.39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor="#787878" />
          </linearGradient>
          <linearGradient id="paint2_linear_dark" x1="25.9" y1="-2.07" x2="-38.38" y2="75.44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor="#787878" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const MenuItem = ({ icon: Icon, label, active = false, badge = null, onClick = () => {} }: {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    badge?: string | null;
    onClick?: () => void;
  }) => (
    <div 
      className={`flex items-center justify-between p-3 rounded-[10px] cursor-pointer transition-all duration-200 font-sf-pro text-[15px] font-semibold leading-6 ${
        active 
          ? 'bg-[#363636] border border-[#4c4c4c] text-[#f1f1f1] shadow-[0px_16px_24px_-13px_rgba(0,0,0,0.5),0px_2px_0.5px_-2px_rgba(0,0,0,0.25),inset_2px_4px_16px_rgba(253,253,253,0.05)]' 
          : 'hover:bg-[#282828] text-[#f1f1f1]'
      }`}
      onClick={onClick}
      style={{ width: '256px', height: '48px' }}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-[#f1f1f1]" />
        <span>{label}</span>
      </div>
      {badge && (
        <div className="bg-[#2d68ff]/20 text-[#2d68ff] text-[15px] font-semibold px-[7px] py-0 rounded-md w-6 h-6 flex items-center justify-center border border-[#2d68ff]/30">
          {badge}
        </div>
      )}
    </div>
  );

  const SubMenuItem = ({ label }: { label: string }) => (
    <div className="py-3 text-[#a8a8a8] font-sf-pro font-semibold text-[15px] leading-6 cursor-pointer hover:text-[#f1f1f1] transition-colors">
      {label}
    </div>
  );

  return (
    <div className="w-80 h-[904px] bg-[#202020] flex flex-col justify-between">
      {/* Header and Navigation */}
      <div className="p-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center" style={{ width: '256px', height: '48px' }}>
          <Logo />
          <div className="relative w-12 h-12 flex items-center justify-center">
            <button className="w-10 h-10 rounded-full bg-[#282828] shadow-[0px_16px_24px_-13px_rgba(0,0,0,0.5),inset_2px_4px_16px_rgba(253,253,253,0.05)] hover:shadow-lg transition-shadow backdrop-blur-[32px] flex items-center justify-center">
              <Plus className="w-[18px] h-[18px] text-[#f1f1f1]" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col" style={{ width: '256px' }}>
          <MenuItem icon={Home} label="Home" active />
          
          {/* Resources Section */}
          <div className="flex flex-col">
            <div 
              className="flex items-center justify-between pl-3 cursor-pointer hover:bg-[#282828] rounded-[10px] h-12"
              onClick={() => setResourcesExpanded(!resourcesExpanded)}
            >
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-[#f1f1f1]" />
                <span className="font-sf-pro font-semibold text-[15px] leading-6 text-[#f1f1f1]">Resources</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                {resourcesExpanded ? (
                  <Minus className="w-[18px] h-[18px] text-[#f1f1f1]" />
                ) : (
                  <Plus className="w-[18px] h-[18px] text-[#f1f1f1]" />
                )}
              </div>
            </div>
            
            {resourcesExpanded && (
              <div className="flex pl-3 gap-3" style={{ width: '256px', height: '192px' }}>
                <div className="w-px bg-[#363636] h-full"></div>
                <div className="flex-1">
                  <SubMenuItem label="Fonts" />
                  <SubMenuItem label="Icons" />
                  <SubMenuItem label="Color" />
                  <SubMenuItem label="Illustrations" />
                </div>
              </div>
            )}
          </div>

          <MenuItem icon={Bookmark} label="Saved" badge="8" />
          <MenuItem icon={BarChart3} label="Metrics" />
          <MenuItem icon={Users} label="Community" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center" style={{ width: '320px', height: '264px' }}>
        {/* Earnings Box */}
        <div className="px-2 pb-2" style={{ width: '320px', height: '168px' }}>
          <div 
            className="p-6 rounded-[32px] border border-[#363636] flex flex-col gap-4 backdrop-blur-[32px]"
            style={{
              width: '304px',
              height: '168px',
              background: '#282828',
              boxShadow: '0px 16px 24px -13px rgba(0, 0, 0, 0.5), 0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25), 0px 5px 1.5px -4px rgba(8, 8, 8, 0.2), 0px 6px 4px -4px rgba(8, 8, 8, 0.16), 0px 6px 13px rgba(8, 8, 8, 0.12), 0px 24px 24px -16px rgba(8, 8, 8, 0.08), inset 2px 4px 16px rgba(253, 253, 253, 0.05)'
            }}
          >
            <div className="flex flex-col gap-1">
              <div className="font-sf-pro font-bold text-[10px] leading-4 uppercase text-[#f1f1f1]">
                EARNING THIS MONTH
              </div>
              <div className="font-sf-pro font-semibold text-4xl leading-9 text-[#f1f1f1]" style={{ letterSpacing: '-0.08em' }}>
                $8,326.00
              </div>
            </div>
            <button 
              className="w-full h-12 rounded-full font-sf-pro-display font-semibold text-sm text-white border-[1.25px] border-[#515151]"
              style={{
                background: 'linear-gradient(180deg, #779DFF 0%, #2D68FF 100%)',
                boxShadow: '0px 4px 4px -3px rgba(0, 0, 0, 0.25), inset 0px 2px 0px rgba(255, 255, 255, 0.19)'
              }}
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-between px-8 py-6" style={{ width: '320px', height: '96px' }}>
          <div className="flex items-center gap-px">
            <div className="w-12 h-12 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-[#363636] to-[#282828] rounded-full flex items-center justify-center">
                <span className="text-[#f1f1f1] font-bold text-sm">TT</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-sf-pro font-semibold text-[15px] leading-5 text-[#f1f1f1]">
                Tran Mau Tri Tam ✪
              </div>
              <div className="font-sf-pro font-medium text-xs leading-3 text-[#a8a8a8]">
                tam@ui8.net
              </div>
            </div>
          </div>
          <div className="w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-[#363636] rounded">
            <ChevronUp className="w-[18px] h-[18px] text-[#f1f1f1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSidebar;
