"use client";
import React from 'react';
import { BookOpen, Users, TrendingUp, Share2, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

const contentIdeas = [
  {
    title: "Ultimate Guide to Landing Page Conversion Optimization",
    description: "Comprehensive 50+ page guide covering A/B testing, user psychology, design principles, and case studies.",
    type: "Guide",
    icon: BookOpen,
    backlink_potential: "High",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Landing Page Performance Benchmark Report 2025",
    description: "Industry-specific performance data, conversion rates, and optimization trends across 10,000+ pages.",
    type: "Research",
    icon: TrendingUp,
    backlink_potential: "Very High",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Free Landing Page Templates Collection",
    description: "High-converting, customizable templates for different industries with source code and guidelines.",
    type: "Templates",
    icon: Share2,
    backlink_potential: "High",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "SEO + Conversion Optimization Case Studies",
    description: "Detailed case studies showing how we improved both SEO rankings and conversion rates for clients.",
    type: "Case Studies",
    icon: Users,
    backlink_potential: "Medium-High",
    gradient: "from-orange-500 to-orange-600"
  }
];

const backlinkStrategies = [
  {
    strategy: "Guest Posting on Marketing Blogs",
    description: "Contribute valuable content to HubSpot, Moz, ConversionXL, and similar authoritative marketing blogs.",
    effort: "Medium",
    impact: "High"
  },
  {
    strategy: "Resource Page Outreach",
    description: "Get featured on marketing resource pages and tool directories by providing exceptional free resources.",
    effort: "Low",
    impact: "Medium"
  },
  {
    strategy: "Industry Partnership Content",
    description: "Collaborate with complementary businesses (web designers, marketing agencies) on co-created content.",
    effort: "High",
    impact: "Very High"
  },
  {
    strategy: "Expert Roundups & Interviews",
    description: "Participate in expert roundups and conduct interviews with industry leaders to earn natural backlinks.",
    effort: "Medium",
    impact: "Medium"
  }
];

export default function ContentStrategy() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Content That Earns
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Backlinks & Authority
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our content marketing strategy focuses on creating valuable resources that naturally attract high-quality backlinks and establish industry authority.
          </p>
        </motion.div>

        {/* Content Ideas Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Linkable Content Assets</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contentIdeas.map((idea, index) => (
              <motion.div
                key={index}
                className="group hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${idea.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <idea.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {idea.title}
                        </h4>
                      </div>
                      <div className="inline-flex items-center px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-full mb-2">
                        {idea.type}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {idea.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Backlink Potential:</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      idea.backlink_potential === 'Very High' ? 'bg-emerald-500/20 text-emerald-300' :
                      idea.backlink_potential === 'High' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {idea.backlink_potential}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backlink Strategies */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Link Building Strategies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {backlinkStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {strategy.strategy}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {strategy.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-slate-400">Effort: <span className="text-white font-medium">{strategy.effort}</span></span>
                      <span className="text-slate-400">Impact: <span className="text-emerald-300 font-medium">{strategy.impact}</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Content Authority?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our content marketing strategies don't just create great content - they create linkable assets that establish your brand as an industry authority and drive sustainable organic growth.
            </p>
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Content Strategy
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
