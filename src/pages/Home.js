import React, { useState, useEffect } from 'react';

import styles from './Home.module.css';

import Container from '../components/reusable/Container';
import Header from '../components/header/Header';
import About from '../components/about/About';
import CaseStudy from '../components/case-study/CaseStudy';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function Home() {
  const [linkColor, setLinkColor] = useState('#afb1c2');

  function changeLinkColor() {
    if (window.scrollY >= 150) {
      setLinkColor('#2e2e2e');
    } else {
      setLinkColor('#afb1c2');
    }
  }

  window.addEventListener('scroll', changeLinkColor);

  return (
    <div className={styles.home}>
      <Header></Header>
      <About></About>
      <CaseStudy></CaseStudy>
      <div className={styles.contactLinks} style={{ color: linkColor }}>
        <a target="_blank" href="https://github.com/Matematko123">
          <FaGithub></FaGithub>
        </a>
        <a target="_blank" href="http://">
          <FaLinkedin></FaLinkedin>
        </a>
        <a target="_blank" href="mailto:alilovicmatija@gmail.com">
          <IoMail></IoMail>
        </a>
      </div>
    </div>
  );
}

export default Home;
