
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
  ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  const [resourcesExpanded, setResourcesExpanded] = useState(true);

  const Logo = () => (
    <div className="relative w-12 h-12">
      <svg width="48" height="50" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M14 1.3094C16.4752 -0.119662 19.5248 -0.119662 22 1.3094L31.3205 6.6906C33.7957 8.11966 35.3205 10.7607 35.3205 13.6188V24.3812C35.3205 27.2393 33.7957 29.8803 31.3205 31.3094L22 36.6906C19.5248 38.1197 16.4752 38.1197 14 36.6906L4.67949 31.3094C2.20428 29.8803 0.679491 27.2393 0.679491 24.3812V13.6188C0.679491 10.7607 2.20428 8.11966 4.67949 6.6906L14 1.3094Z" fill="#727272" />
      </svg>
      <svg width="48" height="50" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M-0.000600243 32.5348C-1.23787 31.8202 -2 30.4999 -2 29.0711L-2 16.0596C-2 12.9801 1.33393 11.0556 4.0006 12.5958L15.2706 19.1052C16.5079 19.8198 17.27 21.1401 17.27 22.5689L17.27 35.5804C17.27 38.6599 13.9361 40.5844 11.2694 39.0442L-0.000600243 32.5348Z" fill="url(#paint0_linear)" />
        <path d="M25.2706 39.0442C22.604 40.5844 19.27 38.6599 19.27 35.5804L19.27 22.5689C19.27 21.1401 20.0322 19.8198 21.2694 19.1052L32.5394 12.5958C35.2061 11.0556 38.54 12.9801 38.54 16.0596L38.54 29.0711C38.54 30.4999 37.7779 31.8202 36.5406 32.5348L25.2706 39.0442Z" fill="url(#paint1_linear)" />
        <path d="M31.543 10.5938C34.2089 9.054 34.2089 5.206 31.543 3.66624L20.2706 -2.84449C19.0327 -3.55948 17.5073 -3.55948 16.2694 -2.84449L4.997 3.66624C2.33113 5.206 2.33113 9.054 4.99699 10.5938L16.2694 17.1045C17.5073 17.8195 19.0327 17.8195 20.2706 17.1045L31.543 10.5938Z" fill="url(#paint2_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="-7.31" y1="24.47" x2="112.76" y2="35.33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="15.34" y1="26.62" x2="154.26" y2="18.39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E40AF" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="paint2_linear" x1="25.9" y1="-2.07" x2="-38.38" y2="75.44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const MenuItem = ({ icon: Icon, label, active = false, badge = null, onClick = () => {} }) => (
    <div 
      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
        active 
          ? 'bg-gray-100 border border-gray-200 shadow-sm' 
          : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-gray-700" />
        <span className="font-semibold text-gray-800 text-[15px]">{label}</span>
      </div>
      {badge && (
        <div className="bg-purple-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded-md">
          {badge}
        </div>
      )}
    </div>
  );

  const SubMenuItem = ({ label }) => (
    <div className="py-3 text-gray-500 font-semibold text-[15px] cursor-pointer hover:text-gray-700 transition-colors">
      {label}
    </div>
  );

  return (
    <div className="w-80 h-[904px] bg-[#fcfcfc] flex flex-col justify-between">
      {/* Header */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-12 h-12 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation */}
        <div className="space-y-1">
          <MenuItem icon={Home} label="Home" active />
          
          {/* Resources Section */}
          <div>
            <div 
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 rounded-xl"
              onClick={() => setResourcesExpanded(!resourcesExpanded)}
            >
              <div className="flex items-center gap-3">
                <Palette className="w-5 h-5 text-gray-700" />
                <span className="font-semibold text-gray-800 text-[15px]">Resources</span>
              </div>
              {resourcesExpanded ? (
                <Minus className="w-5 h-5 text-gray-700" />
              ) : (
                <Plus className="w-5 h-5 text-gray-700" />
              )}
            </div>
            
            {resourcesExpanded && (
              <div className="flex ml-3">
                <div className="w-px bg-gray-300 mr-6"></div>
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
      <div className="p-8 space-y-6">
        {/* Earnings Box */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-[32px] border border-gray-100 shadow-lg">
          <div className="mb-4">
            <div className="text-xs font-bold uppercase text-gray-600 mb-1">
              EARNING THIS MONTH
            </div>
            <div className="text-4xl font-semibold text-gray-800 tracking-tight">
              $8,326.00
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white font-semibold py-4 rounded-full border border-gray-600 shadow-md">
            Withdraw
          </Button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">TT</span>
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-[15px]">
                Tran Mau Tri Tam ✪
              </div>
              <div className="text-xs text-gray-500 font-medium">
                tam@ui8.net
              </div>
            </div>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 p-1 rounded">
            <ChevronUp className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
