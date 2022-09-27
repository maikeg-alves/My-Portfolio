import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Container } from '../components';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import '../components/carrosel/swiper.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

/* const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, //substituir cores escuras do tema
  },
}); */

function App({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app

  return (
    //teste//
    <NextThemesProvider defaultTheme="dark">
      <Container>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Container>
    </NextThemesProvider>
  );
}

export default App;
