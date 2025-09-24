import React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12">
        
        {/* Left: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 h-auto md:h-[600px]" data-aos="fade-right">

          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5801E]"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5801E]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5801E]"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5801E]"
            />
            <select
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5801E]"
            >
              <option>Select a project type</option>
              <option>Civil Contractor</option>
              <option>Electrical Contractor</option>
              <option>Mechanical Contractor</option>
              <option>LPG Contractor</option>
            </select>
            <textarea
              placeholder="Project Details *"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5801E]"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#F5801E] text-white py-3 rounded-lg font-semibold hover:bg-[#d96f14] transition"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Cards */}
        <div className="space-y-6" data-aos="fade-left">
          {/* Phone */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
            <Phone className="w-8 h-8 text-[#F5801E]" />
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-[#F5801E]">042 37378086</p>
              <p className="text-gray-600">Call us anytime</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
            <Mail className="w-8 h-8 text-[#F5801E]" />
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-[#F5801E]">almateenengineers@gmail.com</p>
              <p className="text-gray-600">Send us a message</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
            <MapPin className="w-8 h-8 text-[#F5801E]" />
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="text-[#F5801E]">
                60 - Railway Road, Lahore, Pakistan
              </p>
              <p className="text-gray-600">Visit our office</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md">
            <Clock className="w-8 h-8 text-[#F5801E]" />
            <div>
              <h3 className="font-bold text-lg">Working Hours</h3>
              <p className="text-[#F5801E]">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Weekends by appointment</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#F5801E] text-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-2">
              <li>• Free consultation and estimates</li>
              <li>• Experienced Civil, Electrical, Mechanical & LPG Contractors</li>
              <li>• Quality guaranteed work</li>
              <li>• Competitive pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
