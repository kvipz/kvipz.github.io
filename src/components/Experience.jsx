import { useState, useRef, useEffect } from 'react';
import { timeline } from '../data/resume';

const NODE_WIDTH = 160;

// Group consecutive jobs at the same company so they can be shown as a cluster.
function buildCompanyGroups() {
  const groups = [];
  let i = 0;
  while (i < timeline.length) {
    const item = timeline[i];
    if (item.type === 'job') {
      let j = i;
      while (j + 1 < timeline.length && timeline[j + 1].type === 'job' && timeline[j + 1].company === item.company) {
        j++;
      }
      if (j > i) groups.push({ start: i, end: j, company: item.company });
      i = j + 1;
    } else {
      i++;
    }
  }
  return groups;
}

const companyGroups = buildCompanyGroups();
const groupedIndices = new Set(companyGroups.flatMap((g) => Array.from({ length: g.end - g.start + 1 }, (_, k) => g.start + k)));

export default function Experience() {
  const defaultIndex = timeline.length - 1; // latest entry
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const trackRef = useRef(null);
  const nodeRefs = useRef([]);
  const active = timeline[activeIndex];

  useEffect(() => {
    nodeRefs.current[defaultIndex]?.scrollIntoView({
      behavior: 'auto',
      inline: 'center',
      block: 'nearest',
    });
  }, [defaultIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    nodeRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section id="experience" className="py-24 px-4 theme-section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Career Journey</p>
          <h2 className="section-heading">My Timeline</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Horizontal scrollable timeline */}
        <div ref={trackRef} className="overflow-x-auto pb-2 -mx-4 px-4">
          <div
            className="relative flex items-start pt-2"
            style={{ minWidth: `${timeline.length * NODE_WIDTH}px` }}
          >
            {/* Base line */}
            <div className="absolute left-0 right-0 top-2 h-px bg-slate-800" />
            {/* Progress line up to active node */}
            <div
              className="absolute left-0 top-2 h-px bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-300"
              style={{ width: `${(activeIndex / (timeline.length - 1)) * 100}%` }}
            />

            {timeline.map((item, i) => {
              const isActive = i === activeIndex;
              const inGroup = groupedIndices.has(i);
              const label = item.type === 'job' ? item.role : item.title;

              let dotClass;
              if (isActive) {
                dotClass = 'bg-sky-400 border-sky-400 shadow-lg shadow-sky-400/40 scale-125';
              } else if (inGroup) {
                dotClass = 'bg-navy-900 border-violet-400/50 group-hover:border-violet-400';
              } else if (item.type === 'milestone') {
                dotClass = 'bg-navy-900 border-indigo-400/50 group-hover:border-indigo-400';
              } else {
                dotClass = 'bg-navy-900 border-slate-600 group-hover:border-sky-400/70';
              }

              return (
                <button
                  key={i}
                  ref={(el) => (nodeRefs.current[i] = el)}
                  onClick={() => handleSelect(i)}
                  className="relative z-10 flex flex-col items-center flex-shrink-0 group"
                  style={{ width: `${NODE_WIDTH}px` }}
                >
                  <span className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${dotClass}`} />
                  <span className="mt-2 text-xs font-mono text-slate-500">{item.year}</span>
                  <span
                    className={`mt-1 text-xs text-center leading-snug px-2 line-clamp-2 ${
                      isActive ? 'text-white font-medium' : 'text-slate-500'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="card mt-6">
          {active.type === 'milestone' ? (
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{active.icon}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg leading-tight">{active.title}</h3>
                  <span className="text-slate-500 text-sm font-mono">{active.year}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{active.description}</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{active.role}</h3>
                {active.current && (
                  <span className="tag text-green-400 bg-green-400/10 border-green-400/20">
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                <span className="text-sky-400 font-semibold text-sm">{active.company}</span>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-slate-500 text-sm">{active.location}</span>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-slate-500 text-sm font-mono">{active.period}</span>
              </div>
              <ul className="space-y-2">
                {active.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
