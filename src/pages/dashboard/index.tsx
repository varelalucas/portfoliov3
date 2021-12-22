import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../components/Dashboard/Base'
import Head from 'next/head'
import { IndexContent } from '../../components/Dashboard/IndexContent'

interface Props {
  earns: any
  projects: any
}

const IndexDash: NextPage<Props> = (props) => {
  const router = useRouter()
  const earns = props.earns
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
            Dashboard | LucasSites
          </title>
        </Head>
        <Base>
          <IndexContent earns={earns} projects={projects} />
        </Base>
      </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch('http://us.01.brandstoredesign.com.br:3333/api/v2/admin/earns', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer nTALcf@f21cpa4O!mjtjh6w8rBqdzof&@jtC63G&1S9tK96e&R'
    }
  })
  const data = await res.json()
  const resp = await fetch("http://us.01.brandstoredesign.com.br:3333/api/v2/client/projects/")
  const datap = await resp.json()

  return {
    props: {
      earns: data.data,
      projects: datap.data
    },
    revalidate: 1
  }

}

export default IndexDash