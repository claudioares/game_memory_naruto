import './styles.css'
import SideBar from '../components/SideBar';
import Card from '../components/Card';
import cards from '../util';
import { useState } from 'react';

export default function App() {

const [stateCard, setStateCard] = useState([...cards])

  return (
    <div className="App">
  
      <SideBar />
      <div className="page_game">
        {
          stateCard.map(card =>(
            <Card 
              key={card.id}
              card={card}
              stateCard={stateCard}
              setStateCard={setStateCard}
            />
          ))
        }
      </div>
    </div>
  )
};
