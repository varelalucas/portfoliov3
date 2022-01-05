import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Base } from '../../components/Dashboard/Base'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import config from '../../../config.json'
import { EarnsContent } from '../../components/Dashboard/EarnsContent'
import axios from 'axios'

const EarnsPage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()

    return (
      <>
        <Head>
          <title>
            Projects | LucasSites
          </title>
        </Head>
        <Base>
          <EarnsContent earns={props.earns} />
        </Base>
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['portfolio.token']: token } = parseCookies(ctx)
  const res = await fetch(`${config.api.base_url}/earns/earns`, {
    headers: {
      'Authorization': `Bearer ${config.api.secret_token}`
    }
  })
  const data = await res.json()

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
      earns: data
    }
  }

}

export default EarnsPage