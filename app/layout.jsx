import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Grow IX - Landing Pages & SEO Experts',
        default: 'Grow IX - High-Converting Landing Pages & SEO Optimization Services'
    },
    description: 'Transform your business with custom landing pages, SEO optimization, and performance solutions. 500+ projects completed, 3.2x average conversion boost. Based in Porto, Portugal.',
    keywords: 'landing pages, SEO optimization, web development, conversion optimization, digital marketing, business growth, Porto Portugal, custom websites, performance optimization, tech solutions',
    authors: [{ name: 'Grow IX' }],
    creator: 'Grow IX',
    publisher: 'Grow IX',
    metadataBase: new URL('https://grow-ix.com'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: 'Grow IX - High-Converting Landing Pages & SEO Experts',
        description: 'Transform your business with custom landing pages and SEO optimization. 500+ projects completed with 3.2x average conversion boost.',
        url: 'https://grow-ix.com',
        siteName: 'Grow IX',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Grow IX - Landing Pages & SEO Optimization Services'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grow IX - High-Converting Landing Pages & SEO Experts',
        description: 'Transform your business with custom landing pages and SEO optimization. 500+ projects completed with 3.2x average conversion boost.',
        images: ['/twitter-image.jpg'],
        creator: '@growix'
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code'
    }
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Grow IX",
        "url": "https://grow-ix.com",
        "logo": "https://grow-ix.com/favicon.svg",
        "description": "Expert landing page creation, SEO optimization, and performance solutions for businesses. Transform your online presence with high-converting landing pages.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Porto",
            "addressCountry": "Portugal"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+351-XXX-XXX-XXX",
            "contactType": "Customer Service",
            "email": "support@grow-ix.com",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://facebook.com/growix",
            "https://instagram.com/growix",
            "https://linkedin.com/company/growix"
        ],
        "foundingDate": "2019",
        "numberOfEmployees": "10-50",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 41.1579,
                "longitude": -8.6291
            },
            "geoRadius": "50000"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Landing Pages",
                        "description": "Conversion-optimized landing pages designed for your business goals",
                        "provider": {
                            "@type": "Organization",
                            "name": "Grow IX"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO Optimization",
                        "description": "Comprehensive SEO analysis and optimization to improve search rankings",
                        "provider": {
                            "@type": "Organization",
                            "name": "Grow IX"
                        }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Performance Optimization",
                        "description": "Advanced performance optimization for fast-loading, high-converting websites",
                        "provider": {
                            "@type": "Organization",
                            "name": "Grow IX"
                        }
                    }
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5"
        }
    };

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
                <meta name="theme-color" content="#2563eb" />
                
                {/* Performance optimizations */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="//www.google-analytics.com" />
                <link rel="dns-prefetch" href="//www.googletagmanager.com" />
                
                {/* Preload critical resources */}
                <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
                <link rel="modulepreload" href="/_next/static/chunks/main.js" />
                
                {/* Critical CSS inline */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        html{line-height:1.15;-webkit-text-size-adjust:100%}
                        body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}
                        *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid}
                        img{max-width:100%;height:auto}
                    `
                }} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased text-white bg-blue-900" suppressHydrationWarning={true}>
                <main className="grow">{children}</main>
            </body>
        </html>
    );
}
