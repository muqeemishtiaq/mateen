import React from "react";
import { Award, CheckCircle, Shield, Users, Building2 } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#F5801E] flex items-center justify-center p-6">
      <div className="max-w-7xl mx-auto text-white">
        {/* Badge */}
        <div className="flex justify-center mb-4" data-aos="fade-down">
          <span className="bg-white text-[#F5801E] px-4 py-1 rounded-full text-sm font-semibold">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          About <span className="text-white">Al Mateen Engineers</span>
        </h2>
        <p
          className="text-center max-w-3xl mx-auto mb-10 text-white/90"
          data-aos="fade-up"
        >
          Al Mateen Engineers was established in 2016 with an aim to serve the
          nation professionally in Civil, Electrical, Mechanical, and LPG
          Engineering. Over the years, we have successfully completed numerous
          commercial and industrial projects of national importance.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div
            className="bg-white/10 rounded-xl p-6 text-center border border-white"
            data-aos="zoom-in"
          >
            <Award className="w-8 h-8 mx-auto mb-2 text-white" />
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div
            className="bg-white/10 rounded-xl p-6 text-center border border-white"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Building2 className="w-8 h-8 mx-auto mb-2 text-white" />
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div
            className="bg-white/10 rounded-xl p-6 text-center border border-white"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Users className="w-8 h-8 mx-auto mb-2 text-white" />
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-sm">Client Satisfaction</p>
          </div>
        </div>

        {/* Story + Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch">
          <div
            className="bg-white/10 rounded-xl p-6 h-full flex flex-col border border-white"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-white/90 leading-relaxed whitespace-pre-line flex-1">
              Al Mateen Engineers was established in the year 2016 as constructors with an aim to
              serve the nation professionally in the fields of Civil, Electrical, Mechanical and LPG
              Engineering. Over the years we have completed numerous Commercial & Industrial Projects
              of National Importance.{"\n\n"}
              Since 2016 Al Mateen continues to strive for providing reliable, efficient & cost effective
              projects to many Local and Multinational Companies on Turnkey Basis. We are committed to
              follow engineering code of practice/standards with HSE at the top and client’s ultimate
              satisfaction.{"\n\n"}
              Al Mateen proudly acclaims to provide the best services and can undertake the
              responsibility to design, execute and manage the whole project on turnkey basis. Please
              find our list of services and clientele that might speak of our work quality and experience.{"\n\n"}
              Our commitment with client is also backed up by extensive technical support, after sales
              service and comprehensive level of stock, for immediate response to customer’s
              requirements. If you have any queries for the pre-qualification of our company, please do
              not hesitate to contact us. We will be really glad to assist you.
            </p>
          </div>

         <div
  className="bg-white/10 rounded-xl p-6 h-auto md:h-[250px] flex flex-col border border-white"
  data-aos="fade-left"
>

            <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
            <ul className="space-y-3 text-white/90 flex-1">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-white" /> Licensed &
                Insured: Full licensing and comprehensive insurance coverage
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-white" /> Expert Team:
                Skilled professionals with extensive experience
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-white" /> Quality
                Materials: Premium materials from trusted suppliers
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-white" /> Timely
                Delivery: Projects completed on schedule and within budget
              </li>
            </ul>
          </div>
        </div>

        {/* Building Excellence */}
        <div
  className="bg-[#DE7900 ] rounded-2xl p-12 text-center mb-10 border border-white flex flex-col items-center justify-center"
  data-aos="zoom-in-up"
>
  <Shield className="w-14 h-30 mx-auto mb-6 text-white" />
  <h3 className="text-3xl font-bold mb-4">
    Building Excellence Since 2016
  </h3>
  <p className="text-white/90 max-w-2xl mx-auto text-lg">
    Join hundreds of satisfied clients who have trusted us with their
    construction projects.
  </p>
</div>


        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div
            className="bg-white/10 rounded-xl p-6 h-full flex flex-col border border-white"
            data-aos="fade-up-right"
          >
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-white/90 leading-relaxed flex-1">
              To deliver exceptional construction services that exceed
              expectations while maintaining the highest standards of safety,
              quality, and professionalism.
            </p>
          </div>
          <div
            className="bg-white/10 rounded-xl p-6 h-full flex flex-col border border-white"
            data-aos="fade-up-left"
          >
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-white/90 leading-relaxed flex-1">
              To be the most trusted and respected construction company, known
              for innovation, sustainability, and unwavering commitment to
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
