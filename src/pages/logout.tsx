import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { setCookie } from 'nookies'

const Logout: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setCookie(null, 'portfolio.token', '5GFKNSzDNAbBGSqmBe2rJUnfBG76SrALV46ABjAZ9jeAzxUjxy', {
      maxAge: -1,
      path: '/',
    }),
    router.push('/login')
  }, [])

  return null
}

export default Logout