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

export default function Team() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <ScrollAnimation>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Meet The Team
          </h1>
          <p className="text-lg sm:text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Building the future of blockchain analytics with expertise from traditional finance and Web3.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <ScrollAnimation key={member.name} delay={index * 0.2}>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:brightness-110 transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center border-4 border-primary-500/20">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                <p className="text-primary-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
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
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
} 