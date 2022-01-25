import { NextPage } from 'next'
import Head from 'next/head'
import { PreBriefingContent } from '../../components/Briefings/PreBriefingContent'

const PreBriefing: NextPage = () => {
    return (
      <>
        <Head>
          <title>
            Pré-Briefing | LucasSites
          </title>
        </Head>
        <main>
          <PreBriefingContent />
        </main>
      </>
    )
}


export default PreBriefing