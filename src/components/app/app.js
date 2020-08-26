import React from 'react';
import './app.scss';
import ItemCard from '../item-card';
import { cards } from './cards-mock';

function App() {
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${require("../../images/Pattern.png")})` }}
    >
      <div className="app-shadow"/>
      <div className="app-title">
        Ты сегодня покормил кота?
      </div>
      <div className="cards-container">
        {cards.map((card, idx) => <ItemCard key={idx} card={card} isSelected={idx === 1} />)}
      </div>
    </div>
  );
}

export default App;