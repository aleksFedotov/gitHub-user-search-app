import { useState, useEffect } from 'react';
import './app.css';
import { GlobalStyles } from '../styles/GloabalStyles';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme/theme';

import { Provider } from 'react-redux';
import { store } from '../store';

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
        <Provider store={store}>
          <Component {...pageProps} changeTheme={changeTheme} theme={theme} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
