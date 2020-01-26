import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript, DocumentContext } from 'next/document';

type DocumentProps = {
  styleTags: Array<React.ReactElement<{}>>;
};

export default class CustomDocument extends Document<DocumentProps> {

  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>
          {styleTags}
          <script
            src="https://kit.fontawesome.com/a42f454688.js"
          />
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
};
