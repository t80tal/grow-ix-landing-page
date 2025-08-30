import React from 'react';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service'
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-8">
              Welcome to Grow IX! By using our website and services, you agree to these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Use of Services</h2>
            <ul className="space-y-3 mb-8">
              <li>You must be at least 18 years old to use Grow IX.</li>
              <li>You agree not to use our services for unlawful or harmful purposes.</li>
              <li>You are responsible for maintaining the confidentiality of your account.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Intellectual Property</h2>
            <p className="mb-8">
              All content, designs, and materials on Grow IX are protected by copyright. You may not reproduce or redistribute without permission.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Service Availability</h2>
            <p className="mb-8">
              We strive to keep our services available but cannot guarantee uninterrupted access due to maintenance or unforeseen issues.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Limitation of Liability</h2>
            <p className="mb-8">
              Grow IX is not liable for indirect damages, data loss, or third-party actions resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Changes to Terms</h2>
            <p className="mb-8">
              We may update these Terms at any time. Continued use of our services means you accept the updated terms.
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
