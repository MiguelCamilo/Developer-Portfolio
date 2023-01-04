import React from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Navbar />
					<Intro />
					<Portfolio />
					<Timeline />
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
