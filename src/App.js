import React from "react";
import "./App.css";
import "./Styles/global.css";
import Nav from "./Components/nav/Nav";
// import { Routes, Route } from "react-router-dom";

import Home from "./Components/home/Home";
import Portfolio from "./Components/portfolio/Portfolio";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

class App extends React.Component {
	render() {
		return (
			<>
				
				<Nav />
				{/* <div className="body-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div> */}
				<div className="body-container">
					<Home />
					<About  />
					<Portfolio />
					<Contact />
					<Footer />
				</div>
			</>
		);
	}
}

export default App;
