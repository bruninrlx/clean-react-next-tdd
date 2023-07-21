import React from 'react'

// import { Container } from './styles';

const home = () => {
  return (
    <section>
      <div>
        <img src="" alt="imagem do jogo" />
        <div className="info-section">
          <div className="title_space">
            <p className="game_title">Game title</p>
            <p className="release_date">28/04/2017</p>
          </div>

          <div>
            <p className="price">R$ 80,00</p>
            <div>
              <p className="platform">Nintendo Switch</p>
              <button> Like Button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home
