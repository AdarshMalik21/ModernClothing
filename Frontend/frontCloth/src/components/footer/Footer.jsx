import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-bg text-text py-16 px-8 mt-20 border-t border-white/10">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-10 pointer-events-none" />

      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 sm:px-6">
        
        {/* 🔵 Brand Section */}
        <div>
          <h2 className="text-3xl font-heading mb-4">Tailor's Mirror</h2>
          <p className="text-text/70 leading-relaxed break-words">
            Custom AI-designed clothing crafted uniquely for you.  
            Wear your imagination.  
          </p>
        </div>

        {/* 📌 Quick Links */}
        <div>
          <h3 className="text-xl font-heading mb-4">Quick Links</h3>
          <ul className="space-y-3 text-text/80">
            <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/browse" className="hover:text-accent transition">Browse</Link></li>
            <li><Link to="/create" className="hover:text-accent transition">Create</Link></li>
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
          </ul>
        </div>

        {/* 📞 Contact Section */}
        <div>
          <h3 className="text-xl font-heading mb-4">Contact</h3>
          <ul className="space-y-3 text-text/80">
            <li className="flex items-center gap-2 max-w-[220px]">
              <FaEnvelope className="text-accent flex-shrink-0" />
              <span className="truncate">support@yourbrand.com</span>
            </li>
            <li className="break-words">📞 +91 98765 43210</li>
            <li className="break-words">Delhi, India</li>
          </ul>
        </div>

        {/* 📨 Newsletter */}
        <div>
          <h3 className="text-xl font-heading mb-4">Stay Updated</h3>
          <p className="text-text/80 mb-4">
            Get offers, new drops & updates directly in your inbox.
          </p>

          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md p-2 rounded-full border border-white/10 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-transparent focus:outline-none text-text placeholder:text-text/50 px-4"
            />
            <button className="flex-shrink-0 bg-accent text-white px-4 py-2 rounded-full text-sm hover:bg-accent/80 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      {/* 🔻 Bottom Line */}
      <div className="relative mt-14 pt-6 border-t border-white/10 text-center">
        <p className="text-text/60 text-sm">
          © {new Date().getFullYear()} YourBrand — All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-xl text-text/60">
          <a href="#" className="hover:text-accent transition"><FaInstagram /></a>
          <a href="#" className="hover:text-accent transition"><FaYoutube /></a>
          <a href="#" className="hover:text-accent transition"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
