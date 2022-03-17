import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBg: string;
    bg: string;
    bodyPrimary: string;
    heading: string;
    bodySecondary: string;
    hover: string;
  }
}

export const lightTheme: DefaultTheme = {
  mainBg: '#f6f8ff',
  bg: '#fefefe',
  bodyPrimary: '#4b6a9b',
  heading: '#2b3442',
  bodySecondary: '#697c9a',
  hover: '#222731',
};

export const darkTheme: DefaultTheme = {
  mainBg: '#141d2f',
  bg: '#1e2a47',
  bodyPrimary: '#ffffff',
  heading: '#ffffff',
  bodySecondary: '#ffffff',
  hover: '#90A4D4',
};
