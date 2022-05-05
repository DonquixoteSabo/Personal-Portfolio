import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// components
import Layout from '../components/Layout/Layout';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
// plugins
gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
