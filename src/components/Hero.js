import React from 'react';
import '../css/Hero.css';

import { useTranslation } from 'react-i18next';
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="Hero">
      <section className="hero">
        <header className="header">
          <h2>Medina Mohamed</h2>
          <h1>CREATIVE DEVELOPER</h1>
         
        </header>
      </section>

    </div>
  );
};


export default Hero;