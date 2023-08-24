import './Nav.scss';
import { useState } from 'react';
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
	const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <nav>
            <div className='nav-container'>
				<span className="home-logo">Roman Azimov</span>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes className='hamburger' />)
                        : (<FaBars className='hamburger' />)}
                </div>

                <div className={click ? "nav-menu active" : "nav-menu"}>
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
