import { NextPage } from 'next'
import { BsDiscord, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import styles from './GetInTouch.module.scss'

const GetInTouch: NextPage = () => {
  return (
    <section className={styles.getintouch}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#090A0C" fillOpacity="1" d="M0,0L120,42.7C240,85,480,171,720,197.3C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div className={styles.content}>
        <h4>
          Você pode me encontrar no <span>Instagram</span>, <span>Discord</span> e <span>Whatsapp</span>!
        </h4>
        <div className={styles.buttons}>
          <button>
            <i>
              <BsWhatsapp />
            </i>
          </button>
          <button>
            <i>
              <BsDiscord />
            </i>
          </button>
          <button>
            <i>
              <BsInstagram />
            </i>
          </button>
        </div>
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