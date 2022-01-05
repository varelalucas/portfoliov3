import { NextPage, GetServerSideProps } from 'next'
import styles from './Login.module.scss'
import { BiFingerprint, BiUser } from 'react-icons/bi'
import { useState, useEffect, useContext } from 'react'
import toastr from 'toastr'
import Router, { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { setCookie, parseCookies } from 'nookies'

const LoginP: NextPage = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm()

  async function handleSignIn(data: any) {
    const body = {
      user: data.username,
      password: data.password
    }

    const request = await axios.post('/users/login', body).then((result => {
      if (result.data.success === true) {
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
        setCookie(undefined, 'portfolio.token', result.data.token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })
        setTimeout(() => {
          router.push('/dashboard')
        }, 1000)
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
        setTimeout(() => toastr.error(`${result.data.message}`), 0)
      }
    }))

    

    return request
  }

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
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className={styles.input}>
                  <i>
                    <BiUser />
                  </i>
                  <input {...register('username')} name="username" type="text" placeholder="Seu usuário" required />
                </div>
                <div className={styles.input}>
                  <i>
                    <BiFingerprint />
                  </i>
                  <input {...register('password')} name="password" type="password" placeholder="Sua senha" required />
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