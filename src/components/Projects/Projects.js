import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
// components
import Project from './Project/Project';
//styles
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
        start: 'top center'
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
          {projectsData.map((project) => <Project key={project.title} {...project} />
          )}
        </ul>
      </div>
    </section>

  );
};

export default Projects;