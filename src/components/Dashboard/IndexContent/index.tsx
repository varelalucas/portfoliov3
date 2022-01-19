import { NextPage, GetStaticProps, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import styles from './IndexContent.module.scss'

interface Props {
  earns: any
  projects: any
}

const IndexContent: NextPage<Props> = (props) => {
  const earns = props.earns
  const projects = props.projects
  const [total, setTotal] = useState(0)
  const router = useRouter()

  useEffect(() => {
    let i: number = 0;
    earns.map((data: { quantity: number }) => {
      i = i + data.quantity
    })
    setTotal(i)
  }, [])

  return (
    <div className={styles.grid}>
      <div className={styles.item}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.flex}>
              <h4>
                Earns
              </h4>
              <button onClick={() => router.push('/dashboard/earns')}>
                <i>
                  <BiArrowToRight />
                </i>
              </button>
            </div>
            <h3>
              Total: <span>{total}</span>
            </h3>
          </div>
          <div className={styles.content}>
            <table>
              <thead>
                <th>
                  ID
                </th>
                <th>
                  Valor
                </th>
              </thead>
              <tbody>
                {earns.slice(0, 8).map((item: { type: string, id: number, quantity: number }) => {
                  if (item.type === 'positive') {
                    return (
                      <tr className={styles.positive}>
                        <td>
                          {item.id}
                        </td>
                        <td>
                          <span>
                            {item.quantity}
                          </span>
                        </td>
                      </tr>
                    )
                  } else {
                    return (
                      <tr className={styles.negative}>
                        <td>
                          {item.id}
                        </td>
                        <td>
                          <span>
                            {item.quantity}
                          </span>
                        </td>
                      </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.flex}>
              <h4>
                Projects
              </h4>
              <button onClick={() => router.push('/dashboard/projects')}>
                <i>
                  <BiArrowToRight />
                </i>
              </button>
            </div>
            <h3>
              Projetos recentes
            </h3>
          </div>
          <div className={styles.content}>
            <div className={styles.projects}>
              {projects.slice(0, 4).map((item: { name: string, img_url: any, description: string }) => {
                return (
                  <button className={styles.project} key={item.name} onClick={() => router.push(`/dashboard/projects/edit/${item.name}`)}>
                    <div className={styles.flex}>
                      <img src={item.img_url} alt="Projeto" />
                      <div className={styles.infos}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { IndexContent }