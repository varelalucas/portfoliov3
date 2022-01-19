import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import axios from 'axios'
import config from '../../config.json'
import Head from 'next/head'

axios.defaults.baseURL = config.api.base_url;
axios.defaults.headers.common['Authorization'] = `Bearer ${config.api.secret_token}`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=6.0, minimal-ui"
          user-scalable="no"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp