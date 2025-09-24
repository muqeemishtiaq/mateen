// Civil.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const services = [
  {
    name: "Construction of Residential, Commercial and Industrial Building",
    image: "/buc.png",
  },
  {
    name: "Construction of Water Retaining Structure, Reservoir & Aqueduct",
    image: "/wr.png",
  },
  {
    name: "Construction of Road, Pavement, Open Car Park, Kerb Stone & Footways",
    image: "/rc.png",
  },
  {
    name: "Waterproofing of Basement, its Retaining Walls and Top Roof",
    image: "/bw.png",
  },
  {
    name: "Construction of Boundary Wall & Heavy Industrial / Machine Foundation",
    image: "/br.png",
  },
  {
    name: "Monolith Flooring & Industrial Hard Standing Floor",
    image: "/mp.png",
  },
  {
    name: "Precast RCC Structure, Road Barrier - Design and Fabrication",
    image: "/pr.png",
  },
];

const Civil = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      
      {/* Assuming you already render Navbar in App.jsx or layout */}

      <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6 lg:px-16">
    <h2 className="text-3xl font-bold text-center mb-12">
      Civil Engineering Services
    </h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          {/* Image */}
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 md:h-72 lg:h-80 object-cover"
          />

          {/* Text */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Assuming you already render Footer in App.jsx or layout */}
      
    </div>
  );
};

export default Civil;
