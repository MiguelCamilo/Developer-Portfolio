 import { useEffect, useState } from "react";
import Modal from "./Modal";

function Navbar() {
	const [theme, setTheme] = useState(null);

	// checks browser setting to see if in dark or light mode
	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	// func for onClick event 
	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	// adds or removes 'dark' class to body
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	// func to scroll to bottom when btn pressed
	const scrollDown = () => {
		window.scrollTo({
			top: document.documentElement.offsetHeight,
			left: 0,
			behavior: "smooth",
		});
	};

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6 text-black"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	return (
		<>
			<Modal />

			{/* dark theme */}
			<button
				typeof="button"
				onClick={handleThemeSwitch}
				// adding a background color allows for button to change when clicked
				className="absolute right-10 top-4 hover:bg-violet-200 bg-violet-300 hover:dark:bg-orange-200 dark:bg-orange-300 text-lg p-1 rounded-md drop-shadow-xl"
			>
				{/* if theme is dark set icon to sun, else set to moon */}
				{theme === "dark" ? sun : moon}
			</button>
			{/* contact button > form  */}
			<button
				type="button"
				onClick={scrollDown}
				className="absolute p-1.5 mr-10 mt-4 right-10 hover:bg-violet-200 bg-violet-300 hover:dark:bg-orange-200 dark:bg-orange-300 text-sm rounded-md dark:text-black drop-shadow-xl text-white overflow-hidden"
			>
				Contact &darr;
			</button>
		</>
	);
}

export default Navbar;
