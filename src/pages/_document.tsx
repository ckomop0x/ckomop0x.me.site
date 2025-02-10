import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class WebtimeDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
