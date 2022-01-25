/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './ErrorPage.module.scss'
import { BiArrowToLeft } from 'react-icons/bi'

const ErrorPage: NextPage = () => {
  const router = useRouter()

  return (
    <section className={styles.error}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.title}>
                <div className={styles.back}>
                  <a onClick={() => router.back()}><i><BiArrowToLeft /></i> Voltar</a>
                </div>
                <h4>Houston we have a problem</h4>
                <p>
                  Ooops! procurei por todo canto, mas infelizmente não consegui encontrar essa página
                </p>
                <p>
                  Acha que isso é um erro? Entre em <a>contato</a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src='/404illustration.svg' alt="Ilustração 404" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { ErrorPage }