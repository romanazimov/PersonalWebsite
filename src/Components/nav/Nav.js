import './Nav.scss';
import NavLinks from './NavLinks'
import { useState, useEffect} from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [linkClicked, setLinkClicked] = useState(false);
    const navigate = useNavigate();

	useEffect(() => {
		if (linkClicked) {
			setIsNavOpen(false);
			setLinkClicked(false);
		}
	}, [isNavOpen, linkClicked]);

    const scrollToSection = (id, path) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            navigate(path);
			setLinkClicked(true);
        }
    };

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <Link className={isActive ? " active" : ""} to={to} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <nav>
            <span className="home-logo">Roman Azimov</span>
            <div className="routes">
				<div className='desktop-view'>
					<ul>
						<li>
							<CustomLink to="/" onClick={() => scrollToSection('home', '/')}>
								Home
							</CustomLink>
						</li>
						<li>
							<CustomLink to="/about" onClick={() => scrollToSection('about', '/about')}>
								About
							</CustomLink>
						</li>
						<li>
							<CustomLink to="/portfolio" onClick={() => scrollToSection('portfolio', '/portfolio')}>
								Portfolio
							</CustomLink>
						</li>
						<li>
							<CustomLink to="/contact" onClick={() => scrollToSection('contact', '/contact')}>
								Contact
							</CustomLink>
						</li>
					</ul>
				</div>
                <FontAwesomeIcon className="hamburger-icon" onClick={() => setIsNavOpen(!isNavOpen)} icon={faBars} />
				<div className={`cont-side-nav ${isNavOpen ? "nav-open" : "nav-closed"}`}>
					<div className='sidebar'>
						{/* <div className='cont-exit'>
							<FontAwesomeIcon className='sidebar-exit' onClick={() => setIsNavOpen(false)} icon={faXmark} />
						</div> */}
						<FontAwesomeIcon className='sidebar-exit' onClick={() => setIsNavOpen(false)} icon={faXmark} />
						<div className='routes'>
							<ul>
								<li>
									<CustomLink to="/" onClick={() => scrollToSection('home', '/')}>
										Home
									</CustomLink>
								</li>
								<li>
									<CustomLink to="/about" onClick={() => scrollToSection('about', '/about')}>
										About
									</CustomLink>
								</li>
								<li>
									<CustomLink to="/portfolio" onClick={() => scrollToSection('portfolio', '/portfolio')}>
										Portfolio
									</CustomLink>
								</li>
								<li>
									<CustomLink to="/contact" onClick={() => scrollToSection('contact', '/contact')}>
										Contact
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
            </div>
        </nav>
    );
}
