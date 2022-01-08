/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { BsDiscord, BsInstagram } from 'react-icons/bs'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="Logo" />
            <span>Todos os direitos reservados © LucasSites 2022</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.discord}>
              <i>
                <BsDiscord />
              </i>
            </button>
            <button className={styles.instagram}>
              <i>
                <BsInstagram />
              </i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }