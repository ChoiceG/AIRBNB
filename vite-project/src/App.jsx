import { Component, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import './App.css';

import Nav from './assets/Components/Nav';
import Hero from './assets/Components/Hero';
import Card from './assets/Components/Card';
import cardData from './assets/Components/cardData';

function App() {
  const [logo, setLogo] = useState("Logo");
  const [hero, setHero] = useState("Hero");
  const [card, setCard] = useState("Card");

  const cardElement = cardData.map(card =>{
    return <Card
            key={card.id} 
            {...card}
    />
  })  
  return (
    <>
      <div>
        <Nav setLogo={setLogo}></Nav>
        <Hero setHero={setHero}></Hero>
        <section className='card-lists'>
          {cardElement}
        </section>
      </div>
    </>
  );

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
}

export default App;