"use client";
import React from 'react';
import { BookOpen, ExternalLink, TrendingUp, Globe } from 'lucide-react';
import { motion } from "framer-motion";

const resources = [
  {
    title: "Google's Web Vitals Guide",
    description: "Learn about Core Web Vitals and their impact on SEO rankings from Google's official documentation.",
    url: "https://web.dev/vitals/",
    type: "SEO Guide",
    icon: Globe,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Conversion Optimization Best Practices",
    description: "HubSpot's comprehensive guide to landing page optimization and conversion rate improvement strategies.",
    url: "https://blog.hubspot.com/marketing/landing-page-optimization",
    type: "Marketing",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Mobile-First Design Guidelines",
    description: "Google's guide to creating mobile-friendly websites that rank better and convert more visitors.",
    url: "https://developers.google.com/web/fundamentals/design-and-ux/responsive/",
    type: "Development",
    icon: BookOpen,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "A/B Testing Fundamentals",
    description: "Optimizely's complete guide to A/B testing for landing pages and conversion optimization.",
    url: "https://www.optimizely.com/optimization-glossary/ab-testing/",
    type: "Analytics",
    icon: TrendingUp,
    gradient: "from-orange-500 to-orange-600"
  }
];

const internalResources = [
  {
    title: "Our Portfolio",
    description: "View real examples of high-converting landing pages we've created for clients across various industries.",
    url: "/portfolio",
    type: "Portfolio"
  },
  {
    title: "Privacy Policy",
    description: "Learn how we protect and handle your personal information with transparency and security.",
    url: "/privacy-policy",
    type: "Legal"
  },
  {
    title: "Terms of Service",
    description: "Understand our service terms and conditions for a clear business relationship.",
    url: "/terms-of-service",
    type: "Legal"
  },
  {
    title: "Refund Policy",
    description: "Our satisfaction guarantee and refund policy to ensure you're completely happy with our services.",
    url: "/refund-policy",
    type: "Policy"
  }
];

export default function ResourcesSection() {
  return (
    <section className="py-24 bg-slate-50">
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
            Helpful Resources &
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Learning Materials
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover valuable resources about landing page optimization, SEO best practices, and digital marketing strategies.
          </p>
        </motion.div>

        {/* External Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Industry Resources & Guides</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="group hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${resource.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                          {resource.title}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      <div className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full mb-2">
                        {resource.type}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internal Resources */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Pages & Policies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internalResources.map((resource, index) => (
              <motion.div
                key={index}
                className="group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a 
                  href={resource.url}
                  className="block bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full mb-3">
                    {resource.type}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {resource.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
