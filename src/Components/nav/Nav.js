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
            <a href="/">
                <span id="home-logo">Roman Azimov</span>
            </a>
            <div id="routes">
                <a href="#home">
                    <CustomLink to="/" onClick={() => scrollToSection('home', '/')}>
                        Home
                    </CustomLink>
                </a>
                <span className="seperator">|</span>
                <CustomLink to="/blog" onClick={() => scrollToSection('blog', '/blog')}>
                    Blog
                </CustomLink>
                <span className="seperator">|</span>
                <CustomLink to="/contact" onClick={() => scrollToSection('contact', '/contact')}>
                    Contact
                </CustomLink>
            </div>
        </nav>
    );
}
