import React, {Component} from 'react';
import '../css/Hero.css';

import {  titleAnim, textVariants, letterVariants } from '../utils/motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="Hero">
      <section className="hero">
        <header className="header">
          <h1>MEDINA MOHAMED</h1>
          <h2>{t('title')}</h2>
        </header>
      </section>

    </div>
  );
};


export default Hero;