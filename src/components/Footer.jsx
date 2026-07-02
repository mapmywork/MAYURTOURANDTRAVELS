import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white pt-20 pb-8 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-r from-primary to-accent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Mayur Tours Logo" className="h-12 w-12 object-cover rounded-full shadow-lg" />
              <div className="font-heading font-bold text-2xl tracking-tight text-white">
                Mayur Tours
              </div>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Your trusted travel partner for unforgettable journeys. We specialize in domestic, international, and women's special tours with a commitment to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold">
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> About Mayur Tours</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Domestic Tours</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> International Tours</a></li>
              <li><a href="#womens-tours" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Women's Tours</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Flight & Hotel Booking</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">Mayur Tours, Ajmera Colony, Behind Little Kids Academy, Keshav Nagar, Murlipura, Jaipur – 302039</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+918559904005" className="text-gray-400 hover:text-white transition-colors text-sm">+91 8559904005</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:mayurtours1@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">mayurtours1@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">Subscribe to get the latest offers and travel inspiration directly to your inbox.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white text-sm"
              />
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg transition-colors text-sm"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Mayur Tours. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
