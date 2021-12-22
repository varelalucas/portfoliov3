import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'
import styles from './CreateProject.module.scss'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const CreateProject: NextPage = () => {
  const router = useRouter()
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [url, setUrl] = useState('')
  const [ghUrl, setGhUrl] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const sendForm = () => {
    const data = {
      "name": name,
      "video_url": imgUrl,
      "description": description,
      "time": time,
      "github_url": ghUrl,
      "url": url
    }

    axios({
      method: 'POST',
      url: `http://us.01.brandstoredesign.com.br:3333/api/v2/admin/projects/create`,
      headers: {
        'Authorization': 'Bearer nTALcf@f21cpa4O!mjtjh6w8rBqdzof&@jtC63G&1S9tK96e&R'
      },
      data: data
    }),
    Swal.fire(
      'Sucesso!',
      `O projeto ${name} foi criado com sucesso`,
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard/projects')
      }
    })
  }

  return (
    <div className={styles.projects}>
      <div className={styles.pageheader}>
        <div className={styles.flex}>
          <h4>
            Criar projeto
          </h4>
          <button onClick={() => router.push('/dashboard/projects')}>
            <i>
              <BsArrowLeft />
            </i>
          </button>
        </div>
      </div>
      <div className={styles.pagecontent}>
        <div className={styles.card}>
          <form onSubmit={(e) => (
            e.preventDefault(),
            sendForm()
          )}>
            <div className={styles.formrow}>
              <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} id="name" placeholder="Insira o nome do projeto" required />
              <input type="number" name="time" onChange={(e)=>{setTime(e.target.value)}} id="time" placeholder="Insira o tempo gasto no projeto" required />
            </div>
            <div className={styles.formrow}>
              <input type="text" name="descr" onChange={(e)=>{setDescription(e.target.value)}} id="name" placeholder="Insira a descrição do projeto" required />
            </div>
            <div className={styles.formrow}>
              <input type="text" name="url" onChange={(e)=>{setUrl(e.target.value)}} id="name" placeholder="Insira a url" required/>
              <input type="text" name="ghurl" onChange={(e)=>{setGhUrl(e.target.value)}} id="name" placeholder="Insira a url do github" required/>
            </div>
            <div className={styles.formrow}>
              <textarea name="name" onChange={(e)=>{setImgUrl(e.target.value)}} id="name" placeholder="Insira o json das imagens/videos" required/> 
            </div>
            <button type='submit'>
              Enviar formulário
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { CreateProject }