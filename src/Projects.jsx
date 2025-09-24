import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const projects = [
  { id: 1, name: "Punjab Institute of Cardiology", category: "Healthcare", desc: "State-of-the-art healthcare facility with advanced infrastructure.", image: "/pic.png", },
  { id: 2, name: "Fauji Meat Limited", category: "Industrial", desc: "One of Pakistan’s largest meat processing plants.", image: "/fml.png", },
  { id: 3, name: "Mall of Gulberg Lahore", category: "Commercial", desc: "Modern shopping mall with high-end retail outlets.", image: "/gg.png", },
  { id: 4, name: "Garrison Academy Walton Lahore", category: "Education", desc: "Prestigious academic institution with modern facilities.", image: "/ga.png", },
  { id: 5, name: "Railway Station Hassan Abdal", category: "Infrastructure", desc: "Upgraded railway station for improved connectivity.", image: "/ha.png", },
  { id: 6, name: "Railway Station Raiwind", category: "Infrastructure", desc: "Enhanced railway station serving regional passengers.", image: "/rw.png" },
  { id: 7, name: "Emporium Mall Lahore", category: "Commercial", desc: "Mega shopping mall and entertainment hub.", image: "/em.png", },
  { id: 8, name: "Packages Mall Lahore", category: "Commercial", desc: "One of the largest malls in Pakistan.", image: "/pk.png", },
  { id: 9, name: "Shujabad Group of Industries Multan", category: "Industrial", desc: "Large-scale industrial and textile unit.", image: "/sjg.jpg", },
  { id: 10, name: "Lotte Kolson Lahore", category: "Industrial", desc: "Food and manufacturing plant.", image: "/lt.png", },
  { id: 11, name: "The Oasis Golf Club (Lahore)", category: "Recreation", desc: "Luxury golf and leisure facility.", image: "/download (1).png", },
  { id: 12, name: "Water & Sewerage Board", category: "Public Works", desc: "Infrastructure for clean water supply and sewerage.", image: "/ws.png", },
  { id: 13, name: "Tyco Security System Ltd.", category: "Industrial", desc: "Advanced security systems and infrastructure.", image: "/tc.png", },
  { id: 14, name: "Printex (Pvt.) Ltd.", category: "Industrial", desc: "Printing and packaging facility.", image: "/pt.png", },
  { id: 15, name: "Bank Al-Habib Ltd.", category: "Commercial", desc: "Modern financial institution building.", image: "/bah.png", },
  { id: 16, name: "Street Light of Orange Line", category: "Infrastructure", desc: "Urban street lighting project for Orange Line Metro.", image: "/ol.png", },
];

const Projects = () => {
  return (
   <section className="py-12 bg-gray-50">
  {/* Heading */}
  <div className="text-center mb-8">
    <span className="px-4 py-1 bg-[#F5801E]/10 text-[#F5801E] font-semibold rounded-full text-sm">
      Portfolio Showcase
    </span>
    <h2 className="text-3xl font-bold mt-3">
      Featured{" "}
      <span className="bg-gradient-to-r from-[#F5801E] to-[#f8b878] bg-clip-text text-transparent">
        Projects
      </span>
    </h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
      A glimpse of our finest construction achievements and architectural excellence
    </p>
  </div>

  {/* Swiper Slider */}
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    loop={true}
    spaceBetween={20}
    slidesPerView={1}
    className="px-4 sm:px-6 md:px-8"
  >
    {projects.map((project) => (
      <SwiperSlide key={project.id}>
        <div className="flex justify-center">
          <div className="relative w-full max-w-[900px] h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg mx-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              {/* Removed Category Badge */}

              {/* Title & Desc */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
  View All Projects
</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default Projects;
