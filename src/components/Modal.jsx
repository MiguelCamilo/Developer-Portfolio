import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import ModalItem from './ModalItem';
import modal from '../data/modal';



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
											X
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
												p5={item.p5}
											/>
										))}

										{/* LINKS */}
										<div className="container max-w-screen-lg mx-auto">
											<div className="flex flex-wrap justify-center gap-2">
												<a
													href="https://www.linkedin.com/in/miguel-camilo/"
													className="bg-sky-600 hover:bg-sky-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-lg drop-shadow-xl"
													target="_blank"
												>
													{/* LINKEDIN SVG */}
													
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
													<svg
														xmlns="http://www.w3.org/2000/svg"
														xmlnsXlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														className="w-5"
														preserveAspectRatio="xMidYMid meet"
														viewBox="0 0 24 24"
													>
														<g fill="none">
															<path
																fillRule="evenodd"
																clipRule="evenodd"
																d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
																fill="currentColor"
															/>
														</g>
													</svg>
												</a>

												{/* ADD LINK ICON  */}
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
