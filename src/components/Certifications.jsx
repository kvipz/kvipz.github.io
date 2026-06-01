import { certifications } from '../data/resume';

const badgeColors = {
  AWS:   { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  Azure: { bg: 'bg-blue-500/10',   border: 'border-blue-500/30',   text: 'text-blue-400'   },
  K8s:   { bg: 'bg-sky-500/10',    border: 'border-sky-500/30',    text: 'text-sky-400'    },
  TF:    { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
};

const badgeLabels = { AWS: 'AWS', Azure: 'Azure', K8s: 'Kubernetes', TF: 'HashiCorp' };

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-navy-800/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-500 mt-4 text-sm">7 industry certifications across cloud, Kubernetes and IaC</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => {
            const colors = badgeColors[cert.badge] || badgeColors.K8s;
            return (
              <div key={cert.name} className="card flex items-start gap-4 group">
                {/* Badge */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold border ${colors.bg} ${colors.border} ${colors.text}`}
                >
                  {cert.badge}
                </div>

                <div className="min-w-0">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium ${colors.text}`}>{badgeLabels[cert.badge]}</span>
                    <span className="text-slate-700 text-xs">·</span>
                    <span className="text-slate-500 text-xs font-mono">{cert.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
