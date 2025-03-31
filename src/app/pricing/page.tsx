'use client';

import { useState } from 'react';
import ContactSalesModal from '@/components/ContactSalesModal';

export default function PricingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300">Choose the plan that's right for your business</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Starter Plan */}
          <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$5</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5 transformed datasets
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Static updates every 1 hour
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1,000 API requests per day
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 team members
                </li>
              </ul>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full glass-effect py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 mt-auto"
            >
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="glass-effect rounded-2xl p-8 border border-blue-500 relative flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  10 transformed datasets
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Static updates every 5 minutes
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  10,000 API requests per day
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited team members
                </li>
              </ul>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full glass-effect py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 mt-auto"
            >
              Get Started
            </button>
          </div>

          {/* Scale Plan */}
          <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Scale</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$100</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  25 transformed datasets
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Live updating
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited API requests
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited team members
                </li>
              </ul>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full glass-effect py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 mt-auto"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-effect rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  White glove solution architects
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  White glove customer support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Live updating
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited resources
                </li>
              </ul>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full glass-effect py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 mt-auto"
            >
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">All plans include:</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div>✓ Analytics dashboard</div>
            <div>✓ API access</div>
            <div>✓ Data export</div>
            <div>✓ Security features</div>
            <div>✓ Regular updates</div>
            <div>✓ Training & documentation</div>
          </div>
        </div>
      </div>

      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
} 