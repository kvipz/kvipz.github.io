import { useState, useEffect } from 'react';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personal, highlights } from '../data/resume';
import { yearsFrom, poeticExperience, CAREER_START } from '../utils/dates';

export default function Hero() {
  const expYears  = yearsFrom(CAREER_START);
  const expPoetic = poeticExperience(CAREER_START);
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % personal.roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
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

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Two-column: photo left, text right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 mb-16">

          {/* Right – text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 animate-fade-in-up leading-tight">
              {personal.name}
            </h1>

            {/* Animated rotating role */}
            <div className="mb-5 animate-fade-in-up">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <span
                  className="text-xl sm:text-2xl font-bold gradient-text transition-opacity duration-300"
                  style={{ opacity: visible ? 1 : 0 }}
                >
                  {personal.roles[roleIndex]}
                </span>
              </div>
              {/* All roles as small pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2">
                {personal.roles.map((role, i) => (
                  <span
                    key={role}
                    className="text-xs px-2.5 py-1 rounded-full border transition-all duration-300 font-medium"
                    style={{
                      borderColor: i === roleIndex ? '#38bdf8' : 'rgba(56,189,248,0.2)',
                      color: i === roleIndex ? '#38bdf8' : '#64748b',
                      backgroundColor: i === roleIndex ? 'rgba(56,189,248,0.08)' : 'transparent',
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 animate-fade-in-up">
              {personal.summary}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up">
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <MapPin size={14} className="text-sky-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <span className="text-sky-400">⏱</span>
                {expPoetic} of experience
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <span className="text-sky-400">☁️</span>
                AWS · Azure · Kubernetes
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                <span className="text-sky-400">🧠</span>
                Systems Thinking
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up">
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
            <div className="flex items-center justify-center lg:justify-start gap-5 animate-fade-in">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-sky-400 transition-colors duration-200" aria-label="LinkedIn">
                <LinkedInIcon size={20} />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-sky-400 transition-colors duration-200" aria-label="GitHub">
                <GitHubIcon size={20} />
              </a>
              <a href={`mailto:${personal.email}`}
                className="text-slate-500 hover:text-sky-400 transition-colors duration-200" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Left – photo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-sky-400/40 to-indigo-400/30 blur-lg" />
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-sky-500/20" />
              <img
                src="/vipin.png"
                alt="Vipin Kumar"
                className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover object-top rounded-full border-2 border-slate-700/60 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Key highlights strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div key={i} className="card text-center group cursor-default">
              <div className="text-2xl mb-2">{h.icon}</div>
              <div className="text-sky-400 font-bold text-lg font-mono mb-1">{h.metric}</div>
              <div className="text-white font-semibold text-sm mb-2">{h.title}</div>
              <p className="text-slate-500 text-xs leading-relaxed hidden group-hover:block">
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
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-sky-400 transition-colors animate-bounce" aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
