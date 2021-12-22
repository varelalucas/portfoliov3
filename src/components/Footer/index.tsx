import { NextPage } from 'next'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flex}>
          <h2>
            Todos os direitos reservados © LucasSites 2021.
          </h2>
        </div>
      </div>
    </footer>
  )
}

export { Footer }