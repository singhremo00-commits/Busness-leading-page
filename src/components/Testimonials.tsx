import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    quote: "Nexus transformed our digital infrastructure in less than 6 months. Their team is professional, responsive, and truly understands modern business needs.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder of GreenLeaf",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    quote: "The strategic insights we received from the Nexus team were invaluable. They helped us identify new market opportunities we hadn't even considered.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director at Innovate",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    quote: "Working with Nexus was a game-changer for our brand. Their growth marketing strategies led to a 40% increase in our customer acquisition rate.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="text-primary-600">Clients Say</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-primary-200" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}
                  />
                ))}
              </div>

              <p className="text-slate-700 text-lg italic mb-8 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            {['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple'].map((brand) => (
              <span key={brand} className="text-2xl font-bold font-display tracking-tighter">
                {brand}
              </span >
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
