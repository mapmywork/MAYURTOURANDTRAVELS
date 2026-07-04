import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Home, Car, Users, Heart, PhoneCall } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Women Tour Guides', text: 'Experienced and verified female tour leaders.' },
  { icon: Home, title: 'Safe Accommodation', text: 'Premium, highly rated, and secure hotels.' },
  { icon: Car, title: 'Verified Transport', text: 'Chauffeur-driven safe and sanitized vehicles.' },
  { icon: Users, title: 'Small Groups', text: 'Intimate group sizes for personalized attention.' },
  { icon: Heart, title: 'Community Travel', text: 'Travel with like-minded inspiring women.' },
  { icon: PhoneCall, title: '24×7 Support', text: 'Round-the-clock dedicated helpline.' }
];

const WomenTours = () => {
  return (
    <section id="womens-tours" className="py-20 relative overflow-hidden">
      {/* Background with slight tint */}
      <div className="absolute inset-0 bg-rose-50" />
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rose-200/50 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Women Special Tours" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass px-6 py-4 rounded-2xl flex items-center justify-between">
                  <div className="flex -space-x-4">
                    <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100" alt="Traveler" />
                    <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=100" alt="Traveler" />
                    <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=100" alt="Traveler" />
                  </div>
                  <div className="text-right">
                    <p className="text-text-main font-bold text-sm">Join 1000+ Women</p>
                    <p className="text-primary text-xs font-semibold">Travel with freedom</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main">100% Safe</p>
                  <p className="text-xs text-muted">Verified & Secure</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-rose-500 font-semibold tracking-wider uppercase text-sm mb-2 block"
            >
              Exclusive For Women
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-text-main mb-6 leading-tight"
            >
              Safe & Unforgettable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Women Group Tours</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted font-body text-lg mb-8"
            >
              Mayur Tours proudly organizes exclusive women-only group tours designed with safety, comfort, privacy, and unforgettable experiences in mind. Travel the world with confidence and make lifelong friends.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-rose-500 mt-1">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text-main text-base mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted font-body leading-snug">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://wa.me/918559904005" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Explore Women's Packages
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenTours;
