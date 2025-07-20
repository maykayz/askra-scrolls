const THEME_KEY = 'theme';

export const getLocalTheme = () => {
  if (typeof window === 'undefined') return 'light'; // Default to light theme on server-side rendering

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setLocalTheme = (theme: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
};

export const getDataTheme = () => {
  return document.documentElement.getAttribute('data-theme');
};

export const setDataTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme);
};
