import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BsGithub, BsPencil, BsTrash } from 'react-icons/bs'
import styles from './ProjectContent.module.scss'
import Swal from 'sweetalert2'
import axios from 'axios'
import config from '../../../../config.json'

interface Props {
  projects: any
}

const ProjectContent: NextPage<Props> = (props) => {
  const router = useRouter()
  const projects = props.projects

  const deleteItem = (id: string, name: string) => {
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
          url: `https://lucassites.com.br/api/v3/projects/delete/${id}`,
          headers: {
            'Authorization': `Bearer ${config.api.secret_token}`
          }
        }),
        Swal.fire(
          'Deletado!',
          `O projeto ${name} foi deletado com sucesso`,
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
          {projects.map((item: { id: string, name: string, img_url: any, description: string, url: string, github_url: string  }) => {
            return (
              <div className={styles.item} key={item.name}>
                <div className={styles.card}>
                  <div className={styles.header}>
                    <img src={item.img_url} alt="Projeto" />
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
                      <button onClick={() => deleteItem(item.id, item.name)}>
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