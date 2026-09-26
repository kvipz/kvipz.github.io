import { useState } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import { experience, eras, education } from '../data/resume';

const VISIBLE_BULLETS = 4;

function companiesFor(era) {
  return era.companies.map((company) => {
    const roles = experience.filter((job) => job.company === company);
    const start = roles[roles.length - 1].period.split('–')[0].trim();
    const end = (roles[0].period.split('–')[1] || '').trim();
    return {
      company,
      location: roles[0].location,
      period: end ? `${start} – ${end}` : start,
      roles,
    };
  });
}

function Role({ job, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = job.highlights.length - VISIBLE_BULLETS;
  const collapsible = hidden > 1;
  const bullets = expanded || !collapsible ? job.highlights : job.highlights.slice(0, VISIBLE_BULLETS);

  return (
    <li className={`relative pl-7 ${isLast ? '' : 'pb-8'}`}>
      {!isLast && <span className="absolute left-[5px] top-4 bottom-0 w-px bg-slate-800" />}
      <span
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${
          job.current ? 'bg-sky-400 border-sky-400 animate-pulse-slow' : 'border-slate-600'
        }`}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="text-white font-semibold leading-snug">{job.role}</h4>
          {job.current && (
            <span className="tag text-green-400 bg-green-400/10 border-green-400/20">Current</span>
          )}
        </div>
        <span className="text-slate-500 text-xs font-mono whitespace-nowrap">{job.period}</span>
      </div>

      <ul className="space-y-2">
        {bullets.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
            <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-sky-400/70" />
            {h}
          </li>
        ))}
      </ul>

      {collapsible && (
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-3 inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 text-xs font-medium transition-colors"
        >
          {expanded ? 'Show less' : `Show ${hidden} more`}
          <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 theme-section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subheading">Career Journey</p>
          <h2 className="section-heading">My Timeline</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4 mb-5" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Three chapters — from telecom networks, through cloud architecture, to owning and leading
            enterprise platforms.
          </p>
        </div>

        <div className="space-y-16">
          {eras.map((era, i) => (
            <div key={era.title} className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">
              <header className="lg:sticky lg:top-24 self-start">
                <p className="text-sky-500 font-mono text-xs uppercase tracking-widest">
                  Chapter {String(i + 1).padStart(2, '0')} · {era.period}
                </p>
                <h3 className="text-white text-xl font-bold mt-2 leading-snug">{era.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">{era.blurb}</p>
              </header>

              <div className="space-y-4">
                {companiesFor(era).map((c) => (
                  <article key={c.company} className="card">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-6">
                      <h3 className="text-sky-400 font-semibold">{c.company}</h3>
                      <span className="text-slate-500 text-xs">
                        {c.location}
                        {c.roles.length > 1 && <> · {c.period} · {c.roles.length} roles</>}
                      </span>
                    </div>
                    <ol>
                      {c.roles.map((job, j) => (
                        <Role key={job.role} job={job} isLast={j === c.roles.length - 1} />
                      ))}
                    </ol>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-10">
            <p className="text-sky-500 font-mono text-xs uppercase tracking-widest lg:pt-1">
              Where it started · {education.year}
            </p>
            <div className="flex items-start gap-3">
              <GraduationCap size={20} className="text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{education.degree}</p>
                <p className="text-slate-500 text-sm">{education.school}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
