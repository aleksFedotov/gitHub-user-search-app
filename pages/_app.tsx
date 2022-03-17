import { useState } from 'react';
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
    }
  };
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
