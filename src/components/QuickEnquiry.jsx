import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, MapPin, Calendar, Users, IndianRupee, Phone } from 'lucide-react';

const QuickEnquiry = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = "918559904005";
    let messageText = `*Quick Enquiry*\n\n`;
    messageText += `*Phone:* ${data.phone}\n`;
    if (data.destination) messageText += `*Destination:* ${data.destination}\n`;
    if (data.date) messageText += `*Travel Date:* ${data.date}\n`;
    if (data.travelers) messageText += `*Travelers:* ${data.travelers}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <section className="py-12 bg-white relative z-30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">Quick Enquiry</h2>
            <p className="text-muted font-body text-sm md:text-base">Get a free customized quote for your dream vacation today!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Destination */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="text-primary" size={18} />
              </div>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("destination", { required: true })}
              />
            </div>

            {/* Departure Date */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="text-primary" size={18} />
              </div>
              <input
                type="text"
                placeholder="Travel Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("date", { required: true })}
              />
            </div>

            {/* Travelers */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="text-primary" size={18} />
              </div>
              <select
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                {...register("travelers")}
              >
                <option value="">Travelers</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3-5">3 - 5 People</option>
                <option value="6+">6+ People</option>
              </select>
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="text-primary" size={18} />
              </div>
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get Quote
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
