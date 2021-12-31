import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'
import styles from './EditProject.module.scss'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const EditProject: NextPage = () => {
  const router = useRouter()
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [url, setUrl] = useState('')
  const [ghUrl, setGhUrl] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [id, setId] = useState('')

  const sendForm = () => {
    let data = {
      "id": id,
      "new_name": name,
      "new_description": description,
      "new_image_url": imgUrl,
      "new_github_url": ghUrl,
      "new_url": url,
      "new_time": time
    }

    console.log(data)

    axios({
      method: 'PUT',
      url: `https://lucassites.com.br/api/v3/projects/edit`,
      headers: {
        'Authorization': 'Bearer 5GFKNSzDNAbBGSqmBe2rJUnfBG76SrALV46ABjAZ9jeAzxUjxy'
      },
      data: data
    }),
    Swal.fire(
      'Sucesso!',
      `O projeto ${router.query.name} foi editado com sucesso`,
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard/projects')
      }
    })
  }

  useEffect(() => {
    const loadContent = async (project: any): Promise<void> => {
      const res = await axios({
        method: 'GET',
        url: `https://lucassites.com.br/api/v3/projects/${project}`,
      })
      const data = res.data

      return (
        setName(data.data[0].name),
        setDescription(data.data[0].description),
        setTime(data.data[0].time),
        setUrl(data.data[0].url),
        setGhUrl(data.data[0].github_url),
        setImgUrl(data.data[0].img_url),
        setId(data.data[0].id)
      )
    }
    loadContent(router.query.name)
  }, [router.query.name])

  return (
    <div className={styles.projects}>
      <div className={styles.pageheader}>
        <div className={styles.flex}>
          <h4>
            Editando projeto: {router.query.name}
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
              <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} id="name" placeholder="Insira o nome do projeto" required />
              <input type="number" name="time" value={time} onChange={(e)=>{setTime(e.target.value)}} id="time" placeholder="Insira o tempo gasto no projeto" required />
            </div>
            <div className={styles.formrow}>
              <input type="text" name="descr" value={description} onChange={(e)=>{setDescription(e.target.value)}} id="name" placeholder="Insira a descrição do projeto" required />
            </div>
            <div className={styles.formrow}>
              <input type="text" name="url" value={url} onChange={(e)=>{setUrl(e.target.value)}} id="name" placeholder="Insira a url" required/>
              <input type="text" name="ghurl" value={ghUrl} onChange={(e)=>{setGhUrl(e.target.value)}} id="name" placeholder="Insira a url do github" required/>
            </div>
            <div className={styles.formrow}>
              <input type="text" name="name" value={imgUrl} onChange={(e)=>{setImgUrl(e.target.value)}} id="name" placeholder="Insira a url da imagem" required/> 
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

export { EditProject }