import { useState } from 'react';
import { Check, Clock, Copy, Download, MapPin, Send } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personal } from '../data/resume';

const elsewhere = [
  { icon: LinkedInIcon, label: 'LinkedIn', value: 'linkedin.com/in/linked-vip-in', href: personal.linkedin },
  { icon: GitHubIcon, label: 'GitHub', value: 'github.com/kvipz', href: personal.github },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked by the browser; the mailto button still works.
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="card glow p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          {/* Why reach out */}
          <div className="lg:col-span-3 p-8 md:p-10 flex flex-col">
            <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-4">
              Let's talk <span className="gradient-text">platforms</span>.
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Whether you're hiring for platform leadership, want to compare notes on landing zones and
              platform-as-a-product, or just want to talk engineering culture — email is the quickest way
              to reach me.
            </p>
            <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-slate-500 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-sky-500" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-sky-500" />
                IST (UTC+5:30)
              </span>
            </div>
          </div>

          {/* How to reach me */}
          <div className="lg:col-span-2 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/50">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-2">Email</p>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-white font-medium break-all">{personal.email}</span>
              <button
                onClick={copyEmail}
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                title={copied ? 'Copied' : 'Copy'}
                className="flex-shrink-0 p-1.5 rounded-md text-slate-500 hover:text-sky-400 hover:bg-slate-800/50 transition-colors"
              >
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              </button>
              <span className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
            </div>

            <a href={`mailto:${personal.email}`} className="btn-primary justify-center w-full">
              <Send size={16} />
              Send an Email
            </a>
            <a
              href={personal.cv}
              download="Vipin_Kumar_Resume.pdf"
              className="btn-outline justify-center w-full mt-3"
            >
              <Download size={16} />
              Export Resume (PDF)
            </a>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">Elsewhere</p>
              <ul className="space-y-2.5">
                {elsewhere.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm"
                    >
                      <Icon size={16} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                      <span className="text-slate-300 group-hover:text-sky-400 transition-colors">{value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
