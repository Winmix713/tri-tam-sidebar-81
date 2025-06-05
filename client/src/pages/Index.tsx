
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import UnifiedLayout from '@/components/UnifiedLayout';
import ThemeToggle from '@/components/ThemeToggle';

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative">
        <ThemeToggle />
        <UnifiedLayout />
      </div>
    </ThemeProvider>
  );
};

export default Index;
