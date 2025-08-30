import React from 'react';
import { Users, Award, Target, Rocket } from 'lucide-react';
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { icon: Users, number: "500+", label: "Projects Completed" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Target, number: "3.2x", label: "Average ROI Increase" },
    { icon: Rocket, number: "98%", label: "Client Retention" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Landing Page Experts Who
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At Grow IX, we don't just design landing pages - we engineer conversion experiences. 
                Our team combines cutting-edge design principles with data-driven optimization to create 
                pages that don't just look amazing, they perform exceptionally.
              </p>

              <p>
                With over 5 years of experience and 500+ successful projects, we've mastered the art 
                and science of turning visitors into customers. Our SEO-first approach ensures your 
                landing pages not only convert but also rank higher in search results.
              </p>

              <p>
                Every project begins with understanding your unique business goals, target audience, 
                and competitive landscape. We then craft a custom strategy that maximizes both user 
                experience and search engine visibility.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              {[
                "Data-driven design decisions backed by A/B testing",
                "SEO-optimized structure from day one",
                "Mobile-first responsive development",
                "Continuous performance monitoring and optimization"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl opacity-20 blur-3xl"></div>
            
            <div className="relative grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating testimonial */}
          
          </motion.div>
        </div>
      </div>
    </section>
  );
}