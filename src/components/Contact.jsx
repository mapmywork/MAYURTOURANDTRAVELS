import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = "918559904005";
    let messageText = `*New Contact Request*\n\n`;
    messageText += `*Name:* ${data.name}\n`;
    messageText += `*Phone:* ${data.phone}\n`;
    if (data.destination) messageText += `*Destination:* ${data.destination}\n`;
    if (data.date) messageText += `*Travel Date:* ${data.date}\n`;
    if (data.travelers) messageText += `*Travelers:* ${data.travelers}\n`;
    if (data.message) messageText += `*Message:* ${data.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-background-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-text-main mb-4"
          >
            Contact Mayur Tours
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2rem] shadow-xl overflow-hidden">
          
          {/* Left: Contact Info */}
          <div className="w-full lg:w-2/5 bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-6">Contact Information</h3>
              <p className="text-white/80 font-body mb-10">
                Reach out to us for any travel inquiries, package customizations, or corporate bookings.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold font-heading mb-1 text-lg">Address</h4>
                    <p className="text-white/80 font-body text-sm leading-relaxed">
                      Mayur Tours<br/>
                      Ajmera Colony, Behind Little Kids Academy<br/>
                      Keshav Nagar, Murlipura<br/>
                      Jaipur, Rajasthan – 302039
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-secondary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold font-heading mb-1 text-lg">Phone</h4>
                    <a href="tel:+918559904005" className="text-white/80 font-body text-sm hover:text-white transition-colors">
                      +91 8559904005
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-secondary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold font-heading mb-1 text-lg">Email</h4>
                    <a href="mailto:mayurtours1@gmail.com" className="text-white/80 font-body text-sm hover:text-white transition-colors">
                      mayurtours1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Globe className="text-secondary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold font-heading mb-1 text-lg">Website</h4>
                    <a href="https://mayurtours.com" target="_blank" rel="noopener noreferrer" className="text-white/80 font-body text-sm hover:text-white transition-colors">
                      mayurtours.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links (Optional) */}
            <div className="mt-12 pt-8 border-t border-white/20 relative z-10 flex gap-4">
              {/* Add social icons here if needed */}
              <span className="text-white/80 text-sm font-medium">Follow us on social media</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-3/5 p-10 lg:p-12">
            <h3 className="text-2xl font-heading font-bold text-text-main mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                    {...register("name", { required: true })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 00000 00000"
                    {...register("phone", { required: true })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Destination</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="E.g. Bali"
                    {...register("destination")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Travel Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-500"
                    {...register("date")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">Travelers</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    {...register("travelers")}
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 - 5 People</option>
                    <option value="6+">6+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-2">Your Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                  {...register("message")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-700 hover:from-primary hover:to-blue-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
