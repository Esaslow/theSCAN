import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-effect">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">TheSCAN</h3>
            <p className="text-gray-300">
              Empowering institutions with real-time market insights and cross-chain analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#problem" className="text-gray-300 hover:text-white transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="#solution" className="text-gray-300 hover:text-white transition-colors">
                  Analytics Platform
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-gray-300 hover:text-white transition-colors">
                  Future Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@thescan.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@thescan.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/thescan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/thescan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TheSCAN. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 