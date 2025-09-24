// Mechanical.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// List of Mechanical services
const services = [
  { name: "Pipe Fabrication / Welding / Erection / Insulation", image: "/mc/1.png" },
  { name: "Structural Fabrication / Welding / Erection", image: "/mc/2.png" },
  { name: "Firefighting System Installation and its Piping Network", image: "/mc/3.png" },
  { name: "Air Ventilation & Ducting System", image: "/mc/4.png" },
];

const Mechanical = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mechanical Engineering Services
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mechanical;
