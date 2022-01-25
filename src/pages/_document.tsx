import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="LucasSites (lucassites.com.br)" />
          <meta name="copyright" content="LucasSites" />
          <meta name="designer" content="LucasSites (lucassites.com.br)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta property="og:title" content="LucasSites" />
          <meta
            property="og:description"
            content="Desenvolvedor Front-End e UX/UI Design, sempre tentando trazer inovações para meus projetos, está esperando o que? faça logo seu orçamento!"
          />
          <meta property="og:url" content="https://lucassites.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/logo.png" />
          <meta property="twitter:image" content="/logo.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="Desenvolvedor Front-End e UX/UI Design, sempre tentando trazer inovações para meus projetos, está esperando o que? faça logo seu orçamento!"
          />
          <meta
            name="description"
            content="Desenvolvedor Front-End e UX/UI Design, sempre tentando trazer inovações para meus projetos, está esperando o que? faça logo seu orçamento!"
          />
          <link rel="shortcut icon" href="/logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument