import React from 'react';
import { motion } from 'framer-motion';
import { Map, PhoneForwarded, Settings2, PlaneTakeoff } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Map,
    title: 'Choose Destination',
    description: 'Select your dream destination from our wide range of packages.'
  },
  {
    id: 2,
    icon: PhoneForwarded,
    title: 'Talk To Travel Expert',
    description: 'Our travel counselor will contact you to understand your requirements.'
  },
  {
    id: 3,
    icon: Settings2,
    title: 'Customize Package',
    description: 'We will tailor the itinerary perfectly to suit your budget and preferences.'
  },
  {
    id: 4,
    icon: PlaneTakeoff,
    title: 'Travel Stress-Free',
    description: 'Pack your bags and enjoy a seamless and memorable holiday.'
  }
];

const BookingSteps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-text-main mb-4"
          >
            How To Book Your Trip
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted font-body text-lg max-w-2xl mx-auto"
          >
            A simple and transparent process to turn your dream vacation into reality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-100 shadow-lg flex items-center justify-center mb-6 relative group hover:border-primary hover:-translate-y-2 transition-all duration-300 cursor-default">
                  <step.icon className="text-primary group-hover:text-secondary transition-colors" size={32} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center shadow-md">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-main mb-2">
                  {step.title}
                </h3>
                <p className="text-muted font-body text-sm px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
