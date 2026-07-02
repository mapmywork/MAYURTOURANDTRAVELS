import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutVideo from '../assets/aboutvideo.mp4';

const AboutUs = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-background-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h4 className="text-secondary font-semibold tracking-wider uppercase mb-2">About Mayur Tours</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Crafting Unforgettable Journeys Since 2010
            </h2>
            <p className="text-muted font-body mb-6 text-lg leading-relaxed">
              At Mayur Tours, we believe that travel is more than just visiting a destination—it's about creating lifelong memories. With over a decade of experience, we specialize in curating personalized domestic and international holiday packages tailored to your unique preferences.
            </p>
            <p className="text-muted font-body mb-8 text-lg leading-relaxed">
              Whether you're looking for a relaxing beach getaway, a thrilling adventure, or an exclusive women-only group tour, our dedicated team of travel experts is here to handle all the details, from flights and visas to accommodations and itineraries. Let us turn your dream vacation into reality.
            </p>
            <div>
              <a href="#services" className="inline-block px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-[0_4px_20px_rgba(30,64,175,0.4)] hover:shadow-[0_4px_30px_rgba(30,64,175,0.6)] hover:-translate-y-1">
                Discover Our Services
              </a>
            </div>
          </motion.div>

          {/* Right Side: Video */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white bg-black">
              <video 
                ref={videoRef}
                src={aboutVideo}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
