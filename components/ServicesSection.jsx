"use client";
import React from 'react';
import { Globe, Search, BarChart, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Custom Landing Pages",
    description: "Conversion-optimized landing pages designed specifically for your business goals and target audience.",
    features: ["Mobile-responsive design", "Fast loading optimization", "A/B test ready", "Brand-aligned aesthetics"],
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Search,
    title: "SEO Audits & Optimization",
    description: "Comprehensive SEO analysis and optimization to improve your search rankings and organic traffic.",
    features: ["Technical SEO audit", "Keyword research", "On-page optimization", "Performance monitoring"],
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: BarChart,
    title: "Performance Optimization",
    description: "Advanced performance optimization to ensure your landing pages load fast and convert effectively.",
    features: ["Site speed optimization", "Core Web Vitals improvement", "Performance monitoring", "Load time analysis"],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: PenTool,
    title: "Traffic Monitoring",
    description: "Comprehensive traffic analysis using advanced tools to monitor user behavior and optimize conversions.",
    features: ["Traffic analytics setup", "User behavior tracking", "Conversion funnel analysis", "Performance reporting"],
    gradient: "from-orange-500 to-orange-600"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white" id="services">
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
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From design to optimization, we provide end-to-end solutions that turn your landing pages into powerful revenue generators. 
            <a href="/portfolio" className="text-blue-600 hover:text-blue-700 underline font-medium">See our success stories</a> and discover how we can help grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group hover:scale-[1.02] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <Button 
                    variant="outline" 
                    className="w-full justify-between hover:bg-slate-50"
                    onClick={scrollToContact}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Process */}
        <motion.div
          className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Our Proven 4-Step Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: "Strategy", desc: "Understand goals" },
              { step: "02", title: "Design", desc: "Create & optimize" },
              { step: "03", title: "Test", desc: "A/B test & refine" },
              { step: "04", title: "Scale", desc: "Monitor & grow" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-2">{step.step}</div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}