import React from 'react';
//content
import { skillsData } from './data';
//css
import './Skills.scss';

const Skills = () => {
  return (
    <section className='skills'>
      <header className='skills__title'>
        <h1>Skills</h1>
      </header>
      <ul className='skills__list'>
        {skillsData.map(({ icon, name, smallDevice, text }, index) => (
          <li key={name} className={`skills__item ${!smallDevice && 'small-device'}`}>
            <img className={`skills__img skills__img--${index}`} src={icon} alt={name} />
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