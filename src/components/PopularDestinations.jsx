import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import LazyLoad from 'react-lazy-load';

const PopularDestinations = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.type === filter);

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block"
            >
              Explore The World
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-text-main"
            >
              Popular Destinations
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 p-1 bg-background-light rounded-xl"
          >
            {['All', 'Domestic', 'International'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  filter === tab 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-muted hover:text-text-main'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredDestinations.map((dest, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={dest.id}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <LazyLoad height={256} offset={300}>
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </LazyLoad>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {dest.type}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-heading font-bold text-white drop-shadow-md">
                  {dest.name}
                </h3>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-muted text-sm gap-1">
                    <Clock size={16} />
                    {dest.duration}
                  </div>
                  <div className="text-secondary font-bold text-lg">
                    {dest.price} <span className="text-xs text-muted font-normal">/person</span>
                  </div>
                </div>
                
                <p className="text-muted text-sm font-body line-clamp-2 mb-6 flex-grow">
                  {dest.description}
                </p>
                
                <button className="flex items-center justify-between w-full mt-auto py-3 px-4 bg-background-light hover:bg-primary hover:text-white rounded-xl text-primary font-medium transition-colors group/btn">
                  Explore Now
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;
