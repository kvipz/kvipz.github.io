import { useState } from 'react';
import { ageString, DAUGHTER_BORN } from '../utils/dates';
import {
  ExternalLink, Play, MapPin, Baby, Mic2, Trophy, BookOpen, Camera, Mountain, Plane, Bot,
} from 'lucide-react';
import { photography, speaking } from '../data/resume';
import SubHeading from './SubHeading';
import Library from './Library';

const getPersonalFacts = (daughterAge) => [
  {
    icon: MapPin,
    title: 'Delhi Roots, Gurugram Based',
    text: 'Born and brought up in Delhi — now based in Gurugram, right in the heart of India\'s tech corridor.',
  },
  {
    icon: Baby,
    title: 'Proud Dad',
    text: `Father to a wonderful ${daughterAge} old daughter who keeps life joyful, humbling, and wonderfully chaotic.`,
  },
  {
    icon: Mic2,
    title: 'Public Speaker & Storyteller',
    text: 'Passionate about public speaking and training. I love explaining technology, leadership, and engineering through storytelling — making the complex feel human.',
    link: speaking.url,
    linkText: 'Watch a talk',
  },
  {
    icon: Trophy,
    title: 'Toastmaster & Ex VP-Education',
    text: 'Active Toastmaster, former VP-Education — driving club excellence by applying product thinking and pushing members to pursue their speaking goals relentlessly.',
    link: 'https://toastthemost.github.io',
    linkText: 'Club App',
  },
  {
    icon: BookOpen,
    title: 'Reluctant Reader Turned Book Lover',
    text: 'I\'ll be honest — I hated reading books most of my life. Picked it up more recently and I\'m genuinely proud of that. The shelf is growing.',
  },
  {
    icon: Camera,
    title: 'Photography — Nikon D7500',
    text: 'Photography is a real passion. I shoot on my Nikon D7500, primarily landscape — but slowly trying my hand at wildlife. Not succeeded yet 😄',
    link: photography.profile,
    linkText: 'Flickr',
  },
  {
    icon: Mountain,
    title: 'Himalayan Trekker',
    text: 'Love trekking in the Himalayas. Done the Roopkund Trek in Uttarakhand and Tarsar Marsar Trek in Kashmir — both stunning and humbling experiences.',
  },
  {
    icon: Plane,
    title: 'Traveller at Heart',
    text: 'Covered most states across India. Only 4 countries so far internationally — but the list is growing and the wanderlust isn\'t going anywhere.',
  },
  {
    icon: Bot,
    title: 'AI & Emerging Tech',
    text: 'Actively exploring AI-powered tools and their real-world applications in platform engineering and operations.',
  },
];

// Shows the thumbnail until clicked, so YouTube's player and cookies only load on request.
function SpeechVideo() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${speaking.videoId}?autoplay=1&rel=0`}
        title={speaking.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${speaking.title}`}
      className="group relative w-full h-full"
    >
      <img
        src={`https://i.ytimg.com/vi/${speaking.videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-sky-500/90 group-hover:bg-sky-500 group-hover:scale-110 transition-all flex items-center justify-center shadow-lg">
          <Play size={28} className="text-white ml-1" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}

export default function Beyond() {
  const personalFacts = getPersonalFacts(ageString(DAUGHTER_BORN));

  return (
    <section id="beyond" className="py-24 px-4 theme-section-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-subheading">Beyond the Code</p>
          <h2 className="section-heading">The Person Behind the Engineer</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7 mb-20">
          {personalFacts.map((fact) => (
            <div key={fact.title} className="flex items-start gap-3">
              <fact.icon size={18} className="text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold text-sm leading-snug mb-1">{fact.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{fact.text}</p>
                {fact.link && (
                  <a
                    href={fact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1.5 text-sky-500 hover:text-sky-400 text-xs font-medium transition-colors"
                  >
                    {fact.linkText}
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* On stage: a recorded Toastmasters speech */}
        <div className="mb-20">
          <SubHeading eyebrow="Speaking" title="On Stage" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-3 relative overflow-hidden rounded-xl bg-slate-800 aspect-video shadow-xl">
              <SpeechVideo />
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold text-lg leading-snug mb-2">{speaking.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{speaking.description}</p>
              <a
                href={speaking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 text-sm font-medium transition-colors"
              >
                Watch on YouTube
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Hand-picked Flickr photos, each linking back to its Flickr page */}
        <div className="mb-20">
          <SubHeading
            eyebrow="Photography"
            title="Through the Lens"
            action={
              <a
                href={photography.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 text-sm font-medium transition-colors"
              >
                View full photostream on Flickr
                <ExternalLink size={13} />
              </a>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photography.photos.map((photo) => (
              <a
                key={photo.link}
                href={photo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-lg bg-slate-800 aspect-[3/2]"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-white/90 text-xs font-medium">
                  {photo.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        <Library />
      </div>
    </section>
  );
}
