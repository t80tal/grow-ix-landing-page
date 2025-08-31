import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-lg text-slate-600 mb-8">
              We've received your message and will get back to you within 24 hours with a custom proposal for your landing page project.
            </p>
            {/* <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Send Another Message
            </Button> */}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Boost Your
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Conversions?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Get a free consultation and discover how we can transform your landing page performance. 
              No commitment required - just valuable insights for your business.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email Us</div>
                  <a 
                    href="mailto:support@grow-ix.com" 
                    className="text-slate-600 no-underline hover:underline hover:cursor-pointer"
                  >
                    support@grow-ix.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Call Us</div>
                  <div className="text-slate-600">Coming Soon...</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Response Time</div>
                  <div className="text-slate-600">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="mt-12 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="font-semibold text-slate-900">What happens next?</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li>• Free 30-minute strategy call</li>
                <li>• Custom proposal within 48 hours</li>
                <li>• No obligation or commitment</li>
                <li>• Actionable insights for your business</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  {/* <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                  /> */}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  {/* <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-12 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500" */}
                  {/* /> */}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Details *
                  </label>
                  {/* <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and what you'd like to achieve..."
                    className="min-h-32 rounded-xl border-slate-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  /> */}
                </div>

                {/* <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message & Get Free Consultation
                </Button> */}
              </div>

              {/* Privacy Note */}
              <div className="mt-6 text-center">
                <p className="text-xs text-slate-500">
                  We respect your privacy. Your information will never be shared or sold.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}