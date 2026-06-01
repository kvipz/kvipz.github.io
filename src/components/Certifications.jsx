import { certifications } from '../data/resume';
import { ExternalLink } from 'lucide-react';

const borderColors = {
  sky:    'hover:border-sky-500/50 hover:shadow-sky-500/10',
  blue:   'hover:border-blue-500/50 hover:shadow-blue-500/10',
  orange: 'hover:border-orange-500/50 hover:shadow-orange-500/10',
  purple: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
};

const yearColors = {
  sky:    'text-sky-400 bg-sky-400/10',
  blue:   'text-blue-400 bg-blue-400/10',
  orange: 'text-orange-400 bg-orange-400/10',
  purple: 'text-purple-400 bg-purple-400/10',
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 theme-section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 text-sm">
            7 industry certifications across Cloud, Kubernetes and IaC
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.credly}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center text-center p-6 rounded-xl border border-slate-800 theme-card transition-all duration-300 hover:shadow-lg ${borderColors[cert.color]}`}
            >
              {/* Badge image */}
              <div className="relative w-28 h-28 mb-5 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                  cert.color === 'sky' ? 'bg-sky-400' :
                  cert.color === 'blue' ? 'bg-blue-400' :
                  cert.color === 'orange' ? 'bg-orange-400' : 'bg-purple-400'
                }`} />
                <img
                  src={cert.logo}
                  alt={`${cert.name} badge`}
                  className="w-24 h-24 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Cert name */}
              <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-sky-100 transition-colors">
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="text-slate-500 text-xs mb-3">{cert.issuer}</p>

              {/* Bottom row: abbr + year */}
              <div className="flex items-center gap-2 mt-auto">
                <span className="font-mono text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {cert.abbr}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded font-mono ${yearColors[cert.color]}`}>
                  {cert.year}
                </span>
              </div>

              {/* Hover hint */}
              <div className="flex items-center gap-1 mt-3 text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                <ExternalLink size={10} />
                <span>View credential</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
