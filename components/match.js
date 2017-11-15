export default ({ match }) => (
  <div>
    <article>
      <h1>{match.game}</h1>
      <h2>
        {match.date} - {match.time}
      </h2>
      <ul>
        {match.tvs.map((t, i) => (
          <div key={i} className='tv'>
            {t}
          </div>
        ))}
      </ul>
    </article>
    <style jsx>{`
      article {
        padding: 1em;
        margin: 1em;
        border: 1px solid whitesmoke;
        border-radius: 5px;
        max-width: 500px;
      }
      article h1 {
        font-size: 1.8em;
      }
      article h2 {
        font-size: 1em;
        color: rgba(0, 0, 0, 0.44);
      }
      article .tv {
        color: rgba(0, 0, 0, 0.44);
        margin: 0.3em 0;
        font-size: 1em;
      }
    `}</style>
  </div>
)
