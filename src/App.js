import React from "react";
import "./App.css";
import Nav from "./Components/nav/Nav";
// import Bio from "./Components/bio/Bio";
// import Projects from "./Components/projects/Projects";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

class App extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				{/* <Bio />
				<Projects /> */}
				{/* <img src={logo} alt={"logo"}/>  */}
				{/* <p>Hello world!</p>
				<MyButton message={'Hello World!'}/>
				<Table characterData={characters} /> */}
			</div>
		);
	}
}

export default App;
