import React, { useState } from "react";
import ModalItem from "./ModalItem";
import modal from "../data/modal";

function Modal() {
	const [Modal, setModal] = useState(false);

	const toggleModalClose = () => {
		setModal(false);
		document.body.style.overflow = "unset";
	};

	const toggleModalOpen = () => {
		setModal(true);

		//  this checks if the user is browsing on a web browser
		//  if true then it sets body overflow to hidden
		//  which removes the scroll bar
		if (typeof window != "undefined" && window.document) {
			document.body.style.overflow = "hidden";
		}
	};

	return (
		<>
			<button
				className="absolute right-[170px] top-4 px-1 py-1 bg-violet-300 dark:bg-orange-300 dark:text-black hover:dark:bg-orange-200 hover:bg-violet-200 text-white rounded-md drop-shadow-xl"
				onClick={toggleModalOpen}
			>
				About
				{/* animate ping radius */}
				<div className="absolute right-2 w-3 h-3 -mr-3 -mt-8 rounded-full  bg-red-600 dark:bg-red-500 animate-ping" />
				{/* animate ping */}
				<div className="absolute right-2 h-3 w-3 -mr-3 -mt-8 bg-red-600 dark:bg-red-600 rounded-full" />
			</button>

			{Modal && (
				<div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
					{/* modal background */}
					<div className="bg-zinc-800 dark:bg-[black] bg-opacity-95 dark:bg-opacity-25 w-screen h-screen top-0 left-0 right-0 bottom-0 fixed" />
					{/* modal card */}
					<div className=" absolute mt-14 md:-mt-5 top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 leading-normal bg-[#ebebeb] p-8 rounded-xl max-w-[300px] min-w-[300px] md:max-w-none md:min-w-none ">
						<h2 className="font-bold text-black text-center mb-2">Hello 👋🏼</h2>
						<div>
							{/* pulling in data from modal.js data base*/}
							{modal.map((item) => (
								<ModalItem
									key={item.id}
									p1={item.p1}
									p2={item.p2}
									p3={item.p3}
									p4={item.p4}
									p5={item.p5}
								/>
							))}
						</div>

						<button
							onClick={toggleModalClose}
							className="absolute top-[10px] right-[10px] p-2"
						>
							{/* X svg */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6 text-black"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
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
