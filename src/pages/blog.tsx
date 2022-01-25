import { NextPage } from 'next'
import Head from 'next/head'
import { BlogUnderConstruction } from '../components/BlogUnderConstruction'

const Login: NextPage = () => {
  return (
    <section>
      <Head>
        <title>
          Blog | LucasSites
        </title>
      </Head>
      <main>
        <BlogUnderConstruction />
      </main>
    </section>
  )
}

export default Login