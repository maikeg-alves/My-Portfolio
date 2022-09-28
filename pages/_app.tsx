import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/dist/shared/lib/router/router';

import { GlobalStyle } from '../styles/global';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, BtnMode } from '@components';
import { Nextuilight, Nextuidark, Theme, theme, theme2 } from '@styles';

import '../components/carrosel/swiper.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = React.useState(false);

  return (
    <>
      <Theme theme={themeMode ? theme2 : theme}>
        <GlobalStyle />
        <BtnMode setState={(e) => setThemeMode(e)} />
        <Container>
          <NextUIProvider theme={themeMode ? Nextuidark : Nextuilight}>
            <Component {...pageProps} />
          </NextUIProvider>
        </Container>
      </Theme>
    </>
  );
}

export default App;
