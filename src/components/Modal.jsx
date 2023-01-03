import React from "react";
import { useState, useEffect } from "react";

function Modal() {
	const [isOpen, setIsOpen] = useState(false);

	const modalOpen = () => {
		setIsOpen(true);
	};

	return (
		<>
		<div className="flex flex-col items-center justify-center pt-4">
			<button className="text-black bg-[#fdba74] rounded-md p-1" onClick={modalOpen}>About Me!</button>
			{isOpen && (
				<div className="text-white">
					<div>
						<h1 className="text-white">Modal Title</h1>
						<p>Modal body</p>
						<button onClick={() => setIsOpen(false)}>Close</button>
					</div>
					<div onClick={() => setIsOpen(false)} />
				</div>
			)}
			</div>
		</>
	);
}

export default Modal;
