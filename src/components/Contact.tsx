import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent successfully! (Demo only)");
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
              Ready to Start Your <br />
              <span className="text-primary-500">Next Project?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              Have a question or want to discuss a potential partnership? Our team is ready to help you take the next step.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary-400 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-slate-400">123 Innovation Drive, Suite 500<br />San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary-400 border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary-400 border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">hello@nexus-solutions.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="mt-12 rounded-2xl overflow-hidden h-64 border border-white/10 grayscale opacity-60">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509317!2d-122.4194154846816!3d37.77492957975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2susa!4v1625123456789!5m2!1sen!2susa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">First Name</label>
                  <input
                    {...register("firstName", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John"
                  />
                  {errors.firstName && <span className="text-red-400 text-xs">Required</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Last Name</label>
                  <input
                    {...register("lastName", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="text-red-400 text-xs">Required</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-400 text-xs">Valid email required</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Service Interested In</label>
                <select
                  {...register("service")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                >
                  <option value="consulting" className="bg-slate-900">Business Consulting</option>
                  <option value="digital" className="bg-slate-900">Digital Transformation</option>
                  <option value="marketing" className="bg-slate-900">Growth Marketing</option>
                  <option value="other" className="bg-slate-900">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Your Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <span className="text-red-400 text-xs">Required</span>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary-600/20"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
