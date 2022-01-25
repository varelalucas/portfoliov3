import { NextPage } from 'next'
import styles from './PreBriefingContent.module.scss'

const PreBriefingContent: NextPage = () => {
  const form = [
    {
      title: "Seção 1",
      key: "section1",
      description: "Perguntas sobre sua empresa",
      questions: [
        {
          title: "Qual é o nome da sua empresa?",
          key: "name",
          type: "text",
          placeholder: "Sua resposta"
        },
        {
          title: "Qual é o nicho da sua empresa?",
          key: "nicho",
          type: "text",
          placeholder: "Sua resposta"
        },
        {
          title: "Qual é o porte da sua empresa?",
          key: "size",
          type: "radio",
          options: [
            {
              key: "one",
              type: "mei",
              title: "Profissional Individual / MEI"
            },
            {
              key: "two",
              type: "mei",
              title: "Micro (2 - 10 Funcionários)"
            },
            {
              key: "three",
              type: "mei",
              title: "Pequena (10 - 50 Funcionários)"
            },
            {
              key: "four",
              type: "mei",
              title: "Média (50 - 100 Funcionários)"
            },
            {
              key: "five",
              type: "mei",
              title: "Grande (Mais de 100 funcionários)"
            },
            {
              key: "six",
              type: "mei",
              title: "Ainda não temos registro"
            }
          ]
        },
        {
          title: "Qual será o tipo do website?",
          key: "type",
          type: "radio",
          options: [
            {
              key: "one",
              type: "wtype",
              title: "Landing Page"
            },
            {
              key: "two",
              type: "wtype",
              title: "Institucional"
            },
            {
              key: "three",
              type: "wtype",
              title: "Apresentação de um produto"
            },
            {
              key: "four",
              type: "wtype",
              title: "Site one-page"
            },
            {
              key: "five",
              type: "wtype",
              title: "Blog virtual"
            },
            {
              key: "six",
              type: "wtype",
              title: "Site dinâmico"
            }
          ]
        },
        {
          title: "Preciso que meu projeto seja INICIADO em:",
          key: "timestart",
          type: "radio",
          options: [
            {
              key: "one",
              type: "otimestart",
              title: "No máximo em até 15 dias"
            },
            {
              key: "two",
              type: "otimestart",
              title: "No máximo até o próximo mês"
            },
            {
              key: "three",
              type: "otimestart",
              title: "Posso esperar mais de um mês"
            }
          ]
        }
      ]
    }
  ]

  return (
    <section className={styles.briefing}>
      <div className={styles.head}>
        <div className="container">
          <div className={styles.content}>
            <h4>
              Pré Briefing
            </h4>
            <p>
              Responda as questões abaixo para conseguirmos definir o orçamento base de seu projeto!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className="container">
          <form>
            {form.map(section => {
              return (
                <div className={styles.section} key={section.key}>
                  <div className={styles.title}>
                    <h4>{section.title}</h4>
                    <p>{section.description}</p>
                  </div>
                  <div className={styles.content}>
                    {section.questions.map(question => {
                      if (question.type === "text") {
                        return (
                          <div className={styles.question} key={question.key}>
                            <h4>
                              {question.title}
                              <span>
                                *
                              </span>
                            </h4>
                            <input type="text" placeholder={question.placeholder} required/>
                          </div>
                        )
                      }

                      if (question.type === "radio") {
                        return (
                          <div className={styles.question}>
                            <h4>
                              {question.title}
                              <span>
                                *
                              </span>
                            </h4>
                            <div className={styles.options}>
                              {question.options?.map(option => {
                                return (
                                  <div className={styles.option} key={option.key}>
                                    <input type="radio" name={option.type} required/>
                                    <label htmlFor="type">
                                      <p>{option.title}</p>
                                    </label>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            })}
          </form>
        </div>
      </div>
    </section>
  )
}

export { PreBriefingContent }