import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <header>
            <div className="nav-links">
                <ul className="nav-ul">
                    <li className="menu-item"><Link to="/">HOME</Link></li>
                    <li className="menu-item"><HashLink to="/#aboutMe">ABOUT ME</HashLink></li>
                    <li className="menu-item"><Link to ="/projects">PROJECTS</Link></li>
                    <li className="menu-item"><a>CONTACT ME</a></li>
                    <li className="menu-item"><Link to="/resume">RESUME</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;