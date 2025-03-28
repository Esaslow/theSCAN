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
      <section id="home" className="w-full bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 relative overflow-hidden">
        {/* Enhanced animated background grid */}
        <div className="absolute inset-0 bg-grid opacity-10 animate-pulse"></div>
        
        {/* Enhanced animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-secondary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary-400 to-purple-400">
              Data-Driven Financial Intelligence
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Empowering institutions with real-time market insights and cross-chain analytics
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <Link href="/analytics" className="glass-effect px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
              Explore Analytics
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="problem" className="w-full min-h-screen py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12 text-gradient">The Fragmented Skies</h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <ScrollAnimation direction="right">
              <FragmentedSkies />
            </ScrollAnimation>

            {/* Right Text */}
            <ScrollAnimation direction="left">
              <div className="space-y-8">
                <div className="glass-effect p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">The Current State of Blockchain</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Every blockchain is like an airport tracking only its own planes. As assets move across chains, data drops off radar. No one sees the full flight path.
                  </p>
                </div>
                
                <div className="glass-effect p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">The Consequences</h3>
                  <ul className="space-y-4 text-gray-300 text-lg">
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

                <div className="glass-effect p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">The Challenge</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Just as air traffic control needs a unified view of all aircraft, blockchain ecosystems need a comprehensive view of all assets and transactions across chains.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section id="solution" className="w-full py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">Global Liquidity Intelligence Layer</h2>
            <p className="text-xl text-center text-gray-300 mb-8">Connecting the Fragmented Blockchain Ecosystem</p>
          </ScrollAnimation>

          {/* Vision Statement */}
          <ScrollAnimation>
            <div className="glass-effect p-8 rounded-xl mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                As blockchain ecosystems scale from a few dominant L1s to a sprawling web of public, private, and permissioned chains—each hosting fragmented liquidity, localized DeFi markets, and tokenized real-world assets (RWAs)—the need for unified, interpretable intelligence becomes existential.
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <Network className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Cross-Chain Intelligence</h3>
                <p className="text-gray-300">Unified liquidity and asset data across heterogeneous chains, with unique bridging transaction visibility</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <LineChart className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Transaction Intelligence</h3>
                <p className="text-gray-300">Contextualized transaction tracking across silos, enabling comprehensive asset movement analysis</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <Lock className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Private Chain Integration</h3>
                <p className="text-gray-300">Seamless integration of private blockchains into the global visibility framework</p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Visualization and Use Case Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
            {/* Liquidity Visualization */}
            <ScrollAnimation>
              <div className="glass-effect p-4 rounded-xl w-fit mx-auto">
                <div className="relative w-[500px] aspect-square bg-gray-900/30 rounded-xl overflow-hidden">
                  <LiquidityVisualization />
                </div>
              </div>
            </ScrollAnimation>

            {/* Use Case Example */}
            <ScrollAnimation>
              <div className="glass-effect p-8 rounded-xl">
                <Globe className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Institutional Use Case</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Imagine a central bank running a CBDC on a private chain. With TheSCAN, they could:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span className="text-gray-300">Track interaction points across the entire DeFi landscape</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span className="text-gray-300">Ensure compliance and spot risks in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      <span className="text-gray-300">Price assets accurately using real liquidity conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Pricing & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <CreditCard className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Flexible Pricing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">Usage-based billing tiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">Pay-as-you-go API access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">Competitive enterprise rates</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <Users className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">Dedicated onboarding team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">Custom integration assistance</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation>
              <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-primary-400">100+</div>
                <div className="text-gray-300">Connected Chains</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-primary-400">24/7</div>
                <div className="text-gray-300">Real-time Monitoring</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="glass-effect p-6 rounded-xl text-center hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                <div className="text-2xl font-bold text-primary-400">50ms</div>
                <div className="text-gray-300">Data Latency</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Future Section */}
      <section id="vision" className="w-full py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Dotted lines for cross-chain movement */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-4 text-gradient">The Global Asset Intelligence Layer</h2>
            <p className="text-xl text-center text-gray-300 mb-16">Every asset. Every chain. One view.</p>
          </ScrollAnimation>

          {/* Global Data Bridge Diagram */}
          <div className="relative mb-16">
            <div className="flex items-center justify-between">
              {/* Left: GovChain */}
              <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Shield className="w-10 h-10 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">GovChain</h3>
                    <p className="text-gray-400">Secure Private Chain</p>
                  </div>
                </div>
              </div>

              {/* Middle: TheSCAN Node */}
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                {/* Inner glow */}
                <div className="absolute inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
                {/* Glass container */}
                <div className="relative glass-effect w-48 h-48 rounded-full flex flex-col items-center justify-center bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                  {/* Icon background */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md"></div>
                    <div className="relative w-20 h-20 flex items-center justify-center bg-blue-900/30 rounded-full">
                      <Zap className="w-12 h-12 text-blue-400" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="text-white font-bold text-2xl">TheSCAN</div>
                </div>
              </div>

              {/* Right: Public Chains */}
              <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className="text-blue-400 font-mono font-bold">Ξ</span>
                      </div>
                    </div>
                    <span className="text-lg font-medium text-white">ETH</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className="text-blue-400 font-bold">S</span>
                      </div>
                    </div>
                    <span className="text-lg font-medium text-white">SOL</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className="text-blue-400 font-bold">A</span>
                      </div>
                    </div>
                    <span className="text-lg font-medium text-white">AVAX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Layer */}
            <div className="mt-16 flex justify-center space-x-8">
              <div className="glass-effect px-6 py-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white text-lg">Normalization Engine</span>
                </div>
              </div>
              <div className="glass-effect px-6 py-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white text-lg">Global Visibility</span>
                </div>
              </div>
              <div className="glass-effect px-6 py-4 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Network className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white text-lg">Analytics APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Output Interfaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ScrollAnimation>
              <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Shield className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Compliance Dashboard</h3>
                <p className="text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">Real-time regulatory compliance monitoring across all chains</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <Network className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Asset Flow Map</h3>
                <p className="text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">Visual tracking of cross-chain asset movements</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <LineChart className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Risk Monitor</h3>
                <p className="text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">Real-time risk assessment across the ecosystem</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <div className="glass-effect p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 h-full hover:scale-105 hover:brightness-125 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 cursor-pointer group">
                <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                  <BarChart className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-500">Pricing Interface</h3>
                <p className="text-gray-400 group-hover:text-blue-300/80 transition-colors duration-500">CBDC and RWA pricing across all chains</p>
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
    </div>
  );
} 