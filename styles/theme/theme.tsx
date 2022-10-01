import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { createTheme } from '@nextui-org/react';

export const Nextuidark = createTheme({
  type: 'dark',
});

export const Nextuilight = createTheme({
  type: 'light',
});

export const DarkMode: DefaultTheme = {
  body: {
    background: '#111111',
    color: '#fff',
  },
  colors: {
    primary: '#00ee87',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#ffffff',
  },
  button: {
    background: '#06B49A',
    color: '#ffffff',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  navbar: {
    background: '#000000',
    color: '#fff',
    colapse: '#0000009c ',
  },
  boxShadow: {
    color1: '#00000000',
    color2: '#00000000',
  },
  avatar: {
    img: 'https://i.imgur.com/nBtsD1X.png',
  },
};

export const LightMode: DefaultTheme = {
  body: {
    background: '#ffffff',
    color: '#000000',
  },
  colors: {
    primary: '#00ee87',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#000000',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  button: {
    background: '#06B49A',
    color: '#ffffff',
  },
  navbar: {
    background: '#ececec',
    color: '#000000a9',
    colapse: '#ffffff9c',
  },
  boxShadow: {
    color1: '#c3c3c3',
    color2: '#fdfdfd',
  },
  avatar: {
    img: 'https://i.imgur.com/yPJfZ70.png',
  },
};

type Props = {
  children: ReactNode;
  theme?: any; //eslint-disable-line
};

export const Theme = ({ children, theme }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
