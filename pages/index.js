import React from 'react'
import FadeIn from 'react-fade-in'
import { CubeGrid } from 'better-react-spinkit'
import getMatches from 'livesoccertv-parser'
import Layout from '../components/layout'
import Match from '../components/match'
import translate from '../util/translate'

const filterPlayed = m => !m.played
const translateMatches = ms =>
  ms.map(m => Object.assign(m, { date: translate.date(m.date) }))

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { matches: [] }
  }

  static async getInitialProps() {
    let matches = await getMatches('spain', 'real-madrid')
    matches = matches.filter(filterPlayed)
    matches = translateMatches(matches)
    return { matches }
  }

  render() {
    return (
      <Layout>
        <FadeIn>
          {this.props.matches.map((m, i) => <Match key={i} match={m} />)}
        </FadeIn>
      </Layout>
    )
  }
}
