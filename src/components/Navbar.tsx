import {Link} from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    return (
        <header>
            <div className="nav-links">
                <ul className="nav-ul">
                    <li className="menu-item"><Link to="/">HOME</Link></li>
                    <li className="menu-item"><HashLink to="/#aboutMe">ABOUT ME</HashLink></li>
                    <li className="menu-item"><Link to ="/projects">PROJECTS</Link></li>
                    <li className="menu-item"><Link to ="/contactme">CONTACT ME</Link></li>
                    <li className="menu-item"><Link to="/resume">RESUME</Link></li>
                </ul>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                &#9776;
            </div>
        </header>
    );
}

export default Navbar;