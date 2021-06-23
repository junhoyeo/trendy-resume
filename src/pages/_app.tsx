import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '../styles/global.scss';

type AppProps = {
  Component: React.ReactNode,
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Résumé: Junhoyeo</title>
          <meta name="description" content="Frontend developer Junhoyeo's Résumé" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
