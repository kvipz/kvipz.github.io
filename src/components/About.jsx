import { personal } from '../data/resume';
import { yearsFrom, ageString, poeticExperience, CAREER_START, DAUGHTER_BORN } from '../utils/dates';

const pillars = [
  { icon: '🏗️', label: 'Platform-as-a-Product' },
  { icon: '🚀', label: 'Developer Experience' },
  { icon: '📐', label: 'Operational Excellence' },
  { icon: '🤝', label: 'Team Enablement' },
  { icon: '📊', label: 'DORA Metrics' },
  { icon: '🧩', label: 'Inner Source' },
];

const personal_facts = [
  {
    icon: '📍',
    title: 'Delhi Roots, Gurugram Based',
    text: 'Born and brought up in Delhi — now based in Gurugram, right in the heart of India\'s tech corridor.',
  },
  {
    icon: '👧',
    title: 'Proud Dad',
    text: `Father to a wonderful ${daughterAge} old daughter who keeps life joyful, humbling, and wonderfully chaotic.`,
  },
  {
    icon: '🎤',
    title: 'Public Speaker & Storyteller',
    text: 'Passionate about public speaking and training. I love explaining technology, leadership, and engineering through storytelling — making the complex feel human.',
  },
  {
    icon: '🏆',
    title: 'Toastmaster & Ex VP-Education',
    text: 'Active Toastmaster, former VP-Education — driving club excellence by applying product thinking and pushing members to pursue their speaking goals relentlessly.',
  },
  {
    icon: '📚',
    title: 'Reluctant Reader Turned Book Lover',
    text: 'I\'ll be honest — I hated reading books most of my life. Picked it up more recently and I\'m genuinely proud of that. The shelf is growing.',
  },
  {
    icon: '📷',
    title: 'Photography — Nikon D7500',
    text: 'Photography is a real passion. I shoot on my Nikon D7500, primarily landscape — but slowly trying my hand at wildlife. Not succeeded yet 😄',
  },
  {
    icon: '🏔️',
    title: 'Himalayan Trekker',
    text: 'Love trekking in the Himalayas. Done the Roopkund Trek in Uttarakhand and Tarsar Marsar Trek in Kashmir — both stunning and humbling experiences.',
  },
  {
    icon: '✈️',
    title: 'Traveller at Heart',
    text: 'Covered most states across India. Only 4 countries so far internationally — but the list is growing and the wanderlust isn\'t going anywhere.',
  },
];

export default function About() {
  const expYears    = yearsFrom(CAREER_START);
  const expPoetic   = poeticExperience(CAREER_START);
  const daughterAge = ageString(DAUGHTER_BORN);

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Professional About ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left – bio + education */}
          <div>
            <p className="section-subheading">Who I Am</p>
            <h2 className="section-heading">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mb-8" />

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Principal Engineer</span> with{' '}
                <span className="text-sky-400 font-semibold">{expPoetic} of experience</span> building
                and operating cloud platforms at scale — certified in cloud-native technologies and AI.
                I work across <span className="text-white font-medium">AWS, Azure and Kubernetes</span>, with a
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
            </div>
          </div>

          {/* Right – stats + pillars + currently */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: `${expYears}+`, label: 'Years Experience' },
                { value: '7', label: 'Certifications' },
                { value: '200+', label: 'Engineers Trained' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 card">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Core Philosophy */}
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

            {/* Currently */}
            <div className="card">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">Currently</p>
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

        {/* ── Personal Side ── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="section-subheading">Beyond the Code</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">The Person Behind the Engineer</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personal_facts.map((fact) => (
              <div
                key={fact.title}
                className="card group flex flex-col gap-3 hover:border-sky-500/30"
              >
                <div className="text-3xl">{fact.icon}</div>
                <h4 className="text-white font-semibold text-sm leading-snug group-hover:text-sky-300 transition-colors">
                  {fact.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
