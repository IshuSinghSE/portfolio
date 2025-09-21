import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <title>Ishu&apos;s Portfolio</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <meta name="google-adsense-account" content="ca-pub-6593809337731836" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6593809337731836"
     crossorigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}
