import React from 'react';
// icons
import Icon from './Icon';
//styles
import './AboutMe.scss';


//TODO Add link into footer
//<a href="https://www.streamlinehq.com">CHECK WHERE IT IS</a>
//TODO animate icon

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
      <div className='about__icon-wrapper'>
        <Icon className='about__icon' />
      </div>
    </section>
  );
};

export default AboutMe;