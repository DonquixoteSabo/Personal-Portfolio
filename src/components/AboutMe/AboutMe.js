import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
// icons
import Icon from './Icon';
//styles
import './AboutMe.scss';


//TODO Add link into footer
//<a href="https://www.streamlinehq.com">CHECK WHERE IT IS</a>
//TODO animate icon

const AboutMe = () => {
  const image = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    //All svg icon elements
    const foundation = image.current.getElementById('Foundation');
    const pocket = image.current.getElementById('Pocket');
    const tie = image.current.getElementById('Tie');
    const heart = image.current.getElementById('Heart');
    const rectangle = image.current.getElementById('Rectangle');
    const triangle = image.current.getElementById('Triangle');
    const smile = image.current.getElementById('Smile');
    const bulb = image.current.getElementById('Bulb');
    const circle = image.current.getElementById('Circle');
    const man = image.current.getElementById('Man');
    const text = image.current.getElementById('Text');
    const board = image.current.getElementById('Board');
    const person = [man, pocket, tie];
    // Hide all svg elements
    tl.current.set([foundation, pocket, tie, heart, rectangle, triangle, smile, bulb, circle, man, text, board], { autoAlpha: 0 });
    // Animation
    tl.current
      .set([board, foundation], { autoAlpha: 1 })
      .set(person, { x: '-40px' })
      .to(person, { x: 0, autoAlpha: 1, duration: 1 })
      .set(heart, { x: '+30px' })
      .to(heart, { x: 0, duration: 1, autoAlpha: 1 }, '+=1s')
      .set(smile, { x: '-30px' })
      .to(smile, { x: 0, autoAlpha: 1, duration: 1 })
      .set(bulb, { y: '+30px' })
      .to(bulb, { y: 0, autoAlpha: 1, duration: 1 })
      .to([triangle, rectangle, circle, text], { autoAlpha: 1, stagger: 0.3, duration: 1 });
  }, []);
 
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
        <Icon className='about__icon' ref={image} />
      </div>
    </section>
  );
};

export default AboutMe;