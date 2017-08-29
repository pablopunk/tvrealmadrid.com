export default ({ match }) => (
  <div className='match'>
    <h1>{match.game}</h1>
    <h2>{match.date} - {match.time}</h2>
    <ul>
      {
        match.tvs.map(t => (
          <div className='tv'>
            {t}
          </div>
        ))
      }
    </ul>
  </div>
)

