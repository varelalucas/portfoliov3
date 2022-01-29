/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BsDiscord, BsInstagram } from 'react-icons/bs'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  const router = useRouter()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="Logo" />
            <span>Todos os direitos reservados © LucasSites 2022</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.discord} aria-label="Instagram" onClick={() => router.push('https://discord.gg/SzP26mvfsu')}>
              <i>
                <BsDiscord />
              </i>
            </button>
            <button className={styles.instagram} aria-label="Instagram" onClick={() => router.push('https://instagram.com/lucassites.dev')}>
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