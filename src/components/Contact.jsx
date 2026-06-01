import { Mail, MapPin, Send } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { personal } from '../data/resume';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'text-sky-400',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/linked-vip-in',
    href: personal.linkedin,
    color: 'text-blue-400',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/kvipz',
    href: personal.github,
    color: 'text-slate-300',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
    color: 'text-emerald-400',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-navy-800/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            I'm open to senior engineering roles, consulting engagements, and collaboration on interesting platform challenges. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact links */}
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="card flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 ${color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`font-medium text-sm hover:underline transition-colors ${color}`}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-300 font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="card glow text-center py-10">
            <div className="text-4xl mb-4">👋</div>
            <h3 className="text-white font-bold text-xl mb-3">Let's Work Together</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether it's a full-time role, a contract engagement, or just a chat about cloud platforms and engineering culture — my inbox is always open.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary justify-center w-full"
            >
              <Send size={16} />
              Send Me An Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center w-full mt-3"
            >
              <LinkedInIcon size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
