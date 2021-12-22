import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BsGithub, BsPencil, BsTrash } from 'react-icons/bs'
import styles from './ProjectContent.module.scss'
import Swal from 'sweetalert2'
import axios from 'axios'

interface Props {
  projects: any
}

const ProjectContent: NextPage<Props> = (props) => {
  const router = useRouter()
  const projects = props.projects

  const deleteItem = (project: string) => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EB3D3D',
      cancelButtonColor: '#FFCE52',
      confirmButtonText: 'Sim, delete isso'
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: 'DELETE',
          url: `http://us.01.brandstoredesign.com.br:3333/api/v2/admin/projects/delete/${project}`,
          headers: {
            'Authorization': 'Bearer nTALcf@f21cpa4O!mjtjh6w8rBqdzof&@jtC63G&1S9tK96e&R'
          }
        }),
        Swal.fire(
          'Deletado!',
          `O projeto ${project} foi deletado com sucesso`,
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            router.reload()
          }
        })
      }
    })
  }

  return (
    <div className={styles.projects}>
      <div className={styles.pageheader}>
        <div className={styles.flex}>
          <h4>
            Projetos
          </h4>
          <button onClick={() => router.push('/dashboard/projects/create')}>
            Adicionar projeto
          </button>
        </div>
      </div>
      <div className={styles.pagecontent}>
        <div className={styles.grid}>
          {projects.map((item: { name: string, video_url: any, description: string, url: string, github_url: string  }) => {
            return (
              <div className={styles.item} key={item.name}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <img src={item.video_url} alt="Projeto" />
                    <h4>
                      {item.name}
                    </h4>
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.link}>
                      <a href={item.url}>{item.url}</a>
                    </div>
                    <div className={styles.buttons}>
                      <button onClick={() => router.push(`/dashboard/projects/edit/${item.name}`)}>
                        <i>
                          <BsPencil />
                        </i>
                      </button>
                      <button onClick={() => deleteItem(item.name)}>
                        <i>
                          <BsTrash />
                        </i>
                      </button>
                      <button onClick={() => router.push(item.github_url)}>
                        <i>
                          <BsGithub />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { ProjectContent }