import './Nav.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<a href='/'><span id='home-logo'>Roman Azimov</span></a>
			<div>
				<CustomLink to="/">Home</CustomLink>
				<span className='seperator'>|</span>
				<CustomLink to="/blog">Blog</CustomLink>
				<span className='seperator'>|</span>
				<CustomLink to="/contact">Contact</CustomLink>
			</div>
		</nav>
	);
}

function CustomLink ({to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end:true })

	return (
		<Link className={ isActive ? "active" : "" } to={to} {...props}>
			{children}
		</Link>
	)
}
// export default Nav;