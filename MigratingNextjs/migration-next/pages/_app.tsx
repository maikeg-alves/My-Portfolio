import * as React from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Container from '../components/container/container.component';

function App({ Component, pageProps }: AppProps) {
  // 2. Use at the root of your app
  return (
    <Container>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Container>
  );
}

export default App;
