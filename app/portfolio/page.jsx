"use client";
import React, { useState } from 'react';
import { TrendingUp, ArrowLeft, ExternalLink, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-Commerce Landing Page",
    category: "E-Commerce",
    description: "Modern landing page for fashion e-commerce with 3.5x conversion increase",
    image: "/images/project1.jpg",
    tags: ["React", "Tailwind", "Framer Motion"],
    metrics: { conversion: "+350%", performance: "98/100", leads: "2.4K" }
  },
  {
    id: 2,
    title: "SaaS Product Launch",
    category: "SaaS",
    description: "Complete landing page redesign for B2B SaaS platform",
    image: "/images/project2.jpg",
    tags: ["Next.js", "TypeScript", "Stripe"],
    metrics: { conversion: "+280%", performance: "96/100", leads: "1.8K" }
  },
  {
    id: 3,
    title: "Real Estate Platform",
    category: "Real Estate",
    description: "Luxury real estate landing page with property showcase",
    image: "/images/project3.jpg",
    tags: ["React", "Mapbox", "CMS"],
    metrics: { conversion: "+420%", performance: "95/100", leads: "3.2K" }
  },
  {
    id: 4,
    title: "Fintech Mobile App",
    category: "Fintech",
    description: "Landing page for cryptocurrency trading mobile application",
    image: "/images/project4.jpg",
    tags: ["Vue.js", "Chart.js", "PWA"],
    metrics: { conversion: "+310%", performance: "97/100", leads: "5.1K" }
  },
  {
    id: 5,
    title: "Healthcare Platform",
    category: "Healthcare",
    description: "Telemedicine platform with appointment booking system",
    image: "/images/project5.jpg",
    tags: ["Angular", "Node.js", "PostgreSQL"],
    metrics: { conversion: "+260%", performance: "94/100", leads: "1.5K" }
  },
  {
    id: 6,
    title: "EdTech Learning Hub",
    category: "Education",
    description: "Online learning platform with course management features",
    image: "/images/project6.jpg",
    tags: ["React", "Firebase", "Stripe"],
    metrics: { conversion: "+380%", performance: "96/100", leads: "2.8K" }
  },
  {
    id: 7,
    title: "Restaurant Chain",
    category: "Food & Beverage",
    description: "Multi-location restaurant landing page with online ordering",
    image: "/images/project7.jpg",
    tags: ["Next.js", "Prisma", "Tailwind"],
    metrics: { conversion: "+290%", performance: "93/100", leads: "4.2K" }
  },
  {
    id: 8,
    title: "Travel Booking Platform",
    category: "Travel",
    description: "Luxury travel booking platform with interactive maps",
    image: "/images/project8.jpg",
    tags: ["React", "GraphQL", "Mapbox"],
    metrics: { conversion: "+340%", performance: "95/100", leads: "3.7K" }
  },
  {
    id: 9,
    title: "Fitness App Landing",
    category: "Health & Fitness",
    description: "Personal trainer booking platform with workout tracking",
    image: "/images/project9.jpg",
    tags: ["React Native", "Express", "MongoDB"],
    metrics: { conversion: "+270%", performance: "92/100", leads: "2.1K" }
  }
];

const categories = ["All", "E-Commerce", "SaaS", "Real Estate", "Fintech", "Healthcare", "Education", "Food & Beverage", "Travel", "Health & Fitness"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Grow IX</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover our collection of high-converting landing pages that have transformed businesses across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>3.2x Average Conversion Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>98% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Bar */}
            {/* <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div> */}

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <TrendingUp className="w-10 h-10" />
                      </div>
                      <p className="font-semibold text-lg">{project.title}</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{project.metrics.conversion}</div>
                      <div className="text-xs text-gray-500">Conversion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{project.metrics.performance}</div>
                      <div className="text-xs text-gray-500">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{project.metrics.leads}</div>
                      <div className="text-xs text-gray-500">Leads</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create a high-converting landing page that transforms your business just like these.
          </p>
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 no-underline"
          >
            <TrendingUp className="w-6 h-6" />
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}
