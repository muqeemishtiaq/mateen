import React from "react";
import { Mail, MapPin, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5801E] text-white py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Al Mateen Engineers</h2>
            <p className="text-white/90">Building Excellence</p>
            <p className="mt-4 text-sm text-white/80">
              Professional Engineering services with over 10 years of experience. 
              We bring your vision to life with quality craftsmanship and innovation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/90">
              <li>Civil Contractor</li>
              <li>Electrical Contractor</li>
              <li>Mechanical Contractor</li>
              <li>LPG Contractor</li>
              
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              <li>Home</li>
              <li>Services</li>
              <li>Mission</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <User className="w-5 h-5 mr-2" /> Sheraz Malik 
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2" /> almateenengineers@gmail.com <br />
                
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2" /> 60 - Railway Road, Lahore, Pakistan <br />
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 mt-10 pt-6 text-center text-white/80 text-sm">
          © 2024 M.A Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
