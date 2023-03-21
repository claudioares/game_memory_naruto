import './styles.css'
import pergaminho from '../assets/pergaminho.svg';
import cards from '../util/index'

export default function App() {


  return (
    <div className="App">
      <div className="pergaminho_game">
        <img src={pergaminho} alt='Imagem de um pergaminho' />
      </div>
      <div className="page_game">
        <h2>Jogo da memória</h2>
        <div className="cards top">
          {cards.map(card => (
            <img src={card} alt='cartas dos personagens' key={card}/>
          ))}
        </div>
        <div className="cards bottom">
          {cards.map(card => (
            <img src={card} alt='cartas dos personagens' key={card}/>
          ))}
        </div>
      </div>
    </div>
  )
};
