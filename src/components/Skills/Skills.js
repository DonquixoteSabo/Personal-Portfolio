import React, { useEffect, useState } from 'react';

import './Skills.scss';

import html from '../../images/skills/html.svg';
import css from '../../images/skills/css.png';
import javascript from '../../images/skills/javascript-seeklogo.svg';
import typescript from '../../images/skills/typescriptlang-icon.svg';
import testing from '../../images/skills/react-testing.png';
import react from '../../images/skills/react.svg';
import england from '../../images/skills/england.svg';
import graphql from '../../images/skills/graphql.svg';

//TODO add CSS section
//TODO add animation from figma

const skillsData = [
  {
    icon: html,
    name: 'HTML5',
    smallDevice: true
  },
  {
    icon: css,
    name: 'CSS3',
    smallDevice: true
  },
  {
    icon: javascript,
    name: 'Javascript',
    smallDevice: false
  },
  {
    icon: react,
    name: 'React',
    smallDevice: true
  },
  {
    icon: typescript,
    name: 'Typescript',
    smallDevice: true
  },
  {
    icon: testing,
    name: 'Testing',
    smallDevice: false
  },
  {
    icon: graphql,
    name: 'Api',
    smallDevice: false
  },
  {
    icon: england,
    name: <>English <br />B2+/C1</>,
    smallDevice: true
  }
];

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [skills, setSkills] = useState([]);
  const breakpoint = 700;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    if (width > breakpoint) {
      setSkills(skillsData);
    } else {
      setSkills(skillsData.filter(({ smallDevice }) => smallDevice));
    }
  }, [width]);

  return (
    <section className='skills'>
      <header className='skills__title'>
        <h1>Skills</h1>
      </header>
      {/*<h2 className='skills__subtitle'>Using now:</h2>*/}
      <ul className='skills__list'>
        {skills.map(({ icon, name, smallDevice }) => (
          <li key={name} className='skills__item'>
            <img className='skills__img' src={icon} alt={name} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;