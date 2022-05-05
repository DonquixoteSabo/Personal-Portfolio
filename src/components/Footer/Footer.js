import React from 'react';

import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import DevChallengesIcon from './devChallengesIcon';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='footer'>
        <div>
          <header className='footer__title'>
            Let's connect
          </header>
          <div className='footer__row'>
            <a className='footer__link' href='https://devchallenges.io/portfolio/Kamil-Budzik'>
              <DevChallengesIcon />
            </a>
            <a href='https://www.freepik.com/psd/laptop-screen' className='footer__link'>Device mockup author</a>
          </div>
        </div>
        <div className='footer__socials'>
          <div className='footer__socials-container'>
            <a href='https://github.com/Kamil-Budzik'>
              <FontAwesomeIcon icon={faGithubSquare} className='icon' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100071523011124'>
              <FontAwesomeIcon icon={faFacebookSquare} className='icon' />
            </a>
            <a href='mailto:kamil.budzik03@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
            </a>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;