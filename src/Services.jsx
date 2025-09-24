import React, { useEffect } from "react";
import { HardHat, Zap, Cog, Flame } from "lucide-react"; // service icons
import { Link } from "react-router-dom"; // ✅ import Link
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-white text-center">
      {/* Badge */}
      <div className="mb-4" data-aos="fade-down">
        <span className="px-4 py-2 text-sm font-medium bg-[#F5801E]/10 text-[#F5801E] rounded-full">
          What We Offer
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-3xl md:text-7xl font-extrabold mb-4"
        data-aos="fade-up"
      >
        <span className="text-black">Our </span>
        <span className="bg-gradient-to-r from-[#c94d00] to-[#F5801E] bg-clip-text text-transparent">
          Services
        </span>
      </h2>

      {/* Intro */}
      <p
        className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We provide comprehensive engineering services, including design, project
        management, construction support, and innovative{" "}
        <span className="text-[#F5801E] font-semibold">technical solutions</span>{" "}
        tailored to our clients’ needs.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Civil Contractor */}
        <Link
          to="/civil"
          className="rounded-lg relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full group"
          data-aos="zoom-in-up"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#c94d00] to-[#F5801E] rounded-2xl flex items-center justify-center mx-auto mt-6 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
            <HardHat className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col space-y-1.5 text-center p-4 pb-2">
            <h3 className="tracking-tight text-xl font-bold text-gray-900 group-hover:text-[#F5801E] transition-colors duration-300">
              Civil Contractor
            </h3>
            <p className="text-sm text-gray-600 mt-2">Strong & Reliable Builds</p>
          </div>
        </Link>

        {/* Electrical Contractor */}
        <Link
          to="/electrical"
          className="rounded-lg relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full group"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#c94d00] to-[#F5801E] rounded-2xl flex items-center justify-center mx-auto mt-6 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col space-y-1.5 text-center p-4 pb-2">
            <h3 className="tracking-tight text-xl font-bold text-gray-900 group-hover:text-[#F5801E] transition-colors duration-300">
              Electrical Contractor
            </h3>
            <p className="text-sm text-gray-600 mt-2">Power & Innovation</p>
          </div>
        </Link>

        {/* Mechanical Contractor */}
        <Link
          to="/mechanical"
          className="rounded-lg relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full group"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#c94d00] to-[#F5801E] rounded-2xl flex items-center justify-center mx-auto mt-6 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
            <Cog className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col space-y-1.5 text-center p-4 pb-2">
            <h3 className="tracking-tight text-xl font-bold text-gray-900 group-hover:text-[#F5801E] transition-colors duration-300">
              Mechanical Contractor
            </h3>
            <p className="text-sm text-gray-600 mt-2">Precision & Quality</p>
          </div>
        </Link>

        {/* LPG Contractor */}
        <Link
          to="/lpg"
          className="rounded-lg relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full group"
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[#c94d00] to-[#F5801E] rounded-2xl flex items-center justify-center mx-auto mt-6 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
            <Flame className="h-10 w-10 text-white" />
          </div>
          <div className="flex flex-col space-y-1.5 text-center p-4 pb-2">
            <h3 className="tracking-tight text-xl font-bold text-gray-900 group-hover:text-[#F5801E] transition-colors duration-300">
              LPG Contractor
            </h3>
            <p className="text-sm text-gray-600 mt-2">Safe & Efficient</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
