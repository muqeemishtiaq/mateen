// Electrical.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// List of Electrical services
const services = [
  { name: "Supply & Installation of Electrical Sub-Station", image: "/ele/1.png" },
  { name: "Diesel / Gas Generator Set", image: "/ele/2.png" },
  { name: "Generator Limited Auto Power Supply System to Apartments", image: "/ele/3.png" },
  { name: "Underground Power & Control Cable Laying with its Termination", image: "/ele/4.png" },
  { name: "Industrial and Commercial Building Electrical Wiring", image: "/ele/5.png" },
  { name: "UPS System", image: "/ele/6.png" },
  { name: "Data Networks", image: "/ele/7.png" },
  { name: "Fire Detection System", image: "/ele/8.png" },
  { name: "CCTV System", image: "/ele/9.png" },
  { name: "Industrial & Street Lighting Pole", image: "/ele/10.png" },
  { name: "Explosion Proof Lighting & Equipment", image: "/ele/11.png" },
  { name: "Electrical Wiring System", image: "/ele/12.png" },
  { name: "Order to Manufacture & Install Low Tension Panel", image: "/ele/13.png" },
  { name: "Motor Control Panel", image: "/ele/14.png" },
  { name: "Power Factor Improvement Plant", image: "/ele/15.png" },
  { name: "Auto Changeover Panel", image: "/ele/16.png" },
  { name: "Generator AMF & ATS Panel", image: "/ele/17.png" },
  { name: "Power & Lighting DB", image: "/ele/18.png" },
  { name: "Bus Tie Duct", image: "/ele/19.png" },
  { name: "Cable Tray", image: "/ele/20.png" },
  { name: "Cable Ladder", image: "/ele/21.png" },
];

const Electrical = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Electrical Engineering Services
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

export default Electrical;
