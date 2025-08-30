import React from 'react';
import { Zap, Globe, Smartphone, TrendingUp } from 'lucide-react';
import { motion } from "framer-motion";

const benefits = [
  {
    icon: TrendingUp,
    title: "Conversion-Focused Design",
    description: "Every element is strategically placed to guide visitors toward taking action, boosting your conversion rates by up to 340%.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Optimized for speed with 99.9% uptime guarantee. Your pages load in under 2 seconds, keeping visitors engaged.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description: "Perfectly responsive designs that look stunning on any device. 70% of traffic comes from mobile - we've got you covered.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "SEO-Optimized Structure",
    description: "Built with search engines in mind. Clean code, fast loading, and structured data to rank higher and drive organic traffic.",
    gradient: "from-emerald-500 to-emerald-600"
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white">
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
            Why Businesses Choose
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Grow IX
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don't just build landing pages - we create conversion machines that turn your traffic into revenue.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group hover:scale-105 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}