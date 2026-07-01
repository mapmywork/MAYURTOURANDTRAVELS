import React from 'react';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { value: 100, suffix: '+', label: 'Destinations' },
  { value: 5000, suffix: '+', label: 'Happy Travelers' },
  { value: 1000, suffix: '+', label: 'Successful Holidays' },
  { value: 24, suffix: '×7', label: 'Customer Support' }
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2 drop-shadow-md">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  '0'
                )}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
