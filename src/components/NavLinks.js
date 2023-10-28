import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';
import { navVariants } from '../utils/motion';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const NavLinks = (props) => {
    const emailAddress = 'medina.ahmed.mo@gmail.com';
    const { t } = useTranslation();
    return (
        <motion.ul variants={navVariants} initial="hidden" animate="show">
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">Contact</a>
            </li>
            {/* <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href={resume} target="_blank" rel="noopener noreferrer">Résumé</a>
            </li>
            <li>
                <LanguageSwitcher />
            </li> */}
        </motion.ul>
    );
}

export default NavLinks;
