import React from 'react';

import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
