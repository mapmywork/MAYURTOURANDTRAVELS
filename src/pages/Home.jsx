import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickEnquiry from '../components/QuickEnquiry';
import Services from '../components/Services';
import PopularDestinations from '../components/PopularDestinations';
import WomenTours from '../components/WomenTours';
import WhyChooseUs from '../components/WhyChooseUs';
import BookingSteps from '../components/BookingSteps';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mayur Tours | Your Journey, Our Responsibility</title>
        <meta name="description" content="Discover unforgettable holidays with expertly crafted domestic and international tour packages by Mayur Tours." />
        <meta name="keywords" content="Tour Packages in Jaipur, Rajasthan Tour Packages, India Holiday Packages, Domestic Tour Packages, International Tour Packages" />
      </Helmet>
      
      <div className="min-h-screen bg-background-light font-body selection:bg-secondary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <QuickEnquiry />
          <Services />
          <PopularDestinations />
          <WomenTours />
          <WhyChooseUs />
          <BookingSteps />
          <Stats />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
