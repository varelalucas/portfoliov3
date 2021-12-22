import { NextPage } from 'next'
import { LoginP } from '../components/Dashboard/Login'
import Head from 'next/head'

const Login: NextPage = () => {
  return (
    <section>
      <Head>
        <title>
          Login | LucasSites
        </title>
      </Head>
      <LoginP />
    </section>
  )
}

export default Login