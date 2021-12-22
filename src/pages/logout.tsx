import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Logout: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem(':session')
    router.push('/login')
  }, [])

  return null
}

export default Logout