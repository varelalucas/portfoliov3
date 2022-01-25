/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './BlogUnderConstruction.module.scss'
import { BiArrowToLeft } from 'react-icons/bi'

const BlogUnderConstruction: NextPage = () => {
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
                  Essa página ainda está em construção, Verifique novamente daqui a algum tempo.
                </p>
                <p>
                  Acha que isso é um erro? Entre em <a>contato</a>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src='/BuildingPage.svg' alt="Ilustração de construção de página" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { BlogUnderConstruction }