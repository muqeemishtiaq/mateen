import React from "react";
import { Clock, CheckCircle, HardHat, Smile } from "lucide-react";

const Team = () => {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals bring decades of construction expertise to every project,
            ensuring quality, safety, and excellence in everything we build.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center" data-aos="fade-up">
          {[
            { number: "25+", text: "Team Members" },
            { number: "150+", text: "Projects Completed" },
            { number: "4.9/5", text: "Client Rating" },
            { number: "100%", text: "Safety Record" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-[#F5801E]">{stat.number}</h3>
              <p className="mt-2 text-gray-700">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Sheraz Malik", role: "CEO", img: "/team1.jpg" },
            { name: "Nusrat Waheed Hashmi", role: "Coordination Officer", img: "/team2.jpg" },
            { name: "Sarfraz Ahmad", role: "Site Supervisor", img: "/team3.jpg" },
            { name: "Shahid Sardar", role: "Planning Engineer", img: "/team4.jpg" },
            { name: "Tariq Ameen", role: "Site Engineer", img: "/team5.jpg" },
            { name: "Malik Zafar Iqbal", role: "Accountant", img: "/team6.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 flex flex-col"
              data-aos="zoom-in"
            >
              {/* Image Section (60%) */}
              <div className="h-60 bg-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Section (40%) */}
              <div className="bg-white p-4 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Team */}
        <div
          className="rounded-xl p-10 text-white shadow-lg"
          style={{ backgroundColor: "#F5801E" }}
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Team?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Timely Delivery</h3>
              <p>Projects completed on schedule</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Quality Work</h3>
              <p>Excellence in every detail</p>
            </div>
            <div>
              <HardHat className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Safety First</h3>
              <p>Zero compromise on safety</p>
            </div>
            <div>
              <Smile className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Client Focus</h3>
              <p>Your satisfaction is our priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
