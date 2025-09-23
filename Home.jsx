import React from "react";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[85vh] md:h-[89vh] flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/1.png')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/55"></div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-16 md:pt-28 lg:pt-36">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black leading-snug">
          Building Digital <br />
          <span className="text-[#F5801E] block">Dreams</span>
        </h1>

        {/* Sub headline */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto px-2">
          We deliver innovative engineering solutions that turn ideas into reality.
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="#portfolio"
            className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 bg-[#F5801E] text-white text-sm sm:text-base font-medium rounded-lg shadow hover:bg-[#e06e10] transition duration-300"
          >
            View Portfolio
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5801E]">10+</h2>
            <p className="text-sm sm:text-base text-black">Years Experience</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5801E]">500+</h2>
            <p className="text-sm sm:text-base text-black">Projects Completed</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5801E]">98%</h2>
            <p className="text-sm sm:text-base text-black">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
