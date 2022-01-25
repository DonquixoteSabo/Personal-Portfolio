import React, { useState } from 'react';
import './Navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`nav ${isOpen && 'nav--active'}`}>
      <button className={`hamburger ${isOpen && 'hamburger--active'}`}
              onClick={() => setIsOpen(prevState => !prevState)}>
        <span className='hamburger__box'>
          <span className='hamburger__inner' />
        </span>
      </button>
    </nav>
  );
};

export default Navigation;