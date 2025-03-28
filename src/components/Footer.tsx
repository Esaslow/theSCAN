import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass-effect">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TheSCAN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 