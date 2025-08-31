"use client";
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { Share2 } from 'lucide-react';

export default function SocialShare({ 
    url = '',
    title = 'Grow IX - High-Converting Landing Pages & SEO Experts',
    description = 'Transform your business with custom landing pages and SEO optimization. 500+ projects completed with 3.2x average conversion boost.',
    className = '',
    showTitle = true
}) {
    const [currentUrl, setCurrentUrl] = React.useState('');

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(url || window.location.href);
        }
    }, [url]);

    const finalUrl = currentUrl || url;
    const encodedUrl = encodeURIComponent(finalUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);

    const shareLinks = [
        {
            name: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            icon: FaFacebookF,
            color: 'hover:bg-blue-600',
            bgColor: 'bg-blue-500'
        },
        {
            name: 'Twitter', 
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            icon: FaTwitter,
            color: 'hover:bg-sky-500',
            bgColor: 'bg-sky-400'
        },
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            icon: FaLinkedinIn,
            color: 'hover:bg-blue-700',
            bgColor: 'bg-blue-600'
        },
        {
            name: 'WhatsApp',
            url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            icon: FaWhatsapp,
            color: 'hover:bg-green-600',
            bgColor: 'bg-green-500'
        },
        {
            name: 'Telegram',
            url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
            icon: FaTelegramPlane,
            color: 'hover:bg-blue-500',
            bgColor: 'bg-blue-400'
        }
    ];

    const handleShare = (shareUrl) => {
        window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    };

    const handleNativeShare = async () => {
        if (navigator.share && currentUrl) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url: finalUrl
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }
    };

    return (
        <div className={`${className}`}>
            {showTitle && (
                <div className="flex items-center gap-2 mb-4">
                    <Share2 className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-700 font-medium">Share this page:</span>
                </div>
            )}
            
            <div className="flex flex-wrap gap-3">
                {shareLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                        <button
                            key={link.name}
                            onClick={() => handleShare(link.url)}
                            className={`${link.bgColor} ${link.color} text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                            title={`Share on ${link.name}`}
                            aria-label={`Share on ${link.name}`}
                        >
                            <IconComponent className="w-4 h-4" />
                        </button>
                    );
                })}
                
                {/* Native share button for mobile */}
                {currentUrl && typeof window !== 'undefined' && navigator.share && (
                    <button
                        onClick={handleNativeShare}
                        className="bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        title="Share via system"
                        aria-label="Share via system"
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
