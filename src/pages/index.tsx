import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Footer } from '../components/Footer'
import { GetInTouch } from '../components/GetInTouch'
import { Header } from '../components/Header'
import { Headline } from '../components/Headline'
import { Projects } from '../components/Projects'
import styles from '../components/Projects/Projects.module.scss'

interface Props {
  projects: any
}

const Home: NextPage<Props> = (props) => {
  const projects = props.projects
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Página Inicial | LucasSites</title>
      </Head>
      <Header />
      <Headline />
      <Projects>
        {projects.slice(0, 6).map((item: { name: string, description: string, video_url: any, url: string}) => {
          if (projects.lenght === 0) {
            return (
              <h4>
                Nenhum projeto foi postado ainda
              </h4>
            )
          } else {
            return (
              <div className={styles.item} key={item.name}>
                <button className={styles.card} onClick={() => router.push(item.url)}>
                  <img src={item.video_url} alt="Projeto" />
                  <div className={styles.infos}>
                    <h4>
                      {item.name}
                    </h4>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </button>
              </div>
            )
          }
        })}
      </Projects>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch("http://us.01.brandstoredesign.com.br:3333/api/v2/client/projects")
  const data = await res.json()

  return {
    props: {
      projects: data.data
    },
    revalidate: 1
  }

}

export default Home
