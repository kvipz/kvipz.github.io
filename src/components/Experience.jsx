import { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { experience } from '../data/resume';

function ExperienceCard({ job, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className="relative pl-10">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-5 w-4 h-4 rounded-full border-2 ${
          job.current
            ? 'bg-sky-400 border-sky-400 shadow-lg shadow-sky-400/40'
            : 'bg-navy-800 border-slate-600'
        }`}
      />

      {/* Card */}
      <div className="card mb-6 group">
        <div
          className="flex items-start justify-between gap-4 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{job.role}</h3>
              {job.current && (
                <span className="tag text-green-400 bg-green-400/10 border-green-400/20">
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-sky-400 font-semibold text-sm">{job.company}</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-sm">{job.location}</span>
              <span className="text-slate-600 text-xs">·</span>
              <span className="text-slate-500 text-sm font-mono">{job.period}</span>
            </div>
          </div>
          <button className="text-slate-600 hover:text-sky-400 transition-colors mt-1 flex-shrink-0">
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {expanded && (
          <ul className="mt-4 space-y-2 border-t border-slate-800 pt-4">
            {job.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-navy-800/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Career Journey</p>
          <h2 className="section-heading">Work Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-px timeline-line" />

          {experience.map((job, i) => (
            <ExperienceCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
