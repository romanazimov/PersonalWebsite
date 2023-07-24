// NavLinks.js

import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavLinks({ scrollToSection }) {
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });

        return (
            <Link className={isActive ? 'active' : ''} to={to} onClick={() => scrollToSection(to, to)} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <ul>
            <li>
                <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
                <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
            </li>
            <li>
                <CustomLink to="/contact">Contact</CustomLink>
            </li>
        </ul>
    );
}

export default NavLinks;
