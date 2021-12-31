import { NextPage } from 'next'
import styles from './Headline.module.scss'

const Headline: NextPage = () => {
  return (
    <section className={styles.headline}>
      <div className="container">
        <div className={styles.infos}>
          <h4>
            Quais são os passos de produção de um <span>website</span>?
          </h4>
          <p>
            Um website não é apenas uma telinha bonita, por trás de um website existe muita pesquisa e desenvolvimento por cima do tempo, abaixo estão alguns dos passos para a produção de um website
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  01
                </h1>
                <h4>
                  Pesquisa
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa é feita uma pesquisa sobre qual é o tipo do site que sua empresa precisa e como o projeto vai ser estruturado.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  02
                </h1>
                <h4>
                  Imaginação
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa é iniciado um processo criativo onde é definido os estilos-base do projeto, e principalmente, o conceito do site.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  03
                </h1>
                <h4>
                  Style Guide
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa é feito uma pesquisa dentro da marca do cliente, e é definido os parâmetros de estilização da marca do cliente.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  04
                </h1>
                <h4>
                  Sketch
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa é iniciado um sketch(esboço) do site, nessa etapa serve apenas para definir quais são os componentes da interface.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  05
                </h1>
                <h4>
                  Wireframe
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Após o sketch finalizado essa interface criada no papel é passado para o figma, e já estruturado com as dimensões reais.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  06
                </h1>
                <h4>
                  Ui Design
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa iremos pegar o wireframe e aplicar as cores/estilos que foram definidas na etapa de style guide.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  07
                </h1>
                <h4>
                  Código
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa iremos colocar a mão na massa e codificar nossa aplicação com o propósito que fique idêntico ao design.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h1>
                  08
                </h1>
                <h4>
                  Finalização
                </h4>
              </div>
              <div className={styles.content}>
                <p>
                  Nessa etapa iremos aplicar as animações e otimizar o website, nessa etapa também acontece a demonstração ao vivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Headline }