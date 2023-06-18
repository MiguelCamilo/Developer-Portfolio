import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import ModalItem from "./ModalItem";
import modal from "../data/modal";

import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai";

function Modal() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="absolute right-[170px] top-4 px-1 py-1 bg-violet-300 dark:bg-orange-300 dark:text-black hover:dark:bg-orange-200 hover:bg-violet-200 text-white rounded-md drop-shadow-xl">
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					// className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					About
					{/* animate ping radius */}
					<div className="absolute right-2 w-3 h-3 -mr-3 -mt-8 rounded-full  bg-red-600 dark:bg-red-500 animate-ping" />
					{/* animate ping */}
					<div className="absolute right-2 h-3 w-3 -mr-3 -mt-8 bg-red-600 dark:bg-red-600 rounded-full" />
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-70" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-8 py-4 text-left align-middle shadow-xl transition-all">
									<div className="flex justify-end">
										<button
											type="button"
											className=""
											onClick={() => setIsOpen(false)}
										>
											<AiOutlineClose />
										</button>
									</div>
									<Dialog.Title
										as="h3"
										className="text-lg text-center font-medium leading-6 text-gray-900"
									>
										Hello 👋🏼
									</Dialog.Title>
									<div className="mt-2">
										{modal.map((item) => (
											<ModalItem
												key={item.id}
												p1={item.p1}
												p2={item.p2}
												p3={item.p3}
												p4={item.p4}
											/>
										))}

										{/* LINKS */}
										<div className="container max-w-screen-lg mx-auto">
											<div className="flex flex-wrap justify-center gap-2">
												<a
													// href="https://www.linkedin.com/in/miguel-camilo/"
													className="bg-sky-600 hover:bg-sky-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-lg drop-shadow-xl"
													// target="_blank"
												>
													<AiFillLinkedin style={{ height: "1.5rem", width: "1.5rem" }} />													
												</a>
												{/* animate ping radius */}
												<div className="absolute flex w-3 h-3 mr-3 -mt-1 rounded-full  bg-red-600 dark:bg-red-500 animate-ping" />
												{/* animate ping */}
												<div className="absolute flex h-3 w-3 mr-3 -mt-1 bg-red-600 dark:bg-red-600 rounded-full" />
												<a
													href="https://github.com/MiguelCamilo"
													className="bg-zinc-900 hover:bg-zinc-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-lg drop-shadow-xl"
													target="_blank"
												>
													<AiFillGithub style={{ height: "1.5rem", width: "1.5rem" }} />
												</a>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default Modal;
