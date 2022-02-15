import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// icons
import Icon from './Icon';
//styles
import './AboutMe.scss';

gsap.registerPlugin(ScrollTrigger);

//TODO Add link into footer
//<a href="https://www.streamlinehq.com">CHECK WHERE IT IS</a>

const AboutMe = () => {
  const image = useRef(null);
  const title = useRef(null);
  const text = useRef(null);
  const imgTl = useRef(null);
  const sectionTl = useRef(null);

  useEffect(() => {
    /// Hide all elements
    gsap.set([title.current, text.current, image.current], { autoAlpha: 0 });
    // ScrollTrigger setup
    sectionTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: 'top bottom'
      }
    });
    // Animation
    sectionTl.current
      .set([title.current, text.current], { x: '-50px' })
      .set([image.current], { x: '+50px' })
      .to([title.current, text.current], { x: 0, autoAlpha: 1, duration: 1 })
      .to([image.current], { x: 0, autoAlpha: 1, duration: 1 });

  }, []);

  useEffect(() => {
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
    const iconText = image.current.getElementById('Text');
    const board = image.current.getElementById('Board');
    const person = [man, pocket, tie];
    // Hide all svg elements
    gsap.set([foundation, pocket, tie, heart, rectangle, triangle, smile, bulb, circle, man, iconText, board], { autoAlpha: 0 });
    // ScrollTrigger setup
    imgTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: 'top center'
      }
    });
    // Animation
    imgTl.current
      .set([board, foundation], { autoAlpha: 1 })
      .set(person, { x: '-40px' })
      .to(person, { x: 0, autoAlpha: 1, duration: 0.8 })
      .set(heart, { x: '+30px' })
      .to(heart, { x: 0, duration: 1, autoAlpha: 0.8 })
      .set(smile, { x: '-30px' })
      .to(smile, { x: 0, autoAlpha: 1, duration: 0.8 })
      .set(bulb, { y: '+30px' })
      .to(bulb, { y: 0, autoAlpha: 1, duration: 0.8 })
      .to([triangle, rectangle, circle, iconText], { autoAlpha: 1, stagger: 0.2, duration: 0.8 });

  }, []);

  return (
    <section className='about'>
      <div>
        <header className='about__title' ref={title}>
          <h1>About me</h1>
        </header>
        <p className='about__txt' ref={text}>
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