import React from 'react';
import './FiiltersPanel.css';

function FiiltersPanel({filterProduct}) {
  return (
    <section className='filters'>
      <div className='filters__container'>
        <ul className='filters__list'>
          <li className='filters__item' onClick={() => filterProduct('all')}>All</li>
          <li className='filters__item' onClick={() => filterProduct('fastFood')}>Fast Food</li>
          <li className='filters__item' onClick={() => filterProduct('coffee')}>Coffee</li>
          <li className='filters__item' onClick={() => filterProduct('cocktails')}>Cocktails</li>
          <li className='filters__item' onClick={() => filterProduct('cake')}>Quafe Cake</li>
          <li className='filters__item' onClick={() => filterProduct('snacks')}>Snacks</li>
        </ul>
      </div>
    </section>
   );
}

export default FiiltersPanel;