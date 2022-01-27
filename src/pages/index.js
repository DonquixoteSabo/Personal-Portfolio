import React from 'react';

import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
    </Layout>
  );
};

export default IndexPage;
