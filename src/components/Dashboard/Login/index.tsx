import { NextPage } from 'next'
import styles from './Login.module.scss'
import { BiFingerprint, BiUser } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import toastr from 'toastr'
import { useRouter } from 'next/router'

const LoginP: NextPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logado, setLogado] = useState(false)
  const router = useRouter()

  function logar(e: { preventDefault: () => void }) {
    e.preventDefault()

    if (username === "LucasSites" && password === "Lucas@app2019") {
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: "toast-top-left",
        preventDuplicates: true,
        showDuration: 300,
        hideDuration: 1000,
        timeOut: 2000,
        extendedTimeOut: 1000,
        showMethod: 'slideDown',
        hideMethod: 'slideUp',
        toastClass: "toastr-ip"
      };
      toastr.clear();
      setTimeout(() => toastr.success("Logado com sucesso, Redirecionando"), 0);
      localStorage.setItem(':session','nTALcf@f21cpa4O!mjtjh6w8rBqdzof&@jtC63G&1S9tK96e&R')
        setLogado(true)
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    } else {
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: "toast-top-left",
        preventDuplicates: true,
        showDuration: 300,
        hideDuration: 1000,
        timeOut: 2000,
        extendedTimeOut: 1000,
        showMethod: 'slideDown',
        hideMethod: 'slideUp',
        toastClass: "toastr-ip"
      };
      toastr.clear();
      setTimeout(() => toastr.error("Usuário/Senha incorretos, por favor, tente novamente"), 0);
    }
  }

  useEffect(() => {
    const session = localStorage.getItem(':session')

    if (session === 'nTALcf@f21cpa4O!mjtjh6w8rBqdzof&@jtC63G&1S9tK96e&R') {
      router.push('/dashboard')
    }
  }, [])

  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.form}>
            <h4>
              Sign <span>in</span>
            </h4>
            <div className={styles.card}>
              <h5>
                Insira as informações abaixo
              </h5>
              <form onSubmit={logar}>
                <div className={styles.input}>
                  <i>
                    <BiUser />
                  </i>
                  <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Seu usuário" required />
                </div>
                <div className={styles.input}>
                  <i>
                    <BiFingerprint />
                  </i>
                  <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Sua senha" required />
                </div>
                <button type="submit">
                  Entrar
                </button>
              </form>
            </div>
          </div>
          <div className={styles.illustration}>
            <img src="/iconlogin.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { LoginP }