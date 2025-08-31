import React from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';

// Lazy load components that are not immediately visible
const AboutSection = dynamic(() => import('../components/AboutSection'), {
    loading: () => <div className="min-h-[400px] bg-slate-50 animate-pulse"></div>
});
const ServicesSection = dynamic(() => import('../components/ServicesSection'), {
    loading: () => <div className="min-h-[600px] bg-white animate-pulse"></div>
});
const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'), {
    loading: () => <div className="min-h-[500px] bg-slate-50 animate-pulse"></div>
});
const CTABanner = dynamic(() => import('../components/CTABanner'), {
    loading: () => <div className="min-h-[400px] bg-blue-600 animate-pulse"></div>
});
const ResourcesSection = dynamic(() => import('../components/ResourcesSection'), {
    loading: () => <div className="min-h-[600px] bg-slate-50 animate-pulse"></div>
});
const ContactForm = dynamic(() => import('../components/ContactForm'), {
    loading: () => <div className="min-h-[500px] bg-white animate-pulse"></div>
});
const Footer = dynamic(() => import('../components/Footer'), {
    loading: () => <div className="min-h-[300px] bg-slate-900 animate-pulse"></div>
});
const SocialShare = dynamic(() => import('../components/SocialShare'), {
    loading: () => <div className="h-20 bg-white animate-pulse"></div>
});
const ContentStrategy = dynamic(() => import('../components/ContentStrategy'), {
    loading: () => <div className="min-h-[600px] bg-slate-900 animate-pulse"></div>
});

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

            {/* Resources Section */}
            <ResourcesSection />

            {/* Social Sharing Section */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Help Others Discover High-Converting Landing Pages</h2>
                    <SocialShare 
                        className="flex justify-center"
                        showTitle={false}
                    />
                </div>
            </section>

            {/* Content Strategy Section */}
            <ContentStrategy />

            {/* Contact Form */}
            <ContactForm />

            {/* Footer */}
            <Footer />
        </div>
        </>
    );
}
