import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './Projects.module.scss'

const Projects: NextPage = (props) => {
  const router = useRouter()

  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.title}>
          <div className={styles.flex}>
            <h4>
              Meus <span>projetos</span>
            </h4>
            <a onClick={() => router.push('/projetos')}>Veja todos os meus projetos</a>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.grid}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Projects }