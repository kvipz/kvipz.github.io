import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personal, highlights } from '../data/resume';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          Open to senior engineering opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 animate-fade-in-up">
          {personal.name}
        </h1>

        {/* Title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 animate-fade-in-up">
          <span className="text-xl sm:text-2xl font-semibold gradient-text">{personal.title}</span>
          <span className="hidden sm:block text-slate-600">|</span>
          <span className="text-xl sm:text-2xl text-slate-400 font-medium">{personal.subtitle}</span>
        </div>

        {/* Summary */}
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up">
          {personal.summary}
        </p>

        {/* Location + 15 years badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up">
          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
            <MapPin size={14} className="text-sky-400" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
            <span className="text-sky-400">⏱</span>
            15+ years of experience
          </span>
          <span className="flex items-center gap-1.5 text-slate-400 text-sm">
            <span className="text-sky-400">☁️</span>
            AWS · Azure · Kubernetes
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
          <a href="#contact" className="btn-primary">
            <Mail size={16} />
            Get In Touch
          </a>
          <a href="#experience" className="btn-outline">
            View My Work
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 animate-fade-in">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-500 hover:text-sky-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Key highlights strip */}
      <div className="relative w-full max-w-5xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="card text-center group cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{h.icon}</div>
              <div className="text-sky-400 font-bold text-lg font-mono mb-1">{h.metric}</div>
              <div className="text-white font-semibold text-sm mb-2">{h.title}</div>
              <p className="text-slate-500 text-xs leading-relaxed hidden group-hover:block transition-all">
                {h.description}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed group-hover:hidden">
                {h.description.slice(0, 60)}…
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-sky-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
