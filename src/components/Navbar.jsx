import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Destinations', href: '#destinations' },
    { name: "Women's Tours", href: '#womens-tours' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            MT
          </div>
          <div className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Mayur Tours
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-text-main' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+918559904005"
            className={`flex items-center gap-2 text-sm font-semibold hover:text-secondary transition-colors ${
              isScrolled ? 'text-text-main' : 'text-white'
            }`}
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Plan My Trip
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-text-main' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-text-main' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t lg:hidden"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="py-3 px-4 text-text-main hover:bg-background-light hover:text-primary font-medium rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t flex flex-col gap-3">
                <a
                  href="tel:+918559904005"
                  className="flex items-center justify-center gap-2 text-primary font-semibold py-3 border border-primary/20 rounded-lg"
                >
                  <Phone size={18} />
                  +91 8559904005
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-primary text-white text-center py-3 rounded-lg font-medium shadow-md"
                >
                  Plan My Trip
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
