import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import styles from './EarnsContent.module.scss'
import config from '../../../../config.json'
import axios from 'axios'
import Swal from 'sweetalert2'

interface Props {
  earns: any
}

const EarnsContent: NextPage<Props> = (props) => {
  const router = useRouter()
  const earns = props.earns.data
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let i: number = 0;
    earns.map((data: { quantity: number }) => {
      i = i + data.quantity
    })
    setTotal(i)
  }, [])

  const deleteEarn = async (id: any) => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EB3D3D',
      cancelButtonColor: '#FFCE52',
      confirmButtonText: 'Sim, delete isso'
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        axios({
          method: 'DELETE',
          url: `${config.api.base_url}/earns/earns/delete/${id}`,
          headers: {
            'Authorization': `Bearer ${config.api.secret_token}`
          }
        }),
        Swal.fire(
          'Deletado!',
          `O earn foi deletado com sucesso`,
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
    <div className={styles.earns}>
      <div className={styles.pageheader}>
        <div className={styles.flex}>
          <h4>
            Earns
          </h4>
          <button onClick={() => router.push('/dashboard/earns/create')}>
            Adicionar Earn
          </button>
        </div>
        <h4>
          Total: <span>{total}</span>
        </h4>
      </div>
      <div className={styles.pagecontent}>
        <div className={styles.grid}>
          {earns.map((earn: any) => {
            return (
              <div key={earn.type} className={`${styles.item} ${earn.type}`}>
                <h4>
                  {earn.quantity}
                </h4>
                <button onClick={() => deleteEarn(earn.id)}>
                  <i>
                    <BsTrash />
                  </i>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { EarnsContent }