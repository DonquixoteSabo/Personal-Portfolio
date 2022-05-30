import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__background' />
      <div className='hero__display-text'>
        <div className='hero__text-container'>
          <span>Hi, I am</span>
          <span> Kamil Budzik</span>
          <span>Front-end developer</span>
        </div>
        <div className='hero__socials'>
          <a href='https://github.com/Kamil-Budzik' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className='github' />
          </a>
          <a href='https://www.facebook.com/profile.php?id=100071523011124' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} className='facebook' />
          </a>
          <a href='mailto:kamil.budzik03@gmail.com' target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className='email' />
          </a>
        </div>
        <button className='hero__button'>
          <a href='https://docdro.id/kwclySQ' download>Dowload my CV</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;