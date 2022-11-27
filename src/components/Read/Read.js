import React from 'react';
import './Read.css';
import data from '../../data/readCardData.json'
import ReadCard from '../ReadCard/ReadCard';

function Read() {
  const cards = data.map((card) => (
    <ReadCard
      key={card.id}
      date={card.date}
      title={card.title}
      description={card.description}
      img={card.img}
    />
  ))

  return (
    <section className='read'>
      <div className='read__container'>
        <h2 className='read__title'>Read Our Lastest Blog</h2>
        <div className='read__cards-wrapper'>
          {cards}
        </div>
      </div>
    </section>
   );
}

export default Read;