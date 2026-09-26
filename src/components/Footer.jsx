import { Heart } from 'lucide-react';
import { personal } from '../data/resume';
import { navLinks } from '../data/navLinks';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono text-sky-400 font-semibold text-lg">
            &lt;vipin /&gt;
          </a>

          {/* Nav links — shared with Navbar, single source of truth */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-sky-400" /> by {personal.name}
          </p>
        </div>

        <div className="mt-6 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} {personal.name} · All rights reserved
        </div>
      </div>
    </footer>
  );
}
