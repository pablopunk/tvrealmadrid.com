import React from 'react'
import FadeIn from 'react-fade-in'
import fetch from 'isomorphic-fetch'
import { DoubleBounce } from 'better-react-spinkit'
import Layout from '../components/layout'
import Match from '../components/match'
const { colors, api } = require('../settings')

const onlyNext = m => !m.played && !m.live
const filterNotPlayed = m => m.played

const getLastResultOrLive = matches => {
  const liveMatch = matches.find(m => m.live)

  if (liveMatch) {
    return liveMatch
  }

  // return last played
  return matches.filter(filterNotPlayed).slice(-1)[0]
}

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { matches: [] }
  }

  componentDidMount () {
    fetch(api.url).then(res => {
      res.json().then(({ matches }) => {
        const next = matches.filter(onlyNext)
        this.setState({
          matches: [getLastResultOrLive(matches), ...next]
        })
      })
    })
  }

  render () {
    if (this.state.matches.length === 0) {
      return (
        <Layout>
          <div style={{ marginTop: '20px' }}>
            <DoubleBounce size={50} color={colors.main} />
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
