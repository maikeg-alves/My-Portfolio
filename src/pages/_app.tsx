import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyle } from '@styles';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, BtnMode } from 'src/components';
import { Nextuilight, Nextuidark, Theme, LightMode, DarkMode } from '@styles';

import { Analytics } from '@vercel/analytics/react';

import '../components/carrosel/swiper.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const mode = localStorage.getItem('mode');
      setThemeMode(mode === 'light' ? true : false);
    }
  }, [themeMode]);

  return (
    <>
      <Theme theme={themeMode ? LightMode : DarkMode}>
        <Head>
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <GlobalStyle />
        <BtnMode setState={(e) => setThemeMode(e)} />
        <Container>
          <NextUIProvider theme={themeMode ? Nextuidark : Nextuilight}>
            <Component {...pageProps} />
            <Analytics />
          </NextUIProvider>
        </Container>
      </Theme>
    </>
  );
}

export default App;
