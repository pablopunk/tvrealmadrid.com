import React from 'react'
import FadeIn from 'react-fade-in'
import getMatches from 'football-matches'
import acceptLang from 'accept-language'
import Layout from '../components/layout'
import Match from '../components/match'
import translate from '../util/translate'

const apiKey = process.env.API_KEY

const getLangFromReq = req => {
  // @TODO: Add more languages (see moment-js docs)
  acceptLang.languages(['en', 'es', 'gl'])
  return acceptLang.get(req.headers['accept-language'])
}

const translateMatches = (ms, lang) =>
  ms.map(m => Object.assign(m, { date: translate.date(m.date, lang) }))

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: [] }
  }

  static async getInitialProps ({ req }) {
    let matches = await getMatches('real-madrid', {apiKey})
    matches = translateMatches(matches, getLangFromReq(req))
    return { matches }
  }

  render () {
    return (
      <Layout>
        <FadeIn>
          {this.props.matches.map((m, i) => <Match key={i} match={m} />)}
        </FadeIn>
      </Layout>
    )
  }
}
