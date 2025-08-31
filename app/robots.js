export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin/',
                    '/_next/',
                    '/api/',
                    '/private/',
                    '/*.json$',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 1,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 2,
            },
        ],
        sitemap: 'https://grow-ix.com/sitemap.xml',
    }
}
