
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
  ChevronDown,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const [resourcesExpanded, setResourcesExpanded] = useState(true);

  const Logo = () => (
    <div className="relative w-12 h-12">
      <svg width="48" height="48" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M14 1.3094C16.4752 -0.119662 19.5248 -0.119662 22 1.3094L31.3205 6.6906C33.7957 8.11966 35.3205 10.7607 35.3205 13.6188V24.3812C35.3205 27.2393 33.7957 29.8803 31.3205 31.3094L22 36.6906C19.5248 38.1197 16.4752 38.1197 14 36.6906L4.67949 31.3094C2.20428 29.8803 0.679491 27.2393 0.679491 24.3812V13.6188C0.679491 10.7607 2.20428 8.11966 4.67949 6.6906L14 1.3094Z" fill="#727272" />
      </svg>
      <svg width="48" height="48" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M-0.000600243 32.5348C-1.23787 31.8202 -2 30.4999 -2 29.0711L-2 16.0596C-2 12.9801 1.33393 11.0556 4.0006 12.5958L15.2706 19.1052C16.5079 19.8198 17.27 21.1401 17.27 22.5689L17.27 35.5804C17.27 38.6599 13.9361 40.5844 11.2694 39.0442L-0.000600243 32.5348Z" fill="url(#paint0_linear)" />
        <path d="M25.2706 39.0442C22.604 40.5844 19.27 38.6599 19.27 35.5804L19.27 22.5689C19.27 21.1401 20.0322 19.8198 21.2694 19.1052L32.5394 12.5958C35.2061 11.0556 38.54 12.9801 38.54 16.0596L38.54 29.0711C38.54 30.4999 37.7779 31.8202 36.5406 32.5348L25.2706 39.0442Z" fill="url(#paint1_linear)" />
        <path d="M31.543 10.5938C34.2089 9.054 34.2089 5.206 31.543 3.66624L20.2706 -2.84449C19.0327 -3.55948 17.5073 -3.55948 16.2694 -2.84449L4.997 3.66624C2.33113 5.206 2.33113 9.054 4.99699 10.5938L16.2694 17.1045C17.5073 17.8195 19.0327 17.8195 20.2706 17.1045L31.543 10.5938Z" fill="url(#paint2_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="-7.31" y1="24.47" x2="112.76" y2="35.33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor="#4B7BFF" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="15.34" y1="26.62" x2="154.26" y2="18.39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor="#4B7BFF" />
          </linearGradient>
          <linearGradient id="paint2_linear" x1="25.9" y1="-2.07" x2="-38.38" y2="75.44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor="#4B7BFF" />
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
          ? 'bg-[#f6f6f6] border border-[#eeeeee] text-[#1e1e1e] shadow-[0px_14px_40.7px_-9px_rgba(0,0,0,0.12),inset_0px_0px_0px_2px_#ffffff]' 
          : 'hover:bg-gray-50 text-[#1e1e1e]'
      }`}
      onClick={onClick}
      style={{ width: '256px', height: '48px' }}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-[#1e1e1e]" />
        <span>{label}</span>
      </div>
      {badge && (
        <div className="bg-[#edbfff] text-[#1e1e1e] text-[15px] font-semibold px-[7px] py-0 rounded-md w-6 h-6 flex items-center justify-center">
          {badge}
        </div>
      )}
    </div>
  );

  const SubMenuItem = ({ label }: { label: string }) => (
    <div className="py-3 text-[#989898] font-sf-pro font-semibold text-[15px] leading-6 cursor-pointer hover:text-gray-700 transition-colors">
      {label}
    </div>
  );

  return (
    <div className="w-80 h-[904px] bg-[#fcfcfc] flex flex-col justify-between">
      {/* Header and Navigation */}
      <div className="p-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center" style={{ width: '256px', height: '48px' }}>
          <Logo />
          <div className="relative w-12 h-12 flex items-center justify-center">
            <Button 
              size="icon" 
              variant="ghost" 
              className="w-10 h-10 rounded-full bg-[#fcfcfc] shadow-[0px_4px_16px_rgba(0,0,0,0.04),0px_2px_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow"
            >
              <Plus className="w-[18px] h-[18px] text-[#1e1e1e]" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col" style={{ width: '256px' }}>
          <MenuItem icon={Home} label="Home" active />
          
          {/* Resources Section */}
          <div className="flex flex-col">
            <div 
              className="flex items-center justify-between pl-3 cursor-pointer hover:bg-gray-50 rounded-[10px] h-12"
              onClick={() => setResourcesExpanded(!resourcesExpanded)}
            >
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-[#1e1e1e]" />
                <span className="font-sf-pro font-semibold text-[15px] leading-6 text-[#1e1e1e]">Resources</span>
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                {resourcesExpanded ? (
                  <Minus className="w-[18px] h-[18px] text-[#000000]" />
                ) : (
                  <Plus className="w-[18px] h-[18px] text-[#1e1e1e]" />
                )}
              </div>
            </div>
            
            {resourcesExpanded && (
              <div className="flex pl-3 gap-3" style={{ width: '256px', height: '192px' }}>
                <div className="w-px bg-[#dddddd] h-full"></div>
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
            className="p-6 rounded-[32px] border border-[#f6f6f6] flex flex-col gap-4"
            style={{
              width: '304px',
              height: '168px',
              background: 'linear-gradient(27.84deg, #F7F7F7 6.18%, #FEFEFE 82.72%)',
              boxShadow: '0px 32px 32px -12px rgba(0, 0, 0, 0.1), 0px 16px 32px -13px rgba(39, 39, 39, 0.25), 0px 2px 4px rgba(194, 194, 194, 0.34), inset 0px 0px 0px 3px rgba(255, 255, 255, 0.4)'
            }}
          >
            <div className="flex flex-col gap-1">
              <div className="font-sf-pro font-bold text-[10px] leading-4 uppercase text-[#1e1e1e]">
                EARNING THIS MONTH
              </div>
              <div className="font-sf-pro font-semibold text-4xl leading-9 text-[#1e1e1e]" style={{ letterSpacing: '-0.08em' }}>
                $8,326.00
              </div>
            </div>
            <Button 
              className="w-full h-12 rounded-full font-sf-pro-display font-semibold text-sm text-[#f5f5f5] border-[1.25px] border-[#515151]"
              style={{
                background: 'radial-gradient(145.77% 145.77% at 50% 50%, #3A3A3A 0%, #A0A0A0 100%)',
                boxShadow: '0px 4px 4px -3px rgba(0, 0, 0, 0.25), inset 0px 2px 0px rgba(255, 255, 255, 0.19)'
              }}
            >
              Withdraw
            </Button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-between px-8 py-6" style={{ width: '320px', height: '96px' }}>
          <div className="flex items-center gap-px">
            <div className="w-12 h-12 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TT</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-sf-pro font-semibold text-[15px] leading-5 text-[#1e1e1e]">
                Tran Mau Tri Tam ✪
              </div>
              <div className="font-sf-pro font-medium text-xs leading-3 text-[#989898]">
                tam@ui8.net
              </div>
            </div>
          </div>
          <div className="w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded">
            <ChevronUp className="w-[18px] h-[18px] text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
