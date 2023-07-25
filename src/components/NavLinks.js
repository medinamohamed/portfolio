import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';

import LanguageSwitcher from './LanguageSwitcher'

import { useTranslation } from 'react-i18next';

const NavLinks = (props) =>{
    const emailAddress = 'medina.ahmed.mo@gmail.com';
    const { t } = useTranslation();


    return (     
    
    <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="about" smooth={true} duration={500}>

                {t('about')}
      </Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href=" " className="work-button">{t('work')}</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href= { resume } target="_blank" rel="noopener noreferrer">Résumé</a>
        </li>
        <li>
            <LanguageSwitcher/>
        </li>
    </ul>
);
}

export default NavLinks;