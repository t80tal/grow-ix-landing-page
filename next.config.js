/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // SEO and Performance optimizations
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Security headers for better SEO ranking
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()',
                    },
                ],
            },
            {
                // Cache optimization for static assets
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                // Cache optimization for static files
                source: '/(favicon.ico|robots.txt|sitemap.xml)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, must-revalidate',
                    },
                ],
            },
        ]
    },

    // Image optimization for better Core Web Vitals
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Compression and optimization
    compress: true,
    poweredByHeader: false,

    // Performance optimizations
    experimental: {
        scrollRestoration: true,
    },

    // Webpack optimizations for faster builds and better performance
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        // Production optimizations
        if (!dev) {
            // Tree shaking optimizations
            config.optimization.usedExports = true;
            config.optimization.providedExports = true;
            
            // Code splitting optimizations
            config.optimization.splitChunks = {
                ...config.optimization.splitChunks,
                chunks: 'all',
                cacheGroups: {
                    ...config.optimization.splitChunks.cacheGroups,
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                        priority: 10,
                    },
                    common: {
                        name: 'common',
                        minChunks: 2,
                        chunks: 'all',
                        priority: 5,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            };
            
            // Minimize bundle size
            config.optimization.minimize = true;
        }

        return config;
    },
    
    // Output configuration for better SEO
    generateEtags: true,

    // Remove redirects and rewrites for static export compatibility
};

module.exports = nextConfig;
