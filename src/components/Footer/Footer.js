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
            <a className='footer__link' href='https://devchallenges.io/portfolio/DonquixoteSabo'>
              <DevChallengesIcon />
            </a>
          </div>
        </div>
        <div className='footer__socials'>
          <div className='footer__socials-container'>
            <FontAwesomeIcon icon={faGithubSquare} className='icon' />
            <FontAwesomeIcon icon={faFacebookSquare} className='icon' />
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;