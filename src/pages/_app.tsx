import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <base href="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=6.0, minimal-ui"
          user-scalable="no"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="LucasSites (lucassites.com.br)" />
        <meta name="copyright" content="LucasSites" />
        <meta name="keywords" content="Desenvolvedor web, Desenvolvedor de sites, Sites laguna, laguna sites, desenvolvedor de sites laguna, html, css, javascript, desenvolvedor html, ui designer, designer de site, web designer" />
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
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp