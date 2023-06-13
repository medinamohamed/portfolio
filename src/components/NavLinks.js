import { Link } from 'react-scroll';

const NavLinks = (props) =>{
    const emailAddress = 'medina.ahmed.mo@gmail.com'; // Replace with your desired email address


    return (     
    
    <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="about" smooth={true} duration={500}>

      About
      </Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a class="work-button">Work</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">Contact</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="resume.pdf">Résumé</a>
        </li>
    </ul>
);
}

export default NavLinks;