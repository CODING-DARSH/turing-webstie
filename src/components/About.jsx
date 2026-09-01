const APPROACH = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 3l8 4-8 4-8-4 8-4z" />
        <path d="M4 11l8 4 8-4" />
        <path d="M4 15l8 4 8-4" />
      </svg>
    ),
    title: 'Learn by Building',
    desc: 'No lectures for the sake of lectures — every session ends with something shipped.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2v6" />
        <path d="M12 22v-6" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Compete with Real Stakes',
    desc: 'Hackathons and challenges judged on real criteria, with real prizes and recognition.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Open to All Skill Levels',
    desc: 'From first-time coders to seasoned builders — every year and department is welcome.',
  },
];

const STATS = [
  { value: '2021', label: 'Founded' },
  { value: '100+', label: 'Members' },
  { value: '15+', label: 'Events Hosted' },
];

export default function About() {
  return (
    <section id="about" className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-24">
        {/* section label */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-border rounded-full text-xs font-mono tracking-widest text-text-muted uppercase">
          About Us
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* left: copy */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              A community built on building.
            </h2>

            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-5">
              The Turing Club is a student-run technology community at Jain(Deemed-to-be)
              University, founded in 2021 around a simple idea: the best way
              to learn technology is to build with it, under pressure,
              alongside people who push you.
            </p>

            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              We organize hackathons, workshops, and technical competitions
              across AI/ML and software development — giving students a real
              venue to apply what they learn in the classroom to problems
              that actually matter. Alongside our events, we build our own
              internal tools and projects, run by our members, for our
              members.
            </p>
            
            <p className="mt-6 text-sm md:text-base text-text-muted leading-relaxed">
              Beyond events, the Turing Club encourages members to pursue research — 
              supporting students who want to go deeper into a problem, publish their work,
              or contribute to ongoing projects. We also regularly host webinars and seminars
              featuring industry professionals and academics,giving members exposure beyond
              just hands-on building.
            </p>

            {/* stat line */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-border">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-dim mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: approach cards */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-4">
            {APPROACH.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row items-start gap-3 md:gap-4 p-4 md:p-5 border border-border rounded-lg bg-surface/60"
              >
                <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-md border border-border flex items-center justify-center text-primary-light">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold text-text mb-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] md:text-sm text-text-muted leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}