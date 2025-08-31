"use client";
import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    image: "SJ",
    rating: 5,
    text: "Grow IX transformed our landing page performance completely. We saw a 340% increase in conversions within the first month. Their attention to SEO detail and user experience is unmatched.",
    results: "+340% Conversions",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    name: "Michael Chen",
    role: "Founder & CEO", 
    company: "StartupBoost",
    image: "MC",
    rating: 5,
    text: "The team at Grow IX didn't just build us a landing page - they built us a conversion machine. Our organic traffic doubled, and our cost per acquisition dropped by 60%.",
    results: "+200% Organic Traffic",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Growth",
    company: "SaaS Dynamics",
    image: "ER", 
    rating: 5,
    text: "Working with Grow IX was a game-changer. Their data-driven approach and continuous optimization helped us achieve our best-performing landing page ever. Highly recommend!",
    results: "-60% Cost Per Lead",
    gradient: "from-purple-500 to-purple-600"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Results from
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how we've helped businesses like yours achieve remarkable growth. 
            <a href="/portfolio" className="text-blue-600 hover:text-blue-700 underline font-medium">View more success stories</a> or 
            <a href="#contact-form" onClick={(e) => { e.preventDefault(); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-blue-600 hover:text-blue-700 underline font-medium cursor-pointer">start your project today</a>.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Quote className="w-full h-full text-slate-900" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Results Badge */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${testimonial.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                  <ArrowRight className="w-4 h-4" />
                  {testimonial.results}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{testimonial.image}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-emerald-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-3xl transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">3.2x</div>
              <div className="text-slate-600">Average ROI Boost</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">47%</div>
              <div className="text-slate-600">Faster Load Times</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}