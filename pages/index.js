import React from 'react'
import FadeIn from 'react-fade-in'
import fetch from 'isomorphic-fetch'
import Layout from '../components/layout'
import Match from '../components/match'
import translate from '../util/translate'

const filterPlayed = m => !m.played
const translateMatches = ms =>
  ms.map(m => Object.assign(m, { date: translate.date(m.date) }))

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: props.matches }
  }

  static async getInitialProps () {
    const res = await fetch('https://soccer.now.sh/spain/real-madrid')
    let {matches} = await res.json()
    matches = matches.filter(filterPlayed)
    matches = translateMatches(matches)
    return { matches }
  }

  render () {
    return (
      <Layout>
        <FadeIn>
          {this.state.matches.map((m, i) => <Match key={i} match={m} />)}
        </FadeIn>
      </Layout>
    )
  }
}
