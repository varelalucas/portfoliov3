import { NextPage } from 'next'
import { BsDiscord, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import styles from './GetInTouch.module.scss'

const GetInTouch: NextPage = () => {
  return (
    <section className={styles.getintouch}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>
            O que um <span>website</span> proporciona a sua empresa?
          </h4>
          <div className={styles.infos}>
            <p>
              “70% dos negócios entre empresas começa por uma simples pesquisa na internet.”
            </p>
            <p>
              De acordo com as estimativas, 70% das micros e pequenas empresas não possuem um site, logo, se o seu concorrente não tem um site, essa é a sua oportunidade de ter um diferencial frente a ele. 
            </p>
            <p>
              Sem falar que pode levar bastante tempo para o seu concorrente se dar conta de que precisa de um site também! Até esse dia, você vai poder explorar todo o potencial deste canal sem muito esforço. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { GetInTouch }