import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: <Users className="text-primary-600" size={24} />,
    title: "Client-Centric Approach",
    description: "We put your goals at the heart of everything we do."
  },
  {
    icon: <Target className="text-primary-600" size={24} />,
    title: "Results-Driven Strategy",
    description: "Measurable outcomes that drive real business growth."
  },
  {
    icon: <Zap className="text-primary-600" size={24} />,
    title: "Innovative Solutions",
    description: "Leveraging the latest tech to solve complex problems."
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-100 rounded-2xl -z-0 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-primary-500 rounded-2xl -z-0 hidden md:block" />
            
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary-600">12+</div>
                <div className="text-sm text-slate-600 font-medium leading-tight">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              About Our Company
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We Help You Navigate the <span className="text-primary-600">Future of Business</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2014, Nexus has been at the forefront of digital transformation. We combine industry expertise with cutting-edge technology to deliver solutions that empower businesses to thrive in an ever-changing landscape.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Expert Consulting', 'Global Reach', '24/7 Support', 'Custom Integration'].map((text) => (
                <li key={text} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-primary-500" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
