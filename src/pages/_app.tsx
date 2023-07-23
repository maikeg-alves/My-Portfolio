import * as React from 'react';
import { Analytics } from '@vercel/analytics/react';

import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { GlobalStyle } from '@styles';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, BtnMode } from 'src/components';
import { Nextuilight, Nextuidark, Theme, LightMode, DarkMode } from '@styles';

import '../components/carrosel/swiper.min.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = React.useState(false); // usa um hook para definir o thema

  React.useEffect(() => {
    // verifica se tem algum valor no stroger
    if (typeof window !== 'undefined') {
      const mode = localStorage.getItem('mode');
      setThemeMode(mode === 'light' ? true : false); // se tiver
    }
  }, [themeMode]);

  return (
    <>
      {/* se themode for verdadeiro  ele seta o valor light se não dark */}
      <Theme theme={themeMode ? LightMode : DarkMode}>
        <Head>
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <GlobalStyle />
        {/* botão do thema */}
        <BtnMode setState={(e) => setThemeMode(e)} />
        <Container>
          <NextUIProvider theme={themeMode ? Nextuidark : Nextuilight}>
            <Analytics /> {/* ⚠️ analitics do nextjs ⚠️*/}
            <Component {...pageProps} />
          </NextUIProvider>
        </Container>
      </Theme>
    </>
  );
}

export default App;
