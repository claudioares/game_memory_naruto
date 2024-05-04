import Pergaminho from "../components/Pergaminho"
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
    <div className={`
      flex items-center justify-center 
      h-screen w-full
      bg-bg-app bg-center bg-no-repeat bg-cover px-12
      2xl:px-44
    `}>
  
    <div className={`
      flex items-center justify-center h-[95%] w-full
      2xl:h-[47%]
    `}>
      <Pergaminho 
        cards={cards}
        setStateCard={setStateCard} 
      />
      <div className={`
        flex flex-wrap items-center 
        justify-center gap-[0.4rem]
        bg-[#4F1914] bg-opacity-70 w-full h-full
      `}>
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
          modal && 
          <div className={`
            absolute flex items-center 
            justify-center bg-black bg-opacity-85
            w-full h-full cursor-pointer
            left-0
          `} onClick={()=>resetGame()}>
            <img 
              className={`
                  w-[60rem] h-[50rem]
              `} 
              src={congratulations} 
              alt='Imagens de Congratualizações' 
            />
          </div>
        }
      </div>
    </div>
    </div>
  )
};
