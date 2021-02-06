import React, { AppProps } from 'next/app';
import '../styles/globals.css';

// eslint-disable-next-line arrow-body-style
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
