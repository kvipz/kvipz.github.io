import { BadgeCheck, Cloud, CloudCog, Container, FileCode2, Network, ShieldCheck } from 'lucide-react';
import { skills } from '../data/resume';

const icons = { Cloud, CloudCog, Container, FileCode2, Network, ShieldCheck };

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">What I Work With</p>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4 mb-5" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Deepest where I work every day — backed by certifications where they exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {skills.core.map((area) => {
            const Icon = icons[area.icon];
            return (
              <article key={area.title} className="card flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-sky-500" />
                  </span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {area.certs.map((cert) => (
                      <a
                        key={cert}
                        href="#certifications"
                        title="Certified — see Certifications"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium text-green-500 bg-green-500/10 border border-green-500/20 hover:border-green-500/50 transition-colors"
                      >
                        <BadgeCheck size={12} />
                        {cert}
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-1.5">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{area.summary}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {area.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded-md text-xs text-slate-300 bg-slate-800/50 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="card">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Also in the toolbox</p>
          <dl className="space-y-3">
            {skills.toolbox.map((row) => (
              <div key={row.label} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4">
                <dt className="text-white text-sm font-medium">{row.label}</dt>
                <dd className="text-slate-400 text-sm leading-relaxed">{row.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
