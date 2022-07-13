import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '../styles/global.scss';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Résumé: Junhoyeo</title>
        <meta
          name="description"
          content="Frontend developer Junhoyeo's Résumé"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
