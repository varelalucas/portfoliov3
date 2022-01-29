import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'
import { BsDiscord, BsInstagram } from 'react-icons/bs'
import { Navbar } from '../Navbar'

const Header: NextPage = () => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.flex}>
            <div className={styles.textos}>
              <h1>
                Hel<span>lo</span>
              </h1>
            </div>
            <div className={styles.infos}>
              <h4>Lucas Varela</h4>
              <p>Desenvolvedor web & Ui/Ux Designer</p>
              <button onClick={() => router.push('/#projetos')} aria-label="Conheça meu trabalho">
                Conheça meu trabalho
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gtouch}>
        <div className="container">
          <div className={styles.buttons}>
            <a href="https://discord.gg/SzP26mvfsu" target="_blank" rel="noopener noreferrer">
              <i>
                <BsDiscord />
              </i>
            </a>
            <a href="https://instagram.com/lucassites.dev" target="_blank" rel="noopener noreferrer">
              <i>
                <BsInstagram />
              </i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }