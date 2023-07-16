import React from "react";
import "./App.css";
import "./styles/global.css";
import Nav from "./Components/nav/Nav";
// import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

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
