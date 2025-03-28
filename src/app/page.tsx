'use client';

import { useEffect, useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import LoadingSpinner from '@/components/LoadingSpinner';
import FragmentedSkies from '@/components/FragmentedSkies';
import { 
  SecurityIcon, 
  SpeedIcon, 
  UserIcon, 
  BlockchainIcon
} from '@/components/icons';
import {
  Shield,
  Database,
  LineChart,
  Globe,
  Lock,
  Zap,
  Users,
  CreditCard,
  BarChart,
  Network
} from 'lucide-react';
import LiquidityVisualization from '@/components/LiquidityVisualization';
import Link from 'next/link';
import ContactSalesModal from '@/components/ContactSalesModal';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
      <section id="home" className="w-full bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-12 sm:py-20 relative overflow-hidden">
        {/* Enhanced animated background grid */}
        <div className="absolute inset-0 bg-grid opacity-10 animate-pulse"></div>
        
        {/* Enhanced animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[20rem] sm:w-[40rem] h-[20rem] sm:h-[40rem] bg-secondary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollAnimation>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary-400 to-purple-400">
              Data-Driven Financial Intelligence
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto">
              Empowering institutions with real-time market insights and cross-chain analytics
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <Link href="/analytics" className="glass-effect px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
              Explore Analytics
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="w-full min-h-screen py-12 sm:py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gradient">The Fragmented Skies</h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Visual */}
            <ScrollAnimation direction="right">
              <div className="w-full max-w-md mx-auto">
                <FragmentedSkies />
              </div>
            </ScrollAnimation>

            {/* Right Text */}
            <ScrollAnimation direction="left">
              <div className="space-y-6 sm:space-y-8">
                <div className="glass-effect p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">The Current State of Blockchain</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Every blockchain is like an airport tracking only its own planes. As assets move across chains, data drops off radar. No one sees the full flight path.
                  </p>
                </div>
                
                <div className="glass-effect p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">The Consequences</h3>
                  <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">•</span>
                      <span>Liquidity gets lost in the void between chains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">•</span>
                      <span>Arbitrage opportunities go unseen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">•</span>
                      <span>Risks pile up unnoticed in the darkness</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-effect p-6 sm:p-8 rounded-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">The Challenge</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Just as air traffic control needs a unified view of all aircraft, blockchain ecosystems need a comprehensive view of all assets and transactions across chains.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section id="solution" className="w-full py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gradient">Global Liquidity Intelligence Layer</h2>
            <p className="text-lg sm:text-xl text-center text-gray-300 mb-8">Connecting the Fragmented Blockchain Ecosystem</p>
          </ScrollAnimation>

          {/* Vision Statement */}
          <ScrollAnimation>
            <div className="glass-effect p-6 sm:p-8 rounded-xl mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                As blockchain ecosystems scale from a few dominant L1s to a sprawling web of public, private, and permissioned chains—each hosting fragmented liquidity, localized DeFi markets, and tokenized real-world assets (RWAs)—the need for unified, interpretable intelligence becomes existential.
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <ScrollAnimation>
              <div className="glass-effect p-4 sm:p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <Network className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Cross-Chain Intelligence</h3>
                <p className="text-sm sm:text-base text-gray-300">Unified liquidity and asset data across heterogeneous chains, with unique bridging transaction visibility</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-4 sm:p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Transaction Intelligence</h3>
                <p className="text-sm sm:text-base text-gray-300">Contextualized transaction tracking across silos, enabling comprehensive asset movement analysis</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="glass-effect p-4 sm:p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Private Chain Integration</h3>
                <p className="text-sm sm:text-base text-gray-300">Seamless integration of private blockchains into the global visibility framework</p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Visualization and Use Case Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            {/* Liquidity Visualization */}
            <ScrollAnimation>
              <div className="glass-effect p-4 rounded-xl w-full max-w-[500px] mx-auto">
                <div className="relative w-full aspect-square bg-gray-900/30 rounded-xl overflow-hidden">
                  <LiquidityVisualization />
                </div>
              </div>
            </ScrollAnimation>

            {/* Use Case Example */}
            <ScrollAnimation>
              <div className="glass-effect p-6 sm:p-8 rounded-xl">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Institutional Use Case</h3>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-300">
                    Imagine a central bank running a CBDC on a private chain. With TheSCAN, they could:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span className="text-base sm:text-lg text-gray-300">Track interaction points across the entire DeFi landscape</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span className="text-base sm:text-lg text-gray-300">Ensure compliance and spot risks in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span className="text-base sm:text-lg text-gray-300">Price assets accurately using real liquidity conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ScrollAnimation>
              <div className="glass-effect p-4 sm:p-6 rounded-xl text-center hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <div className="text-xl sm:text-2xl font-bold text-primary-400">100+</div>
                <div className="text-sm sm:text-base text-gray-300">Connected Chains</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-4 sm:p-6 rounded-xl text-center hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <div className="text-xl sm:text-2xl font-bold text-primary-400">24/7</div>
                <div className="text-sm sm:text-base text-gray-300">Real-time Monitoring</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="glass-effect p-4 sm:p-6 rounded-xl text-center hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <div className="text-xl sm:text-2xl font-bold text-primary-400">50ms</div>
                <div className="text-sm sm:text-base text-gray-300">Data Latency</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Future Section */}
      <section id="vision" className="w-full py-12 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Dotted lines for cross-chain movement */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gradient">The Global Asset Intelligence Layer</h2>
            <p className="text-lg sm:text-xl text-center text-gray-300 mb-8 sm:mb-16">Every asset. Every chain. One view.</p>
          </ScrollAnimation>

          {/* Global Data Bridge Diagram */}
          <div className="relative mb-8 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Left: GovChain */}
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 w-full sm:w-auto">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">GovChain</h3>
                    <p className="text-sm sm:text-base text-gray-400">Secure Private Chain</p>
                  </div>
                </div>
              </div>

              {/* Middle: TheSCAN Node */}
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 w-full sm:w-auto">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl">
                    <Network className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">TheSCAN Node</h3>
                    <p className="text-sm sm:text-base text-gray-400">Intelligence Layer</p>
                  </div>
                </div>
              </div>

              {/* Right: Public Chains */}
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 w-full sm:w-auto">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Public Chains</h3>
                    <p className="text-sm sm:text-base text-gray-400">Global Network</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="glass-effect px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-white text-base sm:text-lg">Normalization Engine</span>
                </div>
              </div>
              <div className="glass-effect px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-white text-base sm:text-lg">Global Visibility</span>
                </div>
              </div>
              <div className="glass-effect px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Network className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-white text-base sm:text-lg">Analytics APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Output Interfaces */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <ScrollAnimation>
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Compliance Dashboard</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">Real-time regulatory compliance monitoring across all chains</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Network className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Asset Flow Map</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">Visual tracking of cross-chain asset movements</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Risk Monitor</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">Real-time risk assessment across the ecosystem</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <div className="glass-effect p-6 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-2 sm:p-3 bg-blue-500/10 rounded-xl w-fit mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <BarChart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Pricing Interface</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">CBDC and RWA pricing across all chains</p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Footer Quote */}
          <ScrollAnimation>
            <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-center hover:border-blue-500/30 transition-all duration-500">
              <p className="text-xl text-gray-400 hover:text-blue-300/90 transition-colors duration-500">
                From private CBDCs to public DeFi — TheSCAN gives you full-spectrum clarity.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get instant insights into blockchain data with our powerful analytics engine.
              </p>
              <Link 
                href="/analytics" 
                className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
              >
                View Analytics
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cross-chain Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Monitor and analyze data across multiple blockchain networks seamlessly.
              </p>
              <Link 
                href="/analytics" 
                className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
              >
                Explore Networks
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Reports</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate detailed reports tailored to your specific needs and requirements.
              </p>
              <Link 
                href="/analytics" 
                className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
              >
                Create Reports
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing blockchain analytics and data management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/analytics" 
              className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
              Start Exploring
            </Link>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-500 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 border border-blue-500"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 