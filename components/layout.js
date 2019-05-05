import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Topbar from './topbar'
const {names, colors, analytics} = require('../settings.json')

export default class extends React.Component {
  componentDidMount () {
    if (analytics && analytics['google-id']) {
      ReactGA.initialize(analytics['google-id'])
      ReactGA.pageview(document.location.pathname)
    }
  }

  render () {
    return (
      <div>
        <Head>
          <meta charSet='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon/favicon-16x16.png'
          />
          <link
            rel='manifest'
            href='/static/manifest.json'
          />
          <link
            rel='mask-icon'
            href='/static/favicon/safari-pinned-tab.svg'
            color={colors.favicon}
          />
          <link
            rel='shortcut icon'
            href='/static/favicon/favicon.ico'
          />
          <meta name='apple-mobile-web-app-title' content={names['short-name']} />
          <meta name='application-name' content={names['short-name']} />
          <meta
            name='msapplication-config'
            content='/static/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff' />
          <link
            href='https://fonts.googleapis.com/css?family=Raleway'
            rel='stylesheet'
          />
          <title>{names['long-name']}</title>
        </Head>
        <Topbar />
        <main>
          <div className='flex-container'>{this.props.children}</div>
        </main>
        <footer>
          <a href='https://pablo.life'>Pablo Varela</a>
        </footer>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            color: ${colors.main};
            font-family: Raleway, sanserif;
          }
          *::selection {
            background-color: ${colors.selection};
          }
          ul {
            padding: 0;
          }
          main {
            z-index: 2;
            position: relative;
            background-color: white;
            margin-top: 80px;
          }
          .flex-container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          footer {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em;
          }
          footer a {
            color: ${colors.mainDim};
            text-decoration: none;
            font-size: 0.7em;
          }
          footer a:hover {
            text-decoration: underline;
            color: ${colors.selection};
          }
        `}</style>
      </div>
    )
  }
    }
