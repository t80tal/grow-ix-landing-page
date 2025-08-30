import React, { useState, useEffect } from 'react';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

import HeroSection from '../components/landing/HeroSection';
import ValueProposition from '../components/landing/ValueProposition';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CTABanner from '../components/landing/CTABanner';
import ContactForm from '../components/landing/ContactForm';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <ValueProposition />

      {/* About Section */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-9 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Grow IX</span>
              </div>
              <p className="text-slate-300 text-xl leading-relaxed mb-6">
                Transforming businesses with high-converting landing pages and advanced SEO strategies.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-white transition-colors cursor-pointer">Custom Landing Pages</li>
                <li className="hover:text-white transition-colors cursor-pointer">SEO Optimization</li>
                <li className="hover:text-white transition-colors cursor-pointer">Performance Optimization</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-6">Policies</h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors cursor-pointer">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-white transition-colors cursor-pointer">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>  
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>support@grow-ix.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Porto, Portugal</span>
                </div>
              </div>
            </div>


          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Grow IX. All rights reserved. Built with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
