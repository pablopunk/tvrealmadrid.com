import React from 'react'
import FadeIn from 'react-fade-in'
import {CubeGrid} from 'better-react-spinkit'
import getMatches from 'livesoccertv-parser'
import Layout from '../components/layout'
import Match from '../components/match'
import translate from '../util/translate'

const filterPlayed = m => !m.played
const translateMatches = ms => ms.map(m => Object.assign(m, {date: translate.date(m.date)}))

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: [] }
  }

  async componentDidMount () {
    let matches = await getMatches('spain', 'real-madrid')
    matches = matches.filter(filterPlayed)
    matches = translateMatches(matches)
    return this.setState({ matches })
  }

  render () {
    if (!this.state.matches.length) {
      return (
        <Layout>
          <div>
            <CubeGrid size={50} color='royalblue' />
          </div>
          <style jsx>{`
            div {
              margin: 3em;
            }
          `}</style>
        </Layout>
      )
    }
    return (
      <Layout>
        <FadeIn>
          {
            this.state.matches.map((m,i) => <Match key={i} match={m} />)
          }
        </FadeIn>
      </Layout>
    )
  }
}
