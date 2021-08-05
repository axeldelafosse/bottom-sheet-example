import '../styles/global.scss';

import 'raf/polyfill';
// @ts-ignore
global.setImmediate = requestAnimationFrame;
import 'setimmediate';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bottom Sheet Example</title>
        <meta key="title" name="title" content="Bottom Sheet Example" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <SafeAreaProvider>
        <Component {...pageProps} />
      </SafeAreaProvider>
    </>
  );
}
