import React from 'react';

import SvgRocket from './SvgRocket';

import './AboutMe.scss';
import Icon from './Icon';


//TODO Add link into footer
//<a href="https://www.streamlinehq.com">Free Rocket Launch SVG illustration by Streamline</a>
//TODO animate rocket with gsap

const AboutMe = () => {
  return (
    <section className='about'>
      <div>
        <header className='about__title'>
          <h1>About me</h1>
        </header>
        <p className='about__txt'>
          Hello, My name is Kamil and I enjoy learning new things. My passion for frontend started back in 2018 when I
          had
          my first contact with HTML language. I was fascinated by how web development works. Because Frontend is a
          place
          where technology evolves every day, I feel that being a frontend developer is the perfect choice for me.
        </p>
      </div>
      <div className='about__spaceX'>
        <SvgRocket className='about__rocket' />
        {/*<Icon className='about__rocket' />*/}
      </div>
    </section>
  );
};
// TODO change rocket into new icon and animate it.
// Note not this one because of the bad licence policy. Look for new icon
export default AboutMe;