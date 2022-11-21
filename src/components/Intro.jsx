import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      {/* the md tags are media queries for responsivness */}
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Miguel Camilo
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full Stack Software Engineer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">*fill in bio here*</p>
    </div>
  );
}

export default Intro;
