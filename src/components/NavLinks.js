const NavLinks = (props) =>{
    return (     
    
    <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="#about">About</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="#work">Work</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="medina.ahmed.mo@gmail.com">Contact</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="resume.pdf">Résumé</a>
        </li>
    </ul>
);
}

export default NavLinks;