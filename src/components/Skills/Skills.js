import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
//content
import { skillsData } from './data';
//css
import './Skills.scss';


const playAnimation = (index) => {
  const tl = gsap.timeline();
  tl.to(`.skills__item--${index}`, { x: '-10px' })
    .to(`.skills__inner-list--${index}`, { opacity: 1 });
};

const reverseAnimation = (index) => {
  const tl = gsap.timeline();
  tl.to(`.skills__item--${index}`, { x: 0 })
    .to(`.skills__inner-list--${index}`, { opacity: 0 });
};

const Skills = () => {
  const list = useRef(null);
  const title = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    /// Hide all elements
    gsap.set([list.current.children, title.current], { autoAlpha: 0 });
    // ScrollTrigger setup
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: 'top bottom'
      }
    });
    // Animation
    tl.current
      .set(title.current, { x: '-50px' })
      .set(list.current.children, { y: '+20px' })
      .to(title.current, { x: 0, autoAlpha: 1, duration: 1 })
      .to(list.current.children, { y: 0, autoAlpha: 1, duration: 1 });

  }, []);
  
  return (
    <section className='skills'>
      <header className='skills__title' ref={title}>
        <h1>Skills</h1>
      </header>
      <ul className='skills__list' ref={list}>
        {skillsData.map(({ icon, name, smallDevice, text }, index) => (
          <li key={name} className={`skills__item skills__item--${index} ${!smallDevice && 'small-device'}`}
              role='presentation'
              onMouseEnter={() => playAnimation(index)}
              onMouseLeave={() => reverseAnimation(index)}>
            <img className='skills__img' src={icon} alt={name} />
            <ul className={`skills__inner-list skills__inner-list--${index}`}>
              {text.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;