import './styles.css'
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import cards from '../util';
import { useState } from 'react';
import congratulations from '../assets/congratulations.svg';

export default function App() {


  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

    return arr;
  }
  

  const [stateCard, setStateCard] = useState([...shuffleArray(cards)])
  
  const [modal, setModal] = useState(true);

  function resetGame () {
    setModal(false)
    cards.forEach(card => {
      card.turned = false;
    });

    setStateCard(cards)
    setModal(true)
  }

  return (
    <div className="App">
  
      <SideBar 
        cards={cards}
        setStateCard={setStateCard} 
      />
      <div className="page_game">
        {stateCard.length ?
          stateCard.map(card =>(
            <Card 
              key={card.id}
              card={card}
              stateCard={stateCard}
              setStateCard={setStateCard}
            />
          ))
          :
          modal && <div className="div_congratulation" onClick={()=>resetGame()}>
            <img className='congratulations' src={congratulations} alt='Imagens de Congratualizações' />
          </div>
        }
      </div>
    </div>
  )
};
