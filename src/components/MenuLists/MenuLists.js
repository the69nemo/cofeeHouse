import React from 'react';
import './MenuLists.css';
import FiiltersPanel from '../FiiltersPanel/FiiltersPanel';

function MenuLists() {
  return (
    <section className='menu-lists'>
      <div className='menu-lists__container'>
        <FiiltersPanel />
      </div>
    </section>
   );
}

export default MenuLists;