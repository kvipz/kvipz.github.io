import { poeticExperience, CAREER_START } from '../utils/dates';
import { Building2, BarChart3, Code2, Users, GraduationCap } from 'lucide-react';
import SubHeading from './SubHeading';

const principles = [
  {
    icon: BarChart3,
    title: 'Measure before you change',
    belief: '“You can’t improve what you can’t measure.”',
    quote: true,
    practice: 'Introduced delivery measurement on a platform that had none, used systems thinking to find the bottlenecks, and lifted throughput by ~50%.',
  },
  {
    icon: Building2,
    title: 'Treat the platform as a product',
    belief: 'The best platforms are ones engineers love to use — self-service, well documented and built around their workflow.',
    practice: 'Account vending where an approved request raises a PR and the pipeline delivers a secure, network-connected account.',
  },
  {
    icon: Code2,
    title: 'Lead close to the code',
    belief: 'Staying hands-on keeps my decisions grounded in how the platform really behaves.',
    practice: 'Design and PR reviews on the landing-zone codebase, championing AI-assisted engineering, and building team tools like Pairwise.',
  },
  {
    icon: Users,
    title: 'Grow the team, not the bottleneck',
    belief: 'Pairing, training and docs-as-code spread knowledge so the platform never depends on one person.',
    practice: 'Trained 200+ engineers on Terraform and moved pipeline runs from support engineers to engineering pairs.',
  },
];

export default function About() {
  const expPoetic = poeticExperience(CAREER_START);

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* ── Intro: the story on the left, what's current on the right ── */}
        <p className="section-subheading">Who I Am</p>
        <h2 className="section-heading">About Me</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-24">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              I build cloud platforms engineers{' '}
              <span className="gradient-text">love to use</span> — and the teams that keep them running.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Over {expPoetic}, I've gone from telecom network operations to cloud architecture across
              AWS and Azure, and into platform engineering and leadership at{' '}
              <span className="text-white font-medium">Fidelity International</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today I own the AWS platform end to end — roadmap, delivery and operations across hundreds
              of accounts — and lead a distributed engineering team across India, China and the UK. I bring
              product thinking to infrastructure, stay hands-on with the code, and care as much about how
              the team works as what it ships.
            </p>
          </div>

          <aside className="lg:col-span-5 space-y-4">
            <div className="card">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Now</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 animate-pulse-slow flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">AWS Platform Owner &amp; Engineering Manager</p>
                    <p className="text-slate-500 text-xs">Fidelity International · since Jul 2026</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Active Toastmaster</p>
                    <p className="text-slate-500 text-xs">Fidelity Toastmasters</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card flex items-start gap-3">
              <GraduationCap size={20} className="text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm font-medium">B.E. Electronics &amp; Communication Engineering</p>
                <p className="text-slate-500 text-xs">Delhi College of Engineering · 2010</p>
              </div>
            </div>
          </aside>
        </div>

        {/* ── How I work: each belief is paired with evidence ── */}
        <div>
          <SubHeading eyebrow="Principles" title="How I Work" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <article key={p.title} className="card flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <p.icon size={18} className="text-sky-500" />
                  </span>
                  <span className="text-slate-600 font-mono text-xs">0{i + 1}</span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{p.title}</h4>
                <p className={p.quote
                  ? 'text-slate-300 italic leading-relaxed mb-5'
                  : 'text-slate-400 text-sm leading-relaxed mb-5'}
                >
                  {p.belief}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-800">
                  <p className="text-sky-500 font-mono text-[11px] uppercase tracking-widest mb-1">In practice</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.practice}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
