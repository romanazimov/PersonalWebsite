import "./Bio.css";
// import logo from '../../images/pngwing.com.png'
import logo from "../../images/avatar_roman.png";

function Bio() {
	return (
		<div id="cont-bio">
			<div id="bio-info">
				<h1>Hello, my name is Roman.</h1>
				<p>I'm a full-stack software developer based out of New Jersey.</p>
				<p>
				I built this website with the idea of having a virtual playground for
				myself. A place where I can showcase what I'm currently working on and
				blog about things I find interesting.
				</p>
			</div>
			<img id="avatar" src={logo} alt={"logo"} />
		</div>
	);
}

export default Bio;
