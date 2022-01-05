import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Base } from '../../../components/Dashboard/Base'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { CreateEarn } from '../../../components/Dashboard/CreateEarn'

interface Props {
  projects: any
}

const EarnsPage: NextPage<Props> = (props) => {
  const router = useRouter()

    return (
      <>
        <Head>
          <title>
            Projects | LucasSites
          </title>
        </Head>
        <Base>
          <CreateEarn />
        </Base>
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['portfolio.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }

}

export default EarnsPage