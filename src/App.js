import React from "react";
import "./App.css";
import "./Styles/global.css";
import Nav from "./Components/nav/Nav";
// import { Routes, Route } from "react-router-dom";

import Home from "./Components/home/Home";
import Projects from "./Components/projects/Projects";
import Blog from "./Components/about/About";
import Contact from "./Components/contact/Contact";

class App extends React.Component {
	render() {
		return (
			<>
				<header className="header">
					<Nav />
				</header>
				{/* <div className="body-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div> */}
				<div className="body-container">
					<Home />
					<Blog  />
					<Projects />
					<Contact />
				</div>
				{/* <Bio />
				<Projects /> */}
				{/* <img src={logo} alt={"logo"}/>  */}
				{/* <p>Hello world!</p>
				<MyButton message={'Hello World!'}/>
				<Table characterData={characters} /> */}
			</>
		);
	}
}

export default App;
