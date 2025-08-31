"use client";
import React from 'react';
import { ArrowRight, Rocket, Star } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTABanner() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-emerald-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-yellow-300 fill-current" />
            <span className="text-white font-medium">Ready to Boost Your Conversions?</span>
          </div> */}

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block">High-Converting Landing Pages</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join 500+ successful businesses who've increased their conversions by 3.2x with our proven approach.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* Contact Button */}
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center"
            >
              <Rocket className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              Get Your Landing Page Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Portfolio Button */}
            <button 
              onClick={() => window.location.href = '/portfolio'}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-xl backdrop-blur-sm transition-all duration-300 group flex items-center"
            >
              <Star className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Our Portfolio
            </button>
          </div>



          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 text-center text-white/80">
            <div>
              <div className="text-3xl font-bold text-white mb-2">24-48h</div>
              <div className="text-sm">Quick Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <div className="text-sm">Initial Consultation</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-white/20"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <Rocket className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-white/20"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <Star className="w-12 h-12" />
      </motion.div>
    </section>
  );
}