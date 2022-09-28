import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@nextui-org/react';

export const Nextuidark = createTheme({
  type: 'dark',
});

export const Nextuilight = createTheme({
  type: 'light',
});

export const theme = {
  body: {
    background: '#111111',
    color: '#ffffff',
  },
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export const theme2 = {
  body: {
    background: '#ffffff',
    color: '#000000',
  },
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

type Props = {
  children: ReactNode;
  theme?: typeof theme; //disable this line
};

export const Theme = ({ children, theme }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
