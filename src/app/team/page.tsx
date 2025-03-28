'use client';

import { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Github, 
  Linkedin, 
  Twitter,
  Mail
} from 'lucide-react';
import ContactSalesModal from '@/components/ContactSalesModal';
import Head from 'next/head';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Elliott Saslow",
    role: "Co-Founder & CEO",
    bio: "Currently leading Enterprise Incubation at Allora, previously Solutions Engineer at Udacity. Holds degrees in Engineering Physics and Economics from CU Boulder.",
    image: "/team/elliott.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/elliott-saslow/",
      twitter: "https://x.com/too_flyyy",
      email: "elliott@the-scan.io"
    }
  },
  {
    name: "Bryn Bellomy",
    role: "Co-Founder & CTO",
    bio: "Georgetown graduate with extensive blockchain leadership experience as Head of Core Engineering at Chainlink, Head of Engineering at Allora, and senior roles at Consensys and Block Party.",
    image: "/team/bryn.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/bryn-bellomy/",
      email: "bryn@the-scan.io"
    }
  }
];

// Enhanced structured data for the team page
const teamStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TheSCAN",
  "description": "TheSCAN is a leading blockchain analytics platform providing cross-chain liquidity intelligence, real-time market data, and enterprise-grade blockchain infrastructure solutions.",
  "url": "https://the-scan.io",
  "logo": "https://the-scan.io/logo.png",
  "sameAs": [
    "https://x.com/too_flyyy"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Elliott Saslow",
      "jobTitle": "Co-Founder & CEO",
      "description": "Currently leading Enterprise Incubation at Allora, previously Solutions Engineer at Udacity. Holds degrees in Engineering Physics and Economics from CU Boulder.",
      "sameAs": [
        "https://www.linkedin.com/in/elliott-saslow/",
        "https://x.com/too_flyyy"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "TheSCAN"
      }
    },
    {
      "@type": "Person",
      "name": "Bryn Bellomy",
      "jobTitle": "Co-Founder & CTO",
      "description": "Georgetown graduate with extensive blockchain leadership experience as Head of Core Engineering at Chainlink, Head of Engineering at Allora, and senior roles at Consensys and Block Party.",
      "sameAs": [
        "https://www.linkedin.com/in/bryn-bellomy/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "TheSCAN"
      }
    }
  ],
  "knowsAbout": [
    "Blockchain Analytics",
    "Web3",
    "Cross-chain Technology",
    "Data Analytics",
    "Enterprise Solutions",
    "Blockchain Infrastructure",
    "Liquidity Intelligence",
    "Real-time Market Data",
    "Blockchain Monitoring",
    "DeFi Analytics",
    "Cross-chain Transactions",
    "Blockchain Security"
  ]
};

export default function Team() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Blockchain Analytics Leadership Team | TheSCAN - Cross-chain Liquidity Intelligence</title>
        <meta name="description" content="Meet TheSCAN's leadership team: Elliott Saslow (Co-Founder & CEO) and Bryn Bellomy (Co-Founder & CTO). Leading blockchain analytics platform providing cross-chain liquidity intelligence and real-time market data solutions." />
        <meta name="keywords" content="blockchain analytics, Web3, cross-chain analytics, liquidity intelligence, blockchain monitoring, DeFi analytics, real-time market data, blockchain infrastructure, Elliott Saslow, Bryn Bellomy, TheSCAN team, blockchain leadership, Chainlink, Allora, Consensys, cross-chain transactions, blockchain security, enterprise blockchain, data analytics, blockchain technology, Web3 infrastructure" />
        <meta name="author" content="TheSCAN" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://the-scan.io/team" />
        <meta property="og:title" content="Blockchain Analytics Leadership Team | TheSCAN - Cross-chain Liquidity Intelligence" />
        <meta property="og:description" content="Meet TheSCAN's leadership team: Elliott Saslow (Co-Founder & CEO) and Bryn Bellomy (Co-Founder & CTO). Leading blockchain analytics platform providing cross-chain liquidity intelligence and real-time market data solutions." />
        <meta property="og:image" content="https://the-scan.io/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://the-scan.io/team" />
        <meta property="twitter:title" content="Blockchain Analytics Leadership Team | TheSCAN - Cross-chain Liquidity Intelligence" />
        <meta property="twitter:description" content="Meet TheSCAN's leadership team: Elliott Saslow (Co-Founder & CEO) and Bryn Bellomy (Co-Founder & CTO). Leading blockchain analytics platform providing cross-chain liquidity intelligence and real-time market data solutions." />
        <meta property="twitter:image" content="https://the-scan.io/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://the-scan.io/team" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <ScrollAnimation>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Blockchain Analytics Leadership Team
            </h1>
            <p className="text-lg sm:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Building the future of cross-chain liquidity intelligence and blockchain analytics with expertise from traditional finance and Web3.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <ScrollAnimation key={member.name} delay={index * 0.2}>
                <article className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20 blur-xl"></div>
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center border-4 border-primary-500/20">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white text-center mb-2">{member.name}</h2>
                  <p className="text-primary-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-300 text-center mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`Contact ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
} 