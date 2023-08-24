import React from 'react';
import '../css/About.css';
import profile from '../assets/profile.png';

import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="About" id="about">
      <div className="container">
        <div className="text">
          <h2>{t('about')}</h2>
          <p>{t('bio')}</p>
        </div>

        <div className="image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};
  
  
  export default About;