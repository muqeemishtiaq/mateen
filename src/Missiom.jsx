import React, { useEffect } from "react";
import { Target, Users, Award } from "lucide-react"; // icons
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-4" data-aos="fade-down">
          <span className="px-4 py-2 text-sm font-medium bg-[#F5801E]/10 text-[#F5801E] rounded-full">
            Our Mission
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
          data-aos="fade-up"
        >
          Building Dreams, Delivering Excellence
        </h2>

        {/* Intro Text */}
        <p
          className="text-gray-700 max-w-3xl mx-auto mb-12 text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="font-semibold text-[#F5801E]">Al Mateen Engineers</span>, 
          our mission is to deliver innovative, sustainable, and reliable 
          construction solutions that bring value to our clients and 
          communities. We are driven by a commitment to quality, integrity, 
          and excellence in every project we undertake.
        </p>

        {/* Mission Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Vision */}
          <div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            data-aos="zoom-in-up"
          >
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#F5801E] to-[#ff9f50] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To be recognized as a trusted leader in the construction 
              industry, known for quality, sustainability, and customer trust.
            </p>
          </div>

          {/* Teamwork */}
          <div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#F5801E] to-[#ff9f50] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
              data-aos="flip-up"
              data-aos-delay="400"
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our People</h3>
            <p className="text-gray-600 text-sm">
              A team of dedicated professionals who bring passion, skill, 
              and collaboration to deliver projects that make a difference.
            </p>
          </div>

          {/* Excellence */}
          <div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <div
              className="w-16 h-16 bg-gradient-to-br from-[#F5801E] to-[#ff9f50] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md"
              data-aos="flip-right"
              data-aos-delay="600"
            >
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Promise</h3>
            <p className="text-gray-600 text-sm">
              Excellence in every detail, with a focus on timely delivery, 
              lasting quality, and complete client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
