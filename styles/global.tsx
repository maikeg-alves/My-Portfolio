import { createGlobalStyle } from 'styled-components';
import { ITheme } from '@interfaces';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: white;
  background: #1e1e1e;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}



@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color:${(props: ITheme) => props.theme.body.color};
    background: ${(props: ITheme) => props.theme.body.background};
  } } 
`;
