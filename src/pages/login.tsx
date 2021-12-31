import { NextPage, GetServerSideProps } from 'next'
import { LoginP } from '../components/Dashboard/Login'
import Head from 'next/head'
import { parseCookies } from 'nookies'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['portfolio.token']: token } = parseCookies(ctx)

  if (token === '5GFKNSzDNAbBGSqmBe2rJUnfBG76SrALV46ABjAZ9jeAzxUjxy') {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      }
    }
  }

  return {
    props: {
      hello: "World"
    }
  }
}

export default Login