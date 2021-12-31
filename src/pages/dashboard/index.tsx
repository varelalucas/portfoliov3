import { NextPage, GetStaticProps, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { Base } from '../../components/Dashboard/Base'
import Head from 'next/head'
import { IndexContent } from '../../components/Dashboard/IndexContent'
import { parseCookies } from 'nookies'
import axios from 'axios'
import config from '../../../config.json'

interface Props {
  earns: any
  projects: any
}

const IndexDash: NextPage<Props> = (props) => {
  const router = useRouter()
  const earns = props.earns
  const projects = props.projects

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(`http://localhost:3333/api/v3/earns/earns`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer 5GFKNSzDNAbBGSqmBe2rJUnfBG76SrALV46ABjAZ9jeAzxUjxy`
    }
  })
  const data = await res.json()
  const resp = await axios.get("/projects")
  const datap = await resp.data

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
    props: {
      earns: data.data,
      projects: datap.data
    }
  }
}

export default IndexDash