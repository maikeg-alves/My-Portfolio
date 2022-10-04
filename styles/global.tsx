import { createGlobalStyle } from 'styled-components';

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
  margin: 0;
  padding: 0;
}

.linebreak {
    overflow: hidden;
    display: -webkit-box;
    line-height: 18px;
    max-height: 55px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.sinalize {
    color: #000000;
    font-weight: bold;
    background:  linear-gradient( #4ef3ac 0%,#0aee00 100%);
    padding: 2px;
    border-radius: 6px;
}


@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color:${(props) => props.theme.body.color};
    background: ${(props) => props.theme.body.background};
  } } 

  .container {
    --bs-gutter-x: 0.5rem!important;
  }
`;
