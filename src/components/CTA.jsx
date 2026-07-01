import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#2563EB] to-accent opacity-90" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-md">
            Ready To Plan Your <br/> Dream Vacation?
          </h2>
          <p className="text-xl text-white/90 font-body mb-10">
            Our travel experts are ready to create the perfect itinerary tailored just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              Plan My Trip
            </a>
            <a 
              href="tel:+918559904005"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all text-lg"
            >
              <PhoneCall size={20} />
              Call +91 8559904005
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
