import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MapPin, Users, Plane, ShieldCheck, Globe } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Rajasthan, India',
    subtitle: 'Majestic Forts & Royal Heritage'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Thailand',
    subtitle: 'Tropical Beaches & Ancient Temples'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Dubai, UAE',
    subtitle: 'Modern Luxury & Desert Safaris'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d6527653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Kashmir, India',
    subtitle: 'Paradise on Earth'
  }
];

const features = [
  { icon: Globe, text: '100+ Destinations' },
  { icon: MapPin, text: 'Domestic & International Tours' },
  { icon: Users, text: 'Women Special Tours' },
  { icon: Plane, text: 'Flight + Hotel + Visa' },
  { icon: ShieldCheck, text: 'Trusted Travel Experts' }
];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="w-full h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-16 pb-32 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wider uppercase mb-6">
            Welcome to Mayur Tours
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Explore India & The World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">With Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-body font-light mb-10 drop-shadow-md">
            Discover unforgettable holidays with expertly crafted domestic and international tour packages, personalized itineraries, flight bookings, and women's special group tours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">
            <a href="#packages" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-[0_4px_20px_rgba(30,64,175,0.4)] hover:shadow-[0_4px_30px_rgba(30,64,175,0.6)] hover:-translate-y-1">
              Explore Packages
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:-translate-y-1">
              Plan My Holiday
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Features */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-16 left-0 w-full z-20 hidden md:block"
      >
        <div className="w-full glass-dark border-t border-white/10">
          <div className="container mx-auto px-4 py-5 flex justify-between items-center max-w-7xl gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center px-4 border-r border-white/10 last:border-0 flex-1">
                <feature.icon className="text-secondary mb-2" size={24} />
                <span className="text-white text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
