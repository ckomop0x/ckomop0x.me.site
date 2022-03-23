import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class WebtimeDocument extends Document {
  // static async getInitialProps(
  //   context: DocumentContext,
  // ): Promise<DocumentInitialProps> {
  //   const originalRenderPage = context.renderPage;
  //
  //   try {
  //     context.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
  //       });
  //
  //     const initialProps = await Document.getInitialProps(context);
  //
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Neucha&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(57227728, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true });
            `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/57227728"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
        </body>
      </Html>
    );
  }
}
