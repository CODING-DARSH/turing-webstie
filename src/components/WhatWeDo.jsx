import { Link } from 'react-router-dom';

const ACTIVITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
        <path d="M8 9l3 3-3 3" />
      </svg>
    ),
    title: 'Events',
    desc: 'Timed, team-based builds judged on real, working output.',
    tab: 'Events',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    title: 'Workshops',
    desc: 'Hands-on sessions teaching real tools and techniques, not slides.',
    tab: 'Workshops',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
        <path d="M7 6H4a2 2 0 002 4" />
        <path d="M17 6h3a2 2 0 01-2 4" />
      </svg>
    ),
    title: 'Tech Competitions',
    desc: 'Structured challenges across AI/ML and software development.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
        <path d="M7 9l3 2-3 2" />
        <path d="M13 13h4" />
      </svg>
    ),
    title: 'Seminars',
    desc: 'Expert-led sessions bringing industry knowledge directly to students.',
    tab: 'Seminars',
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-24">
        {/* section label */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-border rounded-full text-xs font-mono tracking-widest text-text-muted uppercase">
          What We Do
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 max-w-2xl">
          We organize the events.
          <br />
          You show up to build.
        </h2>

        <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-14">
          We organize hands-on technical events that put students in the
          room to build, learn, and compete — not just watch.
        </p>

        {/* activity grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {ACTIVITIES.map((item) => (
            <div
              key={item.title}
              className="relative p-4 md:p-5 border border-border rounded-lg bg-surface/60 hover:border-text-dim transition-colors"
            >
              {item.tab && (
                <Link
                  to={`/our-work?tab=${item.tab}`}
                  aria-label={`See more ${item.tab}`}
                  title={`See more ${item.tab}`}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 rounded-full border border-border flex items-center justify-center text-text-dim hover:text-primary-light hover:border-primary-light/50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </Link>
              )}
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-md border border-border flex items-center justify-center text-primary-light mb-3 md:mb-4">
                {item.icon}
              </div>
              <div className="text-xs md:text-sm font-semibold text-text mb-1 md:mb-1.5 pr-4">
                {item.title}
              </div>
              <div className="text-[11px] md:text-sm text-text-muted leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}