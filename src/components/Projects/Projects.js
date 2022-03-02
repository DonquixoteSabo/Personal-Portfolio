import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import './Projects.scss';
//TODO
// USE some kind of graphcms/datocms to fetch the data;
const projectsData = [
  {
    title: 'Github Jobs1',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs',
    live: 'https://donquixotesabo.github.io/Weather-App/',
  },
  {
    title: 'Github Jobs2',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs',
    live: 'https://donquixotesabo.github.io/Weather-App/',
  },
  {
    title: 'Github Jobs3',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs',
    live: 'https://donquixotesabo.github.io/Weather-App/',
  },
  {
    title: 'Github Jobs4',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs',
    live: 'https://donquixotesabo.github.io/Weather-App/',
  },
  {
    title: 'Github Jobs5',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs',
    live: 'https://donquixotesabo.github.io/Weather-App/',
  },
  {
    title: 'Github Jobs6',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque deserunt dicta expedita
    inventore qui rerum temporibus.At aut, autem deserunt dolor doloremque eius harum ipsam laborum repellat sed
    veniam.`,
    img: 'https://i.imgur.com/dcXF5MS.png',
    link: 'https://github.com/DonquixoteSabo/Github-Jobs',
    live: 'https://donquixotesabo.github.io/Weather-App/',
  }
];
//TODO
// CREATE PROJECT component and render it here. Projects should be responsible only for passing data instead of the whole logic
const Projects = () => {
  const title = useRef(null);
  const tl = useRef(null);
  const list = useRef(null);

  useEffect(() => {
    /// Hide all elements
    gsap.set([list.current.children, title.current], { autoAlpha: 0 });
    // ScrollTrigger setup
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: 'top top'
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
    <section className='projects'>
      <div className='projects__container'>
        <header className='projects__title' ref={title}>
          <h1>Projects</h1>
        </header>
        <ul className='projects__list' ref={list}>
          {projectsData.map(({ title, img, link, description }) => (
            <li className='project__item project' key={title}>
              <div className='project__wrapper'>
                <h3 className='project__title'>{title}</h3>
                <p className='project__description'>{description}</p>
                <a href={link} className='project__link'>
                  <FontAwesomeIcon className='project__link-icon' icon={faGithub} />
                  Code
                </a>
              </div>
              {/*SOMETHING IS WRONG HERE XDDD. This should be live but i dont why why i still get error "live is not defined"*/}
              <a href={link} target='_blank' className='project__img-wrapper project__img-wrapper--active'>
                <img src={img} alt={title} className='project__img' />
                <FontAwesomeIcon className='project__glass' icon={faSearch} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
};

export default Projects;