import { getLocalTheme, setLocalTheme, getDataTheme, setDataTheme } from '@/utils/getLocalTheme';
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const currentTheme = getDataTheme() || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    setDataTheme(newTheme);
    setLocalTheme(newTheme);

    setIsDarkMode(newTheme === 'dark');
  };

  useEffect(() => {
    const savedTheme = getLocalTheme() || 'light';

    setDataTheme(savedTheme);
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  return { isDarkMode, toggleDarkMode };
};
