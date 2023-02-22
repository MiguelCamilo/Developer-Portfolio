import React from "react";
import { motion } from "framer-motion";

function PortfolioItem({ title, stack, link }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				default: {
					duration: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				},
				scale: {
					type: "spring",
					damping: 5,
					stiffness: 100,
					restDelta: 0.001,
				},
			}}
			
			target="_blank"
			className="box bg-white dark:text-black border-4 border-violet-300 dark:border-orange-300 rounded-md overflow-hidden mx-2 duration-150"
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
		>
			<motion.a href={link}>
				<div className="w-full p-4">
					<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
						{title}
					</h3>
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
				</div>
			</motion.a>
		</motion.div>
	);
}

export default PortfolioItem;
