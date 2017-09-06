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
          <link rel='stylesheet' href='/static/index.css' />
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
      </div>
    )
  }
}
