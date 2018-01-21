import React from 'react'
import FadeIn from 'react-fade-in'
import fetch from 'isomorphic-fetch'
import {DoubleBounce} from 'better-react-spinkit'
import Layout from '../components/layout'
import Match from '../components/match'
import translate from '../util/translate'

const filterPlayed = m => !m.played
const translateMatches = ms =>
  ms.map(m => Object.assign(m, { date: translate.date(m.date) }))

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: [] }
  }

  componentDidMount () {
    fetch('https://soccer.now.sh/spain/real-madrid').then(res => {
      res.json().then(({ matches }) => {
        matches = matches.filter(filterPlayed)
        matches = translateMatches(matches)
        this.setState({ matches })
      })
    })
  }

  render () {
    if (this.state.matches.length === 0) {
      return (
        <Layout>
          <div style={{marginTop: '20px'}}>
            <DoubleBounce size={50} />
          </div>
        </Layout>
      )
    }

    return (
      <Layout>
        <FadeIn>
          {this.state.matches.map((m, i) => <Match key={i} match={m} />)}
        </FadeIn>
      </Layout>
    )
  }
}
