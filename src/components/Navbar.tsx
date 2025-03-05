import {Link} from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavElements = () => {
    return (
        <>
            <li className="menu-item"><Link to="/">HOME</Link></li>
            <li className="menu-item"><HashLink to="/#aboutMe">ABOUT ME</HashLink></li>
            <li className="menu-item"><Link to="/projects">PROJECTS</Link></li>
            <li className="menu-item"><Link to="/contactme">CONTACT ME</Link></li>
            <li className="menu-item"><Link to="/resume">RESUME</Link></li>
        </>
    );
}

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    return (
        <>
        <header>
            <div className="nav-links">
                {/*Desktop Navbar*/}
                <ul className={`nav-ul`}>
                    <NavElements />
                </ul>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                &#9776;
            </div>
        </header>
        
        {/*Mobile Hamburger Menu*/}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul className="">
                    <NavElements />
                </ul>
        </div>
        
        </>
    );
}

export default Navbar;