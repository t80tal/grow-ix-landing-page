import React from 'react';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy'
};

export default function RefundPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-8">
              At Grow IX, customer satisfaction is important to us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Refund Eligibility</h2>
            <ul className="space-y-3 mb-8">
              <li>Refunds are available within 14 days of purchase, provided you have not yet published or launched your landing page.</li>
              <li>If you have used premium features or custom designs, partial refunds may apply at our discretion.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">Non-Refundable Cases</h2>
            <ul className="space-y-3 mb-8">
              <li>Services already delivered in full (such as completed custom designs).</li>
              <li>Subscriptions after the trial or refund period has ended.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-6">How to Request a Refund</h2>
            <p className="mb-8">
              Please contact our support team with your order details at{' '}
              <a href="mailto:support@grow-ix.com" className="text-emerald-600 hover:text-emerald-700 underline">
                support@grow-ix.com
              </a>
              . Refunds will be processed back to your original payment method within 5–10 business days.
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
