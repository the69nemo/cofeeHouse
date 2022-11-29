import React from 'react';
import './FiiltersPanel.css';

function FiiltersPanel() {
  return (
    <section className='filters'>
      <div className='filters__container'>
        <ul className='filters__list'>
          <li className='filters__item'>All</li>
          <li className='filters__item'>Fast Food</li>
          <li className='filters__item'>Cofee</li>
          <li className='filters__item'>Cocktails</li>
          <li className='filters__item'>Quafe Cake</li>
          <li className='filters__item'>Snacks</li>
        </ul>
      </div>
    </section>
   );
}

export default FiiltersPanel;