import './Nav.scss';
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const scrollToSection = (id, path) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            navigate(path);
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
                {/* <CustomLink to="/" onClick={() => scrollToSection('home', '/')}>
                    Home
                </CustomLink>
                <span className="seperator">|</span>
                <CustomLink to="/about" onClick={() => scrollToSection('about', '/about')}>
					About
                </CustomLink>
				<span className="seperator">|</span>
                <CustomLink to="/portfolio" onClick={() => scrollToSection('portfolio', '/portfolio')}>
                    Portfolio
                </CustomLink>
                <span className="seperator">|</span>
                <CustomLink to="/contact" onClick={() => scrollToSection('contact', '/contact')}>
                    Contact
                </CustomLink> */}
                <div className='layout-desktop'>
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
                <div className='layout-mobile'>
                    
                </div>
            </div>
        </nav>
    );
}
