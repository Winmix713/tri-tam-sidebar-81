
import React from 'react';
import { Theme } from '@/types/sidebar';

interface LogoProps {
  theme: Theme;
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  const gradientId = theme === 'dark' ? 'dark' : 'light';
  
  return (
    <div className="relative w-12 h-12">
      <svg width="48" height="48" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M14 1.3094C16.4752 -0.119662 19.5248 -0.119662 22 1.3094L31.3205 6.6906C33.7957 8.11966 35.3205 10.7607 35.3205 13.6188V24.3812C35.3205 27.2393 33.7957 29.8803 31.3205 31.3094L22 36.6906C19.5248 38.1197 16.4752 38.1197 14 36.6906L4.67949 31.3094C2.20428 29.8803 0.679491 27.2393 0.679491 24.3812V13.6188C0.679491 10.7607 2.20428 8.11966 4.67949 6.6906L14 1.3094Z" fill="#727272" />
      </svg>
      <svg width="48" height="48" viewBox="0 0 36 38" fill="none" className="absolute">
        <path d="M-0.000600243 32.5348C-1.23787 31.8202 -2 30.4999 -2 29.0711L-2 16.0596C-2 12.9801 1.33393 11.0556 4.0006 12.5958L15.2706 19.1052C16.5079 19.8198 17.27 21.1401 17.27 22.5689L17.27 35.5804C17.27 38.6599 13.9361 40.5844 11.2694 39.0442L-0.000600243 32.5348Z" fill={`url(#paint0_linear_${gradientId})`} />
        <path d="M25.2706 39.0442C22.604 40.5844 19.27 38.6599 19.27 35.5804L19.27 22.5689C19.27 21.1401 20.0322 19.8198 21.2694 19.1052L32.5394 12.5958C35.2061 11.0556 38.54 12.9801 38.54 16.0596L38.54 29.0711C38.54 30.4999 37.7779 31.8202 36.5406 32.5348L25.2706 39.0442Z" fill={`url(#paint1_linear_${gradientId})`} />
        <path d="M31.543 10.5938C34.2089 9.054 34.2089 5.206 31.543 3.66624L20.2706 -2.84449C19.0327 -3.55948 17.5073 -3.55948 16.2694 -2.84449L4.997 3.66624C2.33113 5.206 2.33113 9.054 4.99699 10.5938L16.2694 17.1045C17.5073 17.8195 19.0327 17.8195 20.2706 17.1045L31.543 10.5938Z" fill={`url(#paint2_linear_${gradientId})`} />
        <defs>
          <linearGradient id={`paint0_linear_${gradientId}`} x1="-7.31" y1="24.47" x2="112.76" y2="35.33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor={theme === 'dark' ? "#787878" : "#4B7BFF"} />
          </linearGradient>
          <linearGradient id={`paint1_linear_${gradientId}`} x1="15.34" y1="26.62" x2="154.26" y2="18.39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor={theme === 'dark' ? "#787878" : "#4B7BFF"} />
          </linearGradient>
          <linearGradient id={`paint2_linear_${gradientId}`} x1="25.9" y1="-2.07" x2="-38.38" y2="75.44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#231F20" />
            <stop offset="1" stopColor={theme === 'dark' ? "#787878" : "#4B7BFF"} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
