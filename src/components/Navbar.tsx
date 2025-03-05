import {Link} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
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
    const menuRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target as Node) &&
            hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    
    return (
        <>
        <header>
            <div className="nav-links">
                {/*Desktop Navbar*/}
                <ul className={`nav-ul`}>
                    <NavElements />
                </ul>
            </div>
            <div ref={hamburgerRef} className="hamburger-menu" onClick={toggleMenu}>
                &#9776;
            </div>
        </header>
        
        {/*Mobile Hamburger Menu*/}
        <div ref={menuRef} className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <NavElements />
                </ul>
        </div>
        
        </>
    );
}

export default Navbar;