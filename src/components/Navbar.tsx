const Navbar = () => {
    return (
        <header>
            <div className="nav-links">
                <ul className="nav-ul">
                    <li className="menu-item"><a>HOME</a></li>
                    <li className="menu-item"><a href="#aboutMe">ABOUT ME</a></li>
                    <li className="menu-item"><a>PROJECTS</a></li>
                    <li className="menu-item"><a>CONTACT ME</a></li>
                    <li className="menu-item"><a>RESUME</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;