import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../components/Dashboard/Base'
import Head from 'next/head'
import { ProjectContent } from '../../components/Dashboard/ProjectContent'

interface Props {
  projects: any
}

const ProjectsPage: NextPage<Props> = (props) => {
  const router = useRouter()
  const projects = props.projects

  useEffect(() => {
    const session = localStorage.getItem(':session')

    if (session !==	'nTALcf@f21cpa4O!mjtjh6w8rBqdzof&@jtC63G&1S9tK96e&R') {
      router.push('/login')
    } 
  }, [])

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

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch("http://us.01.brandstoredesign.com.br:3333/api/v2/client/projects")
  const data = await res.json()

  return {
    props: {
      projects: data.data
    },
    revalidate: 1
  }

}

export default ProjectsPage