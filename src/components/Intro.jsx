import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      {/* the md tags are media queries for responsivness */}
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Miguel Camilo
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full Stack Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        📍 I'm based in South Florida <br /> ✉️ To contact me for business
        inquiries fill out the form below. <br /> 🧠 React.JS | JavaScript |
        Node.JS | Express.JS | Web Development Skills <br /> 👨🏻‍💻 Frameworks:
        React || TailWindCSS || Bootstrap <br /> Technologies: ArcGIS | Git |
        npm | yarn <br /> 🚀 Skills that I'm expanding on: React.JS || React
        Native || MongoDB || SQL
      </p>
    </div>
  );
}

export default Intro;
