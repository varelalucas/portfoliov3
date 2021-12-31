import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../../../components/Dashboard/Base'
import Head from 'next/head'
import { EditProject } from '../../../../components/Dashboard/EditProject'
import { parseCookies } from 'nookies'

const ProjectsPage: NextPage = () => {
  const router = useRouter()

    return (
      <>
        <Head>
          <title>
            Projects | LucasSites
          </title>
        </Head>
        <Base>
          <EditProject />
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