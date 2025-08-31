import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ValueProposition from '../components/ValueProposition.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import CTABanner from '../components/CTABanner.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

export const metadata = {
    title: 'High-Converting Landing Pages & SEO Optimization Services',
    description: 'Transform your business with custom landing pages that convert visitors into customers. Expert SEO optimization, performance tuning, and digital solutions. 500+ projects completed with 3.2x average conversion boost.',
    keywords: 'landing pages, SEO optimization, conversion optimization, web development, digital marketing, business growth, custom websites, performance optimization, Porto Portugal',
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: 'Grow IX - High-Converting Landing Pages & SEO Experts',
        description: 'Transform your business with custom landing pages that convert visitors into customers. 500+ projects completed with 3.2x average conversion boost.',
        url: 'https://grow-ix.com',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Grow IX Landing Pages and SEO Services'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grow IX - High-Converting Landing Pages & SEO Experts',
        description: 'Transform your business with custom landing pages that convert visitors into customers. 500+ projects completed.',
        images: ['/twitter-image.jpg']
    }
};

export default function Home() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is included in your landing page service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our landing page service includes custom design, mobile optimization, SEO optimization, performance tuning, A/B testing setup, and analytics integration. We focus on creating high-converting pages tailored to your business goals."
                }
            },
            {
                "@type": "Question", 
                "name": "How long does it take to create a landing page?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, we deliver custom landing pages within 7-14 business days, depending on complexity and requirements. This includes design, development, testing, and optimization phases."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide SEO optimization with landing pages?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our landing pages include comprehensive SEO optimization including technical SEO, on-page optimization, structured data, meta tags, and performance optimization for better search rankings."
                }
            },
            {
                "@type": "Question",
                "name": "What kind of results can I expect?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our clients typically see an average 3.2x increase in conversion rates. Results vary by industry and implementation, but we focus on data-driven design and proven optimization techniques."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
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
            <Footer />
        </div>
        </>
    );
}
