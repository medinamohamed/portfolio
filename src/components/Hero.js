import React from 'react';
import '../css/Hero.css';

import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="Hero">
      <section className="hero">
        <header className="header">
          <h2>Hi, I am Medina</h2>
          <h1>DEVELOPER</h1>
          <p>Aspiring web developer with a passion for harmonizing design and code..</p>
        </header>
      </section>

    </div>
  );
};


export default Hero;