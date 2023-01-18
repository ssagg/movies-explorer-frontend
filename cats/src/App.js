
import './App.css';
import utils from './utils'
import Cards from "./Cards";
import {useEffect, useState} from "react";

function App() {
    const [isSelected, setIsSelected] = useState(false)
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        setCards([...cards])

    }, [])
    function handleCardClick(){
setIsSelected(true)
    }

    useEffect(()=>{
        if (isSelected){
document.querySelector('.card').classList.add('card_selected')
        }
    },[])

  return (
    <div className="App">
      <header className="App-header">

      </header>
        <div className='cards-container'>
         <Cards onCardClick={handleCardClick} isSelected={isSelected}/>
         <Cards onCardClick={handleCardClick} isSelected={isSelected}/>
         <Cards onCardClick={handleCardClick} isSelected={isSelected}/>
        </div>
    </div>
  );
}

export default App;
