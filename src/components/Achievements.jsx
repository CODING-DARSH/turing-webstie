const TEAM_INITIALS = ['DJ', 'AK', 'KR'];

const CARDS = [
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
    title: 'JAIN Hack 2024 Overall Champions',
    meta: 'Major Achievement',
    desc: 'First place at JAIN Hack 2024, the university\'s largest hackathon — an AI-powered accessibility solution for visually impaired students.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
      </svg>
    ),
    title: 'Best Tech Club Award',
    meta: 'Jain (Deemed-to-be) University, 2024',
    desc: 'Recognized as the leading technical community fostering innovation and skill development among students.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
        <circle cx="17" cy="8" r="3" />
        <path d="M17 11.2c2.6.4 4.5 2.4 4.5 5" />
      </svg>
    ),
    title: '100+ Active Members',
    meta: 'Growing Community',
    desc: 'Students from diverse backgrounds and years coming together to build a vibrant, hands-on tech community.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-24">
        {/* section label */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-border rounded-full text-xs font-mono tracking-widest text-text-muted uppercase">
          Achievements
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 max-w-2xl">
          Recognized for the work we ship.
        </h2>

        <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-14">
          Celebrating excellence and innovation from across our community.
        </p>

        {/* unified card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {CARDS.map((item) => (
            <div
              key={item.title}
              className={`border border-border rounded-lg p-4 md:p-6 bg-surface/60 hover:border-text-dim transition-colors ${
                item.title.startsWith('JAIN Hack') ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-md border border-border flex items-center justify-center text-primary-light mb-3 md:mb-4">
                {item.icon}
              </div>
              <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-primary-light mb-1.5 md:mb-2">
                {item.meta}
              </div>
              <div className="text-xs md:text-sm font-semibold text-text mb-1.5 md:mb-2 leading-snug">
                {item.title}
              </div>
              <p className="text-[11px] md:text-sm text-text-muted leading-relaxed mb-3 md:mb-4">
                {item.desc}
              </p>
              {item.title.startsWith('JAIN Hack') && (
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <div className="flex -space-x-2">
                    {TEAM_INITIALS.map((initials) => (
                      <div
                        key={initials}
                        className="w-6 h-6 rounded-full border-2 border-surface bg-bg flex items-center justify-center text-[9px] font-mono text-text-muted"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] text-text-dim">Team members</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}