import React from 'react';

import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';

const IndexPage = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <AboutMe />
    </Layout>
  );
};

export default IndexPage;
