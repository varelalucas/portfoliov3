/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { BiCategory, BiHome, BiLogOut, BiMoney, BiUser, BiUserPlus } from 'react-icons/bi'
import styles from './Base.module.scss'

const Base: NextPage = (props) => {
  const router = useRouter()

  return (
    <section className={styles.base}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <img src="/avatar.png"/>
          <div className={styles.infos}>
            <h4>
              Lucas Varela
            </h4>
            <p>
              Administrador
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <ul>
            <li>
              <button onClick={() => router.push('/dashboard')} className={router.pathname == "/dashboard" ? styles.active : styles.button}>
                <i>
                  <BiHome />
                </i>
                <span>
                  Início
                </span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/dashboard/projects')} className={router.pathname.match("/dashboard/projects") ? styles.active : styles.button}>
                <i>
                  <BiCategory />
                </i>
                <span>
                  Projetos
                </span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/dashboard/earns')} className={router.pathname.match("/dashboard/earns") ? styles.active : styles.button}>
                <i>
                  <BiMoney />
                </i>
                <span>
                  Earns
                </span>
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/dashboard/users')} className={router.pathname == "/dashboard/users" ? styles.active : styles.button}>
                <i>
                  <BiUserPlus />
                </i>
                <span>
                  Usuários
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <div className={styles.buttons}>
            <button onClick={() => router.push('/dashboard/profile')}>
              <i>
                <BiUser />
              </i>
            </button>
            <button onClick={() => router.push('/logout')} className={styles.logout}>
              <i>
                <BiLogOut />
              </i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </section>
  )
}

export { Base }