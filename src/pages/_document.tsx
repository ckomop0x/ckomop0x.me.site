import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class WebtimeDocument extends Document {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    const { styles } = this.props;

    return (
      <Html>
        <Head>{styles}</Head>
        <body>
          <Main />
          <NextScript />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
          {/* <script src="/js/vendor/jquery-3.3.1.min.js" />*/}
          {/* <script src="/js/vendor/jquery-migrate-3.0.0.min.js" />*/}
          {/* <script src="/js/vendor/popper.min.js" />*/}
          {/* <script src="/js/vendor/bootstrap.min.js" />*/}
          {/* <script src="/js/vendor/jquery.counterup.min.js" />*/}
          {/* <script src="/js/vendor/lightbox.js" />*/}
          {/* <script src="/js/vendor/lity.min.js" />*/}
          {/* <script src="/js/vendor/scrollIt.min.js" />*/}
          {/* <script src="/js/vendor/owl.carousel.min.js" />*/}
          {/* <script src="/js/vendor/animated-headline.js" />*/}
          {/* <script src="/js/vendor/validator.js" />*/}
          {/* <script src="/js/vendor/isotope.pkgd.min.js" />*/}
          {/* <script src="/js/vendor/wow.min.js" />*/}
          {/* <script src="/js/main.js" />*/}
        </body>
      </Html>
    );
  }
}
