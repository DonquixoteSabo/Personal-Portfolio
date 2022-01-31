import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Projects.scss';

const projectsData = [
  {
    title: 'Github Jobs1',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs'
  },
  {
    title: 'Github Jobs2',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs'
  },
  {
    title: 'Github Jobs3',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs'
  },
  {
    title: 'Github Jobs4',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs'
  }
];

const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects__container'>
        <header className='projects__title'>
          <h1>Projects</h1>
        </header>
        <ul className='projects__list'>
          {projectsData.map(({ title, img, link, description }) => (
            <li className='project__item project' key={title}>
              <div className='project__wrapper'>
                <h3 className='project__title'>{title}</h3>
                <p className='project__description'>{description}</p>
                <a href={link} className='project__link'>
                  <FontAwesomeIcon className='project__link-icon' icon={faGithub} />
                  Live version
                </a>
              </div>
              <div className='project__img-wrapper'>
                <img src={img} alt={title} className='project__img' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
};

export default Projects;