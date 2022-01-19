import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setCookie } from 'nookies'

const Logout: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setCookie(null, 'portfolio.token', 'sadasdasdasdasdasdasa', {
      maxAge: -1,
      path: '/',
    }),
    router.push('/login')
  }, [router])

  return null
}

export default Logout