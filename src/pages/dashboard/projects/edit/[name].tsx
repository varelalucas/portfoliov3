import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../../../components/Dashboard/Base'
import Head from 'next/head'
import { EditProject } from '../../../../components/Dashboard/EditProject'

interface Props {
  projects: any
}

const ProjectsPage: NextPage<Props> = (props) => {
  const router = useRouter()

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
          <EditProject />
        </Base>
      </>
    )
}

export default ProjectsPage