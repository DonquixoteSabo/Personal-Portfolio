import React from 'react';

import './Skills.scss';

import html from '../../images/skills/html.svg';
import css from '../../images/skills/css.svg';
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
    name: 'HTML5'
  },
  // {
  //   icon: css,
  //   name: 'CSS3'
  // },
  {
    icon: javascript,
    name: 'Javascript'
  },
  {
    icon: react,
    name: 'React'
  },
  {
    icon: typescript,
    name: 'Typescript'
  },
  {
    icon: testing,
    name: 'Testing'
  },
  {
    icon: graphql,
    name: 'Api'
  },
  {
    icon: england,
    name: <>English <br />B2+/C1</>
  }
];

const Skills = () => {
  return (
    <section className='skills'>
      <header className='skills__title'>
        <h1>Skills</h1>
      </header>
      {/*<h2 className='skills__subtitle'>Using now:</h2>*/}
      <ul className='skills__list'>
        {skillsData.map(({ icon, name }) => (
          <li className='skills__item'>
            <img className='skills__img' src={icon} alt={name} />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;