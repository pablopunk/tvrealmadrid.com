import React from 'react'
import FadeIn from 'react-fade-in'
import Head from 'next/head'
import getMatches from 'livesoccertv-parser'
import Match from '../components/match'
import Topbar from '../components/topbar'

export default class Index extends React.Component {
  static async getInitialProps () {
    let matches = await getMatches('spain', 'real-madrid')
    matches = matches.filter(m => !m.played)
    return { matches }
  }

  render () {
    return (
      <div>
        <Head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta http-equiv='X-UA-Compatible' content='ie=edge' />
          <link rel='stylesheet' href='/static/index.css' />
          <title>TV Real Madrid</title>
        </Head>
        <Topbar />
        <main>
          <div className='flex-container'>
            <FadeIn>
              {
                this.props.matches.map(m => <Match match={m} />)
              }
            </FadeIn>
          </div>
        </main>
      </div>
    )
  }
}

