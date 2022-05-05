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
          <a href='https://github.com/Kamil-Budzik'>
            <FontAwesomeIcon icon={faGithubSquare} className='github' />
          </a>
          <a href='https://www.facebook.com/profile.php?id=100071523011124'>
            <FontAwesomeIcon icon={faFacebookSquare} className='facebook' />
          </a>
          <a href='mailto:kamil.budzik03@gmail.com'>
            <FontAwesomeIcon icon={faEnvelope} className='email' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;