'use client';

import { useEffect, useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import LoadingSpinner from '@/components/LoadingSpinner';
import { SecurityIcon, SpeedIcon, UserIcon, BlockchainIcon } from '@/components/icons';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Blockchain Technology
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl md:text-2xl mb-8">
              Making blockchain accessible, secure, and efficient for everyone
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Your Journey
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why We Need Better Data Verification</h2>
          </ScrollAnimation>
          
          {/* Flow Chart Visualization */}
          <ScrollAnimation>
            <div className="relative mb-16">
              <div className="flex flex-col items-center">
                {/* DEX Data Sources */}
                <div className="flex justify-center space-x-8 mb-8">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">DEX 1</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Order Books</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">DEX 2</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Transactions</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">DEX 3</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Liquidity</div>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="w-1 h-8 bg-blue-500 dark:bg-blue-400"></div>

                {/* Aggregation Point */}
                <div className="bg-blue-500 dark:bg-blue-600 p-6 rounded-lg shadow-lg">
                  <div className="text-white font-semibold">Price Data</div>
                  <div className="text-blue-100 text-sm">Current Scope</div>
                </div>

                {/* Connection Lines */}
                <div className="w-1 h-8 bg-blue-500 dark:bg-blue-400"></div>

                {/* Untapped Potential */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg opacity-50">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">ML Models</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Training Data</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg opacity-50">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Auditors</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Verification</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg opacity-50">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Analysts</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Insights</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg opacity-50">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Researchers</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Narrative Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Current Reality</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Today's DEX aggregators have mastered the art of collecting and analyzing price data from multiple sources. But this is just the tip of the iceberg in a vast ocean of untapped potential.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  While we can see price movements and basic transaction data, we're missing the deeper insights that could revolutionize how we understand and interact with financial markets.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Untapped Potential</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Imagine a world where every piece of financial data is verifiable, accessible, and interconnected. Where ML engineers can train models on comprehensive datasets, auditors can verify transactions in real-time, and researchers can uncover patterns that were previously hidden.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  This isn't just about better data – it's about creating a foundation for a more transparent, efficient, and innovative financial ecosystem.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section id="solution" className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Constellation Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Cross-Chain Liquidity & Pricing Intelligence</h2>
            <p className="text-xl text-center text-gray-300 mb-16">What We Can Do Right Now</p>
          </ScrollAnimation>

          {/* Main Visualization */}
          <ScrollAnimation>
            <div className="relative mb-16">
              <div className="flex flex-col items-center">
                {/* Chain Logos */}
                <div className="flex justify-center space-x-12 mb-12">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white font-semibold">Solana</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white font-semibold">Ethereum</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-white font-semibold">Avalanche</div>
                  </div>
                </div>

                {/* Central Engine */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                  <div className="bg-blue-500 p-8 rounded-full shadow-lg relative">
                    <div className="text-white font-bold text-xl">TheSCAN Liquidity Engine</div>
                  </div>
                </div>

                {/* Output Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <div className="text-white font-semibold">Price</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <div className="text-white font-semibold">Order Book</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <div className="text-white font-semibold">Depth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <div className="text-white font-semibold">Volatility</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                    <div className="text-white font-semibold">Liquidation Risk</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation direction="right">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Current Capabilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Index all major chains (Solana, Ethereum, Avalanche)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Aggregate pricing + order book data across all DEXs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Normalize for liquidity depth, arbitrage windows, liquidation risk</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Market Opportunity</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Synthesize siloed DEX data into a unified market layer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Own liquidity health + real-time DEX depth cross-chain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Power DeFi analytics, risk engines, and ML models</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Future Section */}
      <section id="vision" className="w-full py-20 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Globe Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-4 text-white">From Local Chains to Global Context</h2>
            <p className="text-xl text-center text-gray-300 mb-16">The Future of Cross-Chain Infrastructure</p>
          </ScrollAnimation>

          {/* Main Visualization */}
          <ScrollAnimation>
            <div className="relative mb-16">
              <div className="flex flex-col items-center">
                {/* Chain Types */}
                <div className="flex justify-between w-full mb-12">
                  {/* Private Chains */}
                  <div className="flex flex-col items-center">
                    <div className="bg-purple-500/20 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30">
                      <div className="text-white font-semibold text-lg">Private Chains</div>
                      <div className="text-purple-300 text-sm mt-2">GovChain</div>
                      <div className="text-purple-300 text-sm">Enterprise</div>
                    </div>
                  </div>

                  {/* Public Chains */}
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-500/20 backdrop-blur-sm p-6 rounded-lg border border-blue-500/30">
                      <div className="text-white font-semibold text-lg">Public Chains</div>
                      <div className="text-blue-300 text-sm mt-2">Solana</div>
                      <div className="text-blue-300 text-sm">Ethereum</div>
                    </div>
                  </div>
                </div>

                {/* Central Core */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl rounded-full"></div>
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-full shadow-lg relative">
                    <div className="text-white font-bold text-xl">TheSCAN Core</div>
                  </div>
                </div>

                {/* Output Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/10">
                    <div className="text-white font-semibold">Compliance</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/10">
                    <div className="text-white font-semibold">RWA Valuation</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/10">
                    <div className="text-white font-semibold">Cross-Chain Flow</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/10">
                    <div className="text-white font-semibold">Risk Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation direction="right">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Institutional Needs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-gray-300">Transparency with Control: Permissioned chains gain visibility without compromising security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-gray-300">Cross-System Risk Monitoring: Track systemic risk and arbitrage across chains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-gray-300">Regulatory-Grade Intelligence: Trace asset provenance across crypto and RWA spectrum</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">TheSCAN's Role</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Bridge between private and public chains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Global context layer for asset intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">Real-time data for pricing, compliance, and risk</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          {/* Quote */}
          <ScrollAnimation>
            <div className="mt-16 text-center">
              <blockquote className="text-2xl text-white/80 italic">
                "A central bank with a private chain CBDC plugs into TheSCAN to see how it's being arbitraged or priced against DeFi liquidity across Solana and Ethereum."
              </blockquote>
            </div>
          </ScrollAnimation>

          {/* Footer */}
          <ScrollAnimation>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-300">
                TheSCAN becomes the cross-chain asset visibility layer for institutions, governments, and DeFi
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
} 