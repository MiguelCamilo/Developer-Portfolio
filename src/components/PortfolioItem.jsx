import React from "react";

function PortfolioItem({ title, stack, link }) {
  return (
    // wrapped an anchor tag so each {item} can get each link necessary
    <a
      href={link}
      target="_blank"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:bg-stone-200 dark:hover:bg-stone-400"
    >
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            // portolio children border
            <span key={item.id || index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md dark:text-white">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
