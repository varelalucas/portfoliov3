import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BsArrowLeft } from 'react-icons/bs'
import styles from './CreateEarn.module.scss'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import config from '../../../../config.json'

const CreateEarn: NextPage = () => {
  const router = useRouter()
  const [quantity, setQuantity] = useState('')

  const sendForm = () => {
    const data = {
      quantity: parseInt(quantity)
    }

    axios({
      method: 'POST',
      url: `${config.api.base_url}/earns/earns/add`,
      headers: {
        'Authorization': 'Bearer 5GFKNSzDNAbBGSqmBe2rJUnfBG76SrALV46ABjAZ9jeAzxUjxy'
      },
      data: data
    }),
    Swal.fire(
      'Sucesso!',
      `O Earn foi criado com sucesso`,
      'success'
    ).then((result) => {
      if (result.isConfirmed) {
        router.push('/dashboard/earns')
      }
    })
  }

  return (
    <div className={styles.earns}>
      <div className={styles.pageheader}>
        <div className={styles.flex}>
          <h4>
            Criar projeto
          </h4>
          <button onClick={() => router.push('/dashboard/earns')}>
            <i>
              <BsArrowLeft />
            </i>
          </button>
        </div>
      </div>
      <div className={styles.pagecontent}>
        <div className={styles.card}>
          <form onSubmit={(e) => {
                  e.preventDefault();
                }}
          >
            <div className={styles.formrow}>
              <input type="number" onChange={(e) => setQuantity(e.target.value)} name="quantity" id="quantity" placeholder="Insira a quantidade" required />
            </div>
            <button type='submit' onClick={() => sendForm()}>
              Enviar formulário
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { CreateEarn }