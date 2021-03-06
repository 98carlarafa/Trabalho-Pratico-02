import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import './index.css';

const Container = () => {
  let cards = [];
  const [Cards, setCards] = useState([]);
  const [ShowCards, setShowCards] = useState(false);
  useEffect(() => {
    async function getCards() {
      for (let i = 0; i < 30; i++) {
        const res = await axios.get(
          'https://picsum.photos/200/300?random=1' + i,
        );
        cards.push(res.config.url);
      }
      setCards(cards);
      setShowCards(true);
    }
    getCards();
  }, []);
  if (!ShowCards) {
    return (
      <div className={'Container-center'}>
        <h2>Carregando...</h2>
      </div>
    );
  }
  return (
    <div className={'Container'}>
      {Cards.map((item) => (
        <Card key={item} source={item} />
      ))}
    </div>
  );
};

export default Container;
