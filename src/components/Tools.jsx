import { tools } from '../data/resume';
import { Mic2, SlidersHorizontal, Grid2x2, CalendarRange, BookOpen, ExternalLink } from 'lucide-react';

const icons = {
  Mic2,
  SlidersHorizontal,
  Grid2x2,
  CalendarRange,
  BookOpen,
};

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Side Projects</p>
          <h2 className="section-heading">Tools I've Built</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">
            Small interactive tools, open to use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => {
            const Icon = icons[tool.icon];
            return (
              <a
                key={tool.title}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex flex-col"
              >
                <Icon size={28} className="text-sky-400 mb-4" />
                <h3 className="text-white font-semibold text-base mb-2">{tool.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{tool.description}</p>
                {tool.reference && (
                  <p className="text-slate-600 text-xs italic mt-3">{tool.reference}</p>
                )}
                <span className="inline-flex items-center gap-1 mt-4 text-sky-400 group-hover:text-sky-300 text-sm font-medium transition-colors">
                  Open tool
                  <ExternalLink size={12} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
