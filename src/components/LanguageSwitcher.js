// src/components/LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    {i18n.language === 'fr' ? (
      <button className="button-6" onClick={() => changeLanguage('en')}>EN</button>
    ) : (
      <button  className="button-6" onClick={() => changeLanguage('fr')}>FR</button>
    )}
  </div>
  );
};

export default LanguageSwitcher;
