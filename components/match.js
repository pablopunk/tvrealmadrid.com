export default ({ match }) => (
  <div>
    <article>
      <h1>{match.homeTeamName} - {match.awayTeamName}</h1>
      <h2>
        {match.date}
      </h2>
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
