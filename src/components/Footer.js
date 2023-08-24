import React from 'react';
import '../css/Footer.css';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer" id="footer">
      <div className="container">
        {/* <div className="text">
          {t('chat')}
        </div> */}

       
      </div>
    </div>
  );
};
  
  
  export default Footer;