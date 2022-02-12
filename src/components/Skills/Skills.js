import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
//content
import { skillsData } from './data';
//css
import './Skills.scss';

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [skills, setSkills] = useState([]);
  // const tl = useRef(null);

  const BREAKPOINT = 700;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    if (width > BREAKPOINT) {
      setSkills(skillsData);
    } else {
      setSkills(skillsData.filter(({ smallDevice }) => smallDevice));
    }
  }, [width]);


  const playAnimation = (index) => {
    const el = document.getElementById(index);
    // tl.current = gsap.timeline();
    //
    // tl.current
    //   .to(el, { x: '-10px', duration: '1s' });
    gsap.to(el, { x: '-10px', duration: '1s' });
  };

  const reverseAnimation = (index) => {
    const el = document.getElementById(index);
    // tl.current = gsap.timeline();
    //
    // tl.current
    //   .to(el, { x: '0', duration: '1s' });
    gsap.to(el, { x: 0, duration: '1s' });

  };

  return (
    <section className='skills'>
      <header className='skills__title'>
        <h1>Skills</h1>
      </header>
      <ul className='skills__list'>
        {skills.map(({ icon, name, smallDevice, text }, index) => (
          <li id={index} key={name} className='skills__item' onMouseEnter={() => playAnimation(index)}
              onMouseLeave={() => reverseAnimation(index)}>
            <img className='skills__img' src={icon} alt={name} />
            <ul className={`skills__inner-list`}>
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