import React from 'react';
//images
import html from '../../images/skills/html.svg';
import css from '../../images/skills/css.png';
import javascript from '../../images/skills/javascript-seeklogo.svg';
import react from '../../images/skills/react.svg';
import typescript from '../../images/skills/typescriptlang-icon.svg';
import testing from '../../images/skills/react-testing.png';
import graphql from '../../images/skills/graphql.svg';
import england from '../../images/skills/england.svg';


export const skillsData = [
  {
    icon: html,
    name: 'HTML5',
    text: ['Semantic HTML', 'Forms and Validations', 'SEO Basics'],
    smallDevice: true
  },
  {
    icon: css,
    name: 'CSS3',
    text: ['Responsive design', 'Grid and Flex Box', 'Material UI', 'Figma'],
    smallDevice: true
  },
  {
    icon: javascript,
    name: 'Javascript',
    text: ['ES6+', 'DOM Manipulation', 'Modular JS', 'AJAX'],
    smallDevice: false
  },
  {
    icon: react,
    name: 'React',
    text: ['Hooks', 'GSAP', 'SSR/SSG', 'Redux', 'Forms'],
    smallDevice: true
  },
  {
    icon: typescript,
    name: 'Typescript',
    text: ['Basics', 'Classes & Interfaces', '3rd Party Libraries', 'React & Typescript'],
    smallDevice: true
  },
  {
    icon: testing,
    name: 'Testing',
    text: ['Jest', 'React Testing Library', 'Cypress'],
    smallDevice: false
  },
  {
    icon: graphql,
    name: 'Api',
    text: ['react-query', 'RTK Query', 'GraphQL', 'Mock Service Worker'],
    smallDevice: false
  },
  {
    icon: england,
    name: <>English <br />B2+/C1</>,
    text: ['B2+/C1'],
    smallDevice: true
  }
];