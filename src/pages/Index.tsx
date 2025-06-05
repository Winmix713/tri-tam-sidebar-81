
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import DarkLayout from '@/components/DarkLayout';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="relative">
      <ThemeToggle onThemeChange={setIsDarkMode} />
      {isDarkMode ? <DarkLayout /> : <Layout />}
    </div>
  );
};

export default Index;
