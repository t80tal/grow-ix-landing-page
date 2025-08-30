"use client";
import React from 'react';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy'
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
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

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-8">
              At Grow IX, we value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard the data you provide when using our website and services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Information We Collect</h2>
            <ul className="space-y-3 mb-8">
              <li>Personal information such as name, email, phone number, and billing details when you sign up or make a purchase.</li>
              <li>Usage information like IP address, browser type, and activity on our website for analytics and security.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">How We Use Your Information</h2>
            <ul className="space-y-3 mb-8">
              <li>To provide and improve our landing-page creation services.</li>
              <li>To communicate updates, offers, and support.</li>
              <li>To process payments securely.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Data Protection</h2>
            <p className="mb-8">
              We implement industry-standard security measures to protect your information from unauthorized access.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Third-Party Services</h2>
            <p className="mb-8">
              We may use trusted third-party services (e.g., payment processors, analytics tools) that adhere to data protection standards.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Your Rights</h2>
            <p className="mb-8">
              You may request access, correction, or deletion of your personal information at any time by contacting us.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
