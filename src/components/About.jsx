import { personal } from '../data/resume';

const pillars = [
  { icon: '🏗️', label: 'Platform-as-a-Product' },
  { icon: '🚀', label: 'Developer Experience' },
  { icon: '📐', label: 'Operational Excellence' },
  { icon: '🤝', label: 'Team Enablement' },
  { icon: '📊', label: 'DORA Metrics' },
  { icon: '🧩', label: 'Inner Source' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <p className="section-subheading">Who I Am</p>
            <h2 className="section-heading">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mb-8" />

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Principal Engineer</span> with{' '}
                <span className="text-sky-400 font-semibold">15 years of experience</span> building and
                operating cloud platforms at scale. I work across{' '}
                <span className="text-white font-medium">AWS, Azure and Kubernetes</span>, with a
                deep focus on platform-as-a-product thinking and engineering enablement.
              </p>
              <p>
                At <span className="text-white font-medium">Fidelity International</span>, I've contributed
                across both AWS and Azure Platform teams — from building governance frameworks and
                automation tooling to running enterprise training programmes and leading team
                transformation initiatives.
              </p>
              <p>
                I believe the best platforms are ones that engineers{' '}
                <span className="text-white font-medium">love to use</span> — self-service, well-documented,
                and designed with their workflow in mind. I bring product ownership thinking, strong
                mentoring instincts, and a drive for continuous improvement to everything I build.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-4 rounded-xl border border-slate-800 bg-slate-900/30">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-2">Education</p>
              <p className="text-white font-medium">B.E. Electronics & Communication Engineering</p>
              <p className="text-slate-400 text-sm">Delhi College of Engineering, Delhi · 2010</p>
              <p className="text-sky-400 text-sm mt-1">🏆 NCERT National Talent Search Scholar</p>
            </div>
          </div>

          {/* Right – pillars + stats */}
          <div className="space-y-8">
            {/* Pillars */}
            <div>
              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-4">
                Core Philosophy
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-sky-500/30 transition-colors"
                  >
                    <span className="text-lg">{p.icon}</span>
                    <span className="text-slate-300 text-xs font-medium">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '7', label: 'Certifications' },
                { value: '200+', label: 'Engineers Trained' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 card">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Currently */}
            <div className="card">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">
                Currently
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                  <span className="text-slate-300 text-sm">Principal Engineer @ Fidelity International</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="text-slate-300 text-sm">Leading AI Incident Copilot Programme</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-300 text-sm">VP Education, Fidelity Toastmasters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
