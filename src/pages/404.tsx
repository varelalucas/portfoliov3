import { NextPage } from 'next'
import Head from 'next/head'
import { ErrorPage } from '../components/404Content'

const Login: NextPage = () => {
  return (
    <section>
      <Head>
        <title>
          Página não encontrada | LucasSites
        </title>
      </Head>
      <main>
        <ErrorPage />
      </main>
    </section>
  )
}

export default Login