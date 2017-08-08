import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      <link rel='stylesheet' href='/static/index.css' />
      <title>TV Real Madrid</title>
    </Head>
    <div className='flex-container'>
			<img src='https://png.icons8.com/real-madrid/color/96' title='Real Madrid' width='96' height='96' />
      <h1>Web en construcción</h1>
      <h2>¿En qué canal juega tu equipo favorito?</h2>
    </div>
  </div>
)
