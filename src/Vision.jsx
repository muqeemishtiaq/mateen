import React from "react";

const Vision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block bg-[#F5801E] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Future Forward
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#F5801E] to-[#f8b878] bg-clip-text text-transparent">
            Our Vision
          </span>
        </h2>

        {/* Content */}
        <p className="text-lg text-gray-800 leading-relaxed">
          Our vision is to be a leader in the{" "}
          <span className="text-[#F5801E] font-semibold">construction industry</span>, 
          setting new standards of{" "}
          <span className="text-[#F5801E] font-semibold">excellence</span> and{" "}
          <span className="text-[#F5801E] font-semibold">integrity</span>.  
          We aim to deliver outstanding{" "}
          <span className="text-[#F5801E] font-semibold">engineering and construction solutions</span>  
          that not only meet but{" "}
          <span className="text-[#F5801E] font-semibold">exceed client expectations</span>,  
          ensuring satisfaction and the success of every project we undertake.
        </p>
      </div>
    </section>
  );
};

export default Vision;
