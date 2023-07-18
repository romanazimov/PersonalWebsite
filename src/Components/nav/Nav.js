import './Nav.css';
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
            <Link className={isActive ? "active" : ""} to={to} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <nav>
            {/* <a href="/"> */}
                <span className="home-logo">Roman Azimov</span>
            {/* </a> */}
            <div id="routes">
                <CustomLink to="/" onClick={() => scrollToSection('home', '/')}>
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
                </CustomLink>
            </div>
        </nav>
    );
}
