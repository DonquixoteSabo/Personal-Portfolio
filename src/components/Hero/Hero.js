import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__background'></div>
      <div className='hero__display-text'>
        <div className='hero__text-container'>
          <span>Hi, I am</span>
          <span> Kamil Budzik</span>
          <span>Front-end developer</span>
        </div>
        <div className='hero__socials'>
          <FontAwesomeIcon icon={faGithubSquare} className='github' />
          <FontAwesomeIcon icon={faFacebookSquare} className='facebook' />
          <FontAwesomeIcon icon={faEnvelope} className='email' />
        </div>
      </div>
    </section>
  );
};

export default Hero;