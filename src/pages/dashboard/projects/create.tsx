import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../../components/Dashboard/Base'
import Head from 'next/head'
import { CreateProject } from '../../../components/Dashboard/CreateProject'
import { parseCookies } from 'nookies'

interface Props {
  projects: any
}

const ProjectsPage: NextPage<Props> = (props) => {
  const router = useRouter()

    return (
      <>
        <Head>
          <title>
            Projects | LucasSites
          </title>
        </Head>
        <Base>
          <CreateProject />
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

export default ProjectsPage