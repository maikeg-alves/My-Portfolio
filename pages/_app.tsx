import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyle } from '../styles/global';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, BtnMode } from '@components';
import { Nextuilight, Nextuidark, Theme, LightMode, DarkMode } from '@styles';

import '../components/carrosel/swiper.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../node_modules/react-ts-typewriter/dist/Typewriter.module.css';

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
