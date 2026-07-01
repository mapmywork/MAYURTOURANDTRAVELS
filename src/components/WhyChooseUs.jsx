import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Personalized Holiday Planning",
  "Affordable & Transparent Pricing",
  "Trusted Travel Experts",
  "Premium Hotel Partnerships",
  "Verified Local Partners",
  "24×7 Customer Support",
  "Secure Payments",
  "Customized Itineraries"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block"
            >
              Why Choose Mayur Tours
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-text-main mb-6 leading-tight"
            >
              We Make Every Journey <br />
              <span className="text-secondary">Unforgettable</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted font-body text-lg mb-8"
            >
              With years of experience and a passion for travel, we ensure that your holiday is perfectly planned, hassle-free, and exactly as you dreamed. Your journey is truly our responsibility.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                  <span className="text-text-main font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Travelers" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl font-heading font-bold text-primary">15+</div>
                <div className="text-sm font-medium text-muted leading-tight">
                  Years of <br/> Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
