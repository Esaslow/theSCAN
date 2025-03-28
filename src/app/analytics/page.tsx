'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Brain, 
  LineChart, 
  User, 
  Scale, 
  Database, 
  Clock,
  Lock,
  Sparkles,
  Network,
  Shield,
  Globe,
  BarChart
} from 'lucide-react';
import ContactSalesModal from '@/components/ContactSalesModal';

const categories = [
  {
    title: "Cross-Chain Intelligence",
    icon: Brain,
    color: "from-purple-500 to-blue-500",
    features: [
      "Bridge transaction matching",
      "Bridge latency distribution by protocol",
      "Cross-chain price discrepancies",
      "Bridged volume by chain pair",
      "NFT bridging traceability",
      "Cross-chain liquidity fragmentation visualization",
      "Bridged asset depeg detection",
      "Multi-hop bridging path discovery",
      "Cross-chain gas fee arbitrage insight",
      "Cross-chain asset rebalance tracker",
      "Cross-chain MEV path tracking",
      "Validator slashing propagation",
      "Phantom transactions detection",
      "Reentrancy attack surface analysis",
      "Teleportation detection"
    ]
  },
  {
    title: "Market Analytics",
    icon: LineChart,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Price at custom intervals",
      "Historical oracle vs DEX pricing spread",
      "DEX TWAP per block",
      "Per-token liquidity depth analysis",
      "Net inflow/outflow tracking",
      "Wallet-specific cost basis tracking",
      "Realized vs unrealized gain analysis",
      "Stale price detection",
      "Peg deviation monitoring",
      "Sandwich attack profit estimates",
      "L2-native asset arbitrage",
      "Whale market impact simulation",
      "NFT collection floor price history",
      "LP impermanent loss tracking",
      "NFT mint vs resale delta analysis",
      "Token unlock forecasting",
      "Liquidity mirage detection",
      "TVL breakdown analysis"
    ]
  },
  {
    title: "Wallet Intelligence",
    icon: User,
    color: "from-cyan-500 to-teal-500",
    features: [
      "Cross-chain wallet clustering",
      "Recurring purchase pattern detection",
      "Smart money wallet tracking",
      "NFT flipper analytics",
      "Dormant wallet revival alerts",
      "First-time buyer behavior analysis",
      "Cold wallet exchange outflows",
      "Multisig participation patterns",
      "Rug-pull wallet similarity scoring",
      "Wallet activity streaks",
      "Wallet aging curve analysis",
      "DeFi strategy replay",
      "Early investor tracking",
      "Whale scouting detection",
      "Burn address interaction alerts"
    ]
  },
  {
    title: "Compliance & Risk",
    icon: Scale,
    color: "from-teal-500 to-emerald-500",
    features: [
      "OFAC address proximity scoring",
      "Mixer proximity chain analysis",
      "Flash loan abuse detection",
      "Rug-pull pattern detection",
      "Smart contract exploit simulations",
      "Zero day deploy-drain detection",
      "Wash trading detection",
      "High-risk bridges scorecard",
      "Chain-hopping fraud detection",
      "Token honeypot detection",
      "Contract change frequency alerts",
      "Phishing scam tracking"
    ]
  },
  {
    title: "ML-Ready Data",
    icon: Database,
    color: "from-emerald-500 to-green-500",
    features: [
      "Feature vector extraction",
      "Contract usage embeddings",
      "Time-windowed label-ready data",
      "Latent wallet similarity analysis",
      "NFT metadata fusion vector",
      "Contract similarity scoring",
      "Contract creation lag analysis",
      "Asset bootstrapping pattern detection",
      "Chain-level congestion trends",
      "Airdrop farm detection dataset"
    ]
  },
  {
    title: "Time-Series Insights",
    icon: Clock,
    color: "from-green-500 to-lime-500",
    features: [
      "Custom interval snapshotting",
      "Weekend vs weekday analysis",
      "Pre/post news event tracking",
      "Gas wars timeline mapping",
      "Contract usage decay curves",
      "Token launch lifecycle analytics",
      "Repeated transaction detection",
      "Protocol uptime monitoring",
      "Seasonal staking trends",
      "Bridge cold hours analysis"
    ]
  }
];

export default function AnalyticsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Blockchain Analytics Platform
            </h1>
            <p className="text-xl text-gray-300">
              Unlock the power of cross-chain intelligence with our premium analytics suite
            </p>
          </div>

          {/* Category Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  selectedCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white`
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />
                <span className="text-xs sm:text-sm font-medium">{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories[selectedCategory].features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-4 sm:p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{feature}</h3>
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-400">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Premium Feature
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to unlock these insights?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get access to all premium features with our enterprise subscription
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="glass-effect px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Contact Sales
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
} 