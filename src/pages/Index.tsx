
import React from 'react';
import UnifiedLayout from '@/components/UnifiedLayout';
import ThemeToggle from '@/components/ThemeToggle';

const Index: React.FC = () => {
  return (
    <div className="relative">
      <ThemeToggle />
      <UnifiedLayout />
    </div>
  );
};

export default Index;
