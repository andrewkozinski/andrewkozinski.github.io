import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import homeImg from '../resources/images/homeicon.png';
import aboutMeImg from '../resources/images/searchanddestroy.png';
import projectsIcon from '../resources/images/projects.png';
import contactMeIcon from'../resources/images/contactmelarge.png';
import resumeIcon from '../resources/images/deskicon.png';


const Navbar = () => {
    return (
        <header>
            <div className="nav-links">
                <ul className="nav-ul">
                    <li className="menu-item"><Link to="/">HOME <img height={"25px"} width={"25px"} src={homeImg} style={{paddingLeft: "5px"}}/></Link></li>
                    <li className="menu-item"><HashLink to="/#aboutMe">ABOUT ME <img height={"25px"} width={"25px"} src={aboutMeImg} style={{paddingLeft: "5px"}}/></HashLink></li>
                    <li className="menu-item"><a>PROJECTS <img height={"25px"} width={"25px"} src={projectsIcon} style={{paddingLeft: "5px"}}/></a></li>
                    <li className="menu-item"><a>CONTACT ME <img height={"25px"} width={"25px"} src={contactMeIcon} style={{paddingLeft: "5px"}}/></a></li>
                    <li className="menu-item"><Link to="/resume">RESUME <img height={"25px"} width={"25px"} src={resumeIcon} style={{paddingLeft: "5px"}}/></Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;