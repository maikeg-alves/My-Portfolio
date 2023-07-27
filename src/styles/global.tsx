import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color:${(props) => props.theme.body.color};
    background: ${(props) => props.theme.body.background};
    width: 100%;
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
ul {
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
  font-weight: bold;
    background: repeating-linear-gradient(137deg, #00ee87, #e801ffc2 100px);
    border-radius: 6px;
    padding: 0px 8px 4px 8px;
    color: white;
}

button {
  z-index: 0;
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
