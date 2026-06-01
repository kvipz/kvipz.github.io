import { Heart } from 'lucide-react';
import { personal } from '../data/resume';

const links = ['#about', '#experience', '#skills', '#certifications', '#interests', '#contact'];
const labels = ['About', 'Experience', 'Skills', 'Certifications', 'Interests', 'Contact'];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono text-sky-400 font-semibold text-lg">
            &lt;vipin /&gt;
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((href, i) => (
              <a
                key={href}
                href={href}
                className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
              >
                {labels[i]}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-sky-400" /> by {personal.name}
          </p>
        </div>

        <div className="mt-6 text-center text-slate-700 text-xs">
          © {new Date().getFullYear()} {personal.name} · All rights reserved
        </div>
      </div>
    </footer>
  );
}
