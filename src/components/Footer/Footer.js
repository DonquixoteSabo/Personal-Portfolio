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
            <a  href='https://devchallenges.io/portfolio/Kamil-Budzik' className='footer__link' target="_blank" rel="noreferrer">
              <DevChallengesIcon />
            </a>
            <a href='https://www.freepik.com/psd/laptop-screen' className='footer__link' target="_blank" rel="noreferrer">Device mockup author</a>
            <a href="https://www.streamlinehq.com" className='footer__link' target="_blank" rel="noreferrer">About me icon author</a>
          </div>
        </div>
        <div className='footer__socials'>
          <div className='footer__socials-container'>
            <a href='https://github.com/Kamil-Budzik' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className='icon' />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100071523011124' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} className='icon' />
            </a>
            <a href='mailto:kamil.budzik03@gmail.com' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
            </a>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;