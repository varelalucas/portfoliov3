import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../components/Dashboard/Base'
import Head from 'next/head'
import { ProjectContent } from '../../components/Dashboard/ProjectContent'
import { parseCookies } from 'nookies'
import config from '../../../config.json'

interface Props {
  projects: any
}

const ProjectsPage: NextPage<Props> = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const projects = props.projects

    return (
      <>
        <Head>
          <title>
            Projects | LucasSites
          </title>
        </Head>
        <Base>
          <ProjectContent projects={projects} />
        </Base>
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const res = await fetch("https://lucassites.com.br/api/v3/projects")
  const data = await res.json()

  const { ['portfolio.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  } 
  
  if (token !== config.api.secret_token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      projects: data.data
    }
  }

}

export default ProjectsPage