import React from 'react';
import { TrendingUp, ArrowLeft, ExternalLink, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import PortfolioClient from './portfolio-client.jsx';

export const metadata = {
    title: 'Portfolio - Our Success Stories',
    description: 'Explore our portfolio of high-converting landing pages across industries. 500+ projects completed with an average 3.2x conversion boost. See real results from e-commerce, SaaS, fintech, and more.',
    keywords: 'portfolio, landing pages, case studies, conversion optimization, web design, e-commerce, SaaS, fintech, real estate, healthcare',
    alternates: {
        canonical: '/portfolio'
    },
    openGraph: {
        title: 'Grow IX Portfolio - High-Converting Landing Page Success Stories',
        description: 'Explore our portfolio of 500+ high-converting landing pages across industries with proven results and 3.2x average conversion boost.',
        url: 'https://grow-ix.com/portfolio',
        type: 'website',
        images: [
            {
                url: '/portfolio-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Grow IX Portfolio - Landing Page Success Stories'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grow IX Portfolio - High-Converting Landing Page Success Stories',
        description: 'Explore our portfolio of 500+ high-converting landing pages across industries with proven results.',
        images: ['/portfolio-twitter-image.jpg']
    }
};

export default function Portfolio() {
    return <PortfolioClient />;
}
