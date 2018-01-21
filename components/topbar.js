export default () => (
  <div>
    <nav className='top-bar'>
      <img src='/static/header.svg' />
    </nav>
    <style jsx>{`
      .top-bar {
        display: flex;
        position: fixed;
        width: 100%;
        z-index: 1;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        margin-top: -80px;
        padding: 15px 0;
      }
      .top-bar img {
        width: 50px;
      }
    `}</style>
  </div>
)
