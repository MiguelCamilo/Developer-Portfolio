import { useState, Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react'

function PortfolioItem({ title, stack, link, description }) {
	const [modalOpen, setModalOpen] = useState(false);
  
	return (
	  <div className="box bg-white dark:text-black border-4 border-violet-300 dark:border-orange-300 rounded-md overflow-hidden mx-2 duration-150">
		<button onClick={() => setModalOpen(!modalOpen)} className="flex flex-col items-center w-full p-4">
			<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
				{title}
			</h3>
			<p className="flex flex-wrap  gap-2 flex-row items-center justify-center my-3 text-xs md:text-sm">
						{stack.map((item, index) => (
							// portolio children border
							<span
								key={item.id || index}
								className="inline-block px-2 py-1 font-semibold border-2 border-violet-300 dark:border-orange-300 rounded-md dark:text-black"
							>
								{item}
							</span>
						))}
					</p>
			<span className="relative inline-block px-4 py-2 font-medium group mr-4">
				<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-orange-300 group-hover:-translate-x-0 group-hover:-translate-y-0" />
				<span className="absolute inset-0 w-full h-full bg-white border-2 border-orange-300 group-hover:bg-orange-300" />
				<span className="relative text-orange-300 group-hover:text-white font-semibold">Description & Demo</span>
			</span>

		</button>

		<Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setModalOpen(!modalOpen)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-90" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg md:text-xl mb-2 md:mb-3 font-semibold"
                  >
                    
						{title}
                  </Dialog.Title>
				  
				  <p className='text-sm my-5 font-medium italic'>{description}</p>
				  
				  {/* link button */}
				  <span className="relative inline-block px-2 py-2 font-medium group mb-2">
					<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-orange-300 group-hover:-translate-x-0 group-hover:-translate-y-0" />
					<span className="absolute inset-0 w-full h-full bg-white border-2 border-orange-300 group-hover:bg-orange-300" />
					<a href={link} className="relative text-orange-300 group-hover:text-white font-semibold">Demo or Code</a>
				</span>
				 
				  <h1 className='font-bold'>Tech Stack: </h1>

				  <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
						{stack.map((item, index) => (
							// portolio children border
							<span
								key={item.id || index}
								className="inline-block px-2 py-1 font-semibold border-2 border-violet-300 dark:border-orange-300 rounded-md dark:text-black"
							>
								{item}
							</span>
						))}
					</p>
					{/* view */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
	  </div>
	)
  }

export default PortfolioItem;
