import '../css/NavBar.css';
import NavLinks from './NavLinks'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {useState }from 'react';

const MobileNavigation = () =>{

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <AiOutlineMenu className="Hamburger" size="40px" color="black" onClick={()=> setOpen(!open)}/>

    const closeIcon = <AiOutlineClose className="Hamburger" size="40px" color="black" onClick={()=> setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false);
    return (

       
        <nav className="MobileNavigation">
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        
        </nav>
    );
}

export default MobileNavigation;