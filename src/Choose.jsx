import React from "react";
import { CheckCircle } from "lucide-react"; // ✅ using icons

const Choose = () => {
  const features = [
    {
      title: "Experienced Team",
      desc: "Our team of professionals brings years of experience and expertise to every project, ensuring quality results.",
    },
    {
      title: "Timely Delivery",
      desc: "We understand the importance of deadlines and deliver projects on time, every time.",
    },
    {
      title: "Quality Assurance",
      desc: "We maintain the highest standards of quality in every aspect of our construction projects.",
    },
    {
      title: "Trust & Reliability",
      desc: "Building lasting relationships through transparency, honesty, and reliable service delivery.",
    },
    {
      title: "Customer Satisfaction",
      desc: "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
    },
    {
      title: "Comprehensive Service",
      desc: "From concept to completion, we handle every aspect of your construction project with care.",
    },
  ];

  return (
    <section className="py-16 bg-[#F5801E]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
       <h3 className="inline-block px-4 py-2 text-sm font-medium bg-white/20 text-white rounded-full uppercase mb-6">
  Why Choose Us
</h3>

        <h2 className="text-4xl font-extrabold mb-6 text-white">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Al Mateen Engineers
          </span>
        </h2>
        <p className="text-white/90 max-w-3xl mx-auto mb-12">
          When you choose{" "}
          <span className="font-semibold text-black">Al Mateen Engineers</span>{" "}
          as your construction partner, you benefit from a team of professionals
          who are passionate about what they do. We bring{" "}
          <span className="font-semibold text-black">experience, expertise</span>, 
          and unwavering commitment to every project.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 shadow-lg rounded-xl p-6 text-left hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5801E]/10">
                  <CheckCircle className="text-[#F5801E]" size={24} />
                </div>
                <h4 className="ml-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
