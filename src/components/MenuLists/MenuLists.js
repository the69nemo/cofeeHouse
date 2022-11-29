import React from 'react';
import './MenuLists.css';
import FiiltersPanel from '../FiiltersPanel/FiiltersPanel';
import data from '../../data/data.json';
import ProductCard from '../ProductCard/ProductCard';

function MenuLists() {
  const cards = data.map((card) => (
    <ProductCard
      key={card.id}
      title={card.title}
      img={card.img}
      prise={card.prise}
    />
  ));

  return (
    <section className='menu-lists'>
      <div className='menu-lists__container'>
        <FiiltersPanel />
        <div className='menu-lists__cards-container'>
          {cards}
        </div>
      </div>
    </section>
   );
}

export default MenuLists;