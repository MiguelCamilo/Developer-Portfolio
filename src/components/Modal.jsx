import React, { useState } from "react";

function Modal() {
	const [modal, setModal] = useState(false);

	// onClick modal useState will true
	const toggleModal = () => {
		setModal(!modal);
	};

	// ! not working | dont allow scrolling while modal open
	// if (modal) {
	// 	document.documentElement.classList.add = "active-modal";
	// } else {
	// 	document.documentElement.classList.remove = "active-modal";
	// }

	return (
		<>
			<button
				className="absolute right-[170px] top-4 px-1 py-1 bg-violet-300 dark:bg-orange-300 dark:text-black hover:dark:bg-orange-200 hover:bg-violet-200 text-white rounded-md drop-shadow-xl"
				onClick={toggleModal}
			>
				About
			</button>

			{modal && (
				<div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
					{/* modal background */}
					<div className="bg-zinc-800 dark:bg-zinc-200 bg-opacity-95 dark:bg-opacity-25 w-screen h-screen top-0 left-0 right-0 bottom-0 fixed" />
					{/* modal card */}
					<div className="absolute mt-10 md:mt-0 top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 leading-normal bg-[#f1f1f1] p-8 rounded-[3px] max-w-[300px] min-w-[300px]">
						<h2 className="font-bold text-black">Hello 👋🏼</h2>
						<p className="text-black text-xs">
							As a software engineer with experience in both front-end and
							back-end technologies, I am constantly seeking opportunities to
							expand my technical skills and knowledge. <br /> <br /> In my
							previous internship with Emergency Ventures, I improved the web
							app's responsiveness using responsive utility variants and built
							adaptive user interfaces for multiple platforms. I have also
							participated in a hackathon, where I developed a citizen
							non-emergency reporting app using React Native, React, and
							Node.js, and integrated API's using Fetch and ArcGIS. <br />{" "}
							<br /> In my current role as a Technical Expert at Apple, I use my
							diagnostics and people skills to ensure customers receive swift
							resolution to their technical issues. I am constantly keeping up
							with technical updates and changes across multiple Apple products,
							and enjoy mentoring my peers on technical and customer service
							issues.
							<br /> <br />
							In addition to my professional experience, I have completed
							coursework in programming logic in C at Palm Beach State College,
							and have completed a Full Stack Web Development Online Course
							through Udemy.
							<br /> <br />
							I am open to remote work and am excited to take on
							new challenges and opportunities in the field of software
							engineering.
						</p>
						<button
							onClick={toggleModal}
							className="absolute top-[10px] right-[10px] p-2"
						>
							{/* X svg */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-black"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Modal;
