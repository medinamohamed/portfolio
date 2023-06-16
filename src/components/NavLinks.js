import { Link } from 'react-scroll';
import resume from '../assets/resume.pdf';

const NavLinks = (props) =>{
    const emailAddress = 'medina.ahmed.mo@gmail.com';


    return (     
    
    <ul>
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
    </ul>
);
}

export default NavLinks;