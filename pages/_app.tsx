import { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles/GloabalStyles';
import './app.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>('dark');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', theme);
    }
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} changeTheme={changeTheme} theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
