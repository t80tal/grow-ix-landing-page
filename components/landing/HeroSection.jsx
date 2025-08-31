import React from 'react';
import { ArrowRight, Play, TrendingUp, Eye } from 'lucide-react';
import Link from 'next/link';
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Grow Your
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Conversions
              </span>
              <span className="block text-4xl md:text-5xl text-slate-600 font-medium">
                with SEO-Optimized Landing Pages
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform visitors into customers with custom landing pages that combine stunning design, 
              lightning-fast performance, and proven SEO strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Primary CTA Button */}
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center min-w-[250px]"
              >
                Get Your Landing Page
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Secondary CTA Button */}
              <Link href="/portfolio">
                <button className="border-2 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 group flex items-center justify-center min-w-[200px] shadow-sm hover:shadow-md">
                  <Eye className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Our Work
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-slate-600">Landing Pages Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">3.2x</div>
                <div className="text-slate-600">Average Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-8 aspect-video bg-gradient-to-br from-blue-50 to-emerald-50">
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-300 rounded w-3/4"></div>
                    <div className="h-6 bg-gradient-to-r from-blue-600 to-emerald-600 rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/5"></div>
                    </div>
                    <div className="h-10 bg-blue-600 rounded-lg w-32 mt-6"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-emerald-500 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <TrendingUp className="w-6 h-6" />
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="text-sm font-bold">+47%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}