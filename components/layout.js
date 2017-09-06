import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Topbar from './topbar'

export default class extends React.Component {
  componentDidMount () {
    ReactGA.initialize('UA-106008527-1')
    ReactGA.pageview(document.location.pathname)
  }

  render () {
    return (
      <div>
        <Head>
          <meta charset='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta http-equiv='X-UA-Compatible' content='ie=edge' />
          <link rel='apple-touch-icon' sizes='180x180' href='https://favicon.now.sh/tvrealmadrid.com/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='https://favicon.now.sh/tvrealmadrid.com/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='https://favicon.now.sh/tvrealmadrid.com/favicon-16x16.png' />
          <link rel='manifest' href='https://favicon.now.sh/tvrealmadrid.com/manifest.json' />
          <link rel='mask-icon' href='https://favicon.now.sh/tvrealmadrid.com/safari-pinned-tab.svg' color='#4169e1' />
          <link rel='shortcut icon' href='https://favicon.now.sh/tvrealmadrid.com/favicon.ico' />
          <meta name='apple-mobile-web-app-title' content='tvrealmadrid' />
          <meta name='application-name' content='tvrealmadrid' />
          <meta name='msapplication-config' content='https://favicon.now.sh/tvrealmadrid.com/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <title>TV Real Madrid</title>
        </Head>
        <Topbar />
        <main>
          <div className='flex-container'>
            { this.props.children }
          </div>
        </main>
        <footer>
          <a href='https://pablo.life'>Pablo Varela</a>
        </footer>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            color: royalblue;
            font-family: Raleway, sanserif;
          }
          *::selection {
            background-color: #79ffe1;
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
            color: cornflowerblue;
            text-decoration: none;
            font-size: .7em;
          }
          footer a:hover {
            text-decoration: underline;
            color: aquamarine;
          }
        `}</style>
    </div>
    )
  }
}
