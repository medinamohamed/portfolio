import { motion } from 'framer-motion';

import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';

import {  navVariants } from '../utils/motion';


const NavLinks = (props) =>{
    const emailAddress = 'medina.ahmed.mo@gmail.com';
    
    return (     
    <motion.ul variants={navVariants} initial="hidden" animate="show">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="about" smooth={true} duration={500}>

      About
      </Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href=" " class="work-button">Work</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href= { resume } target="_blank" rel="noopener noreferrer">Résumé</a>
        </li>
    </motion.ul>
);
}

export default NavLinks;