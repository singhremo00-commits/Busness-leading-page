import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Globe, ShieldCheck, Smartphone, Lightbulb, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 size={32} />,
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with our advanced analytics and visualization tools."
  },
  {
    icon: <Globe size={32} />,
    title: "Digital Strategy",
    description: "Comprehensive roadmaps to help your business transition and excel in the digital era."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Cyber Security",
    description: "Protect your valuable business assets with our enterprise-grade security solutions."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Solutions",
    description: "Engage your customers anywhere with high-performance mobile applications."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Innovation Lab",
    description: "R&D services to help you stay ahead of the curve with emerging technologies."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Growth Marketing",
    description: "Scalable marketing strategies designed to acquire and retain high-value customers."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Solutions Tailored for <span className="text-primary-600">Your Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We offer a wide range of professional services designed to help you overcome challenges and achieve your business objectives.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-primary-600 font-bold gap-2 cursor-pointer group-hover:gap-4 transition-all">
                Learn More <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
