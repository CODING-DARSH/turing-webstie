import kashishImg from '../assets/images/leaders/kashish-jaiswal.jpg';
import syedImg from '../assets/images/leaders/syed-zahid-saleem.jpg';
import adyaImg from '../assets/images/leaders/adya-gupta.jpg';
import darshImg from '../assets/images/leaders/darsh-vithlani.jpg';
import laeeqaImg from '../assets/images/leaders/laeeqa-iffath-ur-raheman.jpg';
import swapnilImg from '../assets/images/leaders/swapnil-ghosh.jpg';
import veeraImg from '../assets/images/leaders/veera-srinivasa-rao-lachireddy.jpg';
import rajeshwariImg from '../assets/images/leaders/ag-rajeshwari.jpg';
import archanaImg from '../assets/images/leaders/archana-sasi.jpg';

// core trio: featured just below the Faculty Advisor
const CORE_LEADERS = [
  {
    name: 'Kashish Jaiswal',
    role: 'President',
    year: '3rd Year, AIML',
    image: kashishImg,
  },
  {
    name: 'Syed Zahid Saleem',
    role: 'Vice President',
    year: '2nd Year, AIML',
    image: syedImg,
  },
  {
    name: 'Adya Gupta',
    role: 'Secretary',
    year: '2nd Year, AIML',
    image: adyaImg,
  },
];

// remaining leads: shown in the standard grid below
const LEADS = [
  {
    name: 'Darsh Vithlani',
    role: 'Tech Lead',
    year: '3rd Year, AIML',
    image: darshImg,
  },
  {
    name: 'K Laeeqa Iffath Ur Raheman',
    role: 'Design Lead',
    year: '3rd Year, AIML',
    image: laeeqaImg,
  },
  {
    name: 'Swapnil Ghosh',
    role: 'Social Media Lead',
    year: '2nd Year, AIML',
    image: swapnilImg,
  },
  {
    name: 'Veera Srinivasa Rao Lachireddy',
    role: 'Marketing Lead',
    year: '2nd Year, AIML',
    image: veeraImg,
  },
  {
    name: 'A G Rajeshwari',
    role: 'Photography Lead',
    year: '2nd Year, AIML',
    image: rajeshwariImg,
  },
];

const FACULTY_ADVISOR = {
  name: 'Dr. Archana Sasi',
  role: 'Faculty Advisor',
  subtitle: 'Assistant Professor, Department of CSE · PhD in CSE',
  image: archanaImg,
};

function SocialIcons() {
  return (
    <div className="flex items-center gap-3 mt-3">
      {/* LinkedIn */}
      <a href="#" className="text-text-dim hover:text-primary-light transition-colors" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      </a>
      {/* Instagram */}
      <a href="#" className="text-text-dim hover:text-primary-light transition-colors" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      </a>
      {/* Mail */}
      <a href="#" className="text-text-dim hover:text-primary-light transition-colors" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}

function LeaderCard({ name, role, year, image }) {
  return (
    <div className="group border border-border rounded-lg overflow-hidden bg-surface/60 hover:border-text-dim transition-colors">
      <div className="relative aspect-[4/5] bg-surface overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* designation on top of image */}
        <div className="absolute top-0 left-0 right-0 px-3 py-2.5 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
          <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">
            {role}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-text leading-tight">{name}</div>
        <div className="text-xs font-mono uppercase tracking-widest text-primary-light mt-1.5">
          {role}
        </div>
        <div className="text-xs text-text-dim mt-1">{year}</div>
        <SocialIcons />
      </div>
    </div>
  );
}

// larger, highlighted card used for the core trio (President / VP / Secretary)
function FeaturedLeaderCard({ name, role, year, image }) {
  return (
    <div className="group border border-primary-light/30 rounded-xl overflow-hidden bg-surface/80 hover:border-primary-light/60 transition-colors shadow-[0_0_30px_-12px_var(--color-primary-light)]">
      <div className="relative aspect-[4/5] bg-surface overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* designation on top of image */}
        <div className="absolute top-0 left-0 right-0 px-4 py-3 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
          <span className="text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">
            {role}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="text-base font-semibold text-text leading-tight">{name}</div>
        <div className="text-xs font-mono uppercase tracking-widest text-primary-light mt-2">
          {role}
        </div>
        <div className="text-xs text-text-dim mt-1">{year}</div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default function Leaders() {
  return (
    <section id="leaders" className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-24">
        {/* section label */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-border rounded-full text-xs font-mono tracking-widest text-text-muted uppercase">
          Leadership
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 max-w-2xl">
          The people running things.
        </h2>

        <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-14">
          Student leaders responsible for planning, building, and running
          everything the Turing Club does.
        </p>

        {/* faculty advisor: top of the hierarchy */}
        <div className="pb-16 border-b border-border mb-16">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-text-dim mb-10">
            Faculty Advisor
          </div>
          <div className="flex flex-col items-center text-center max-w-md mx-auto">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary-light/40 shrink-0 bg-surface mb-6">
              <img
                src={FACULTY_ADVISOR.image}
                alt={FACULTY_ADVISOR.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-text">
              {FACULTY_ADVISOR.name}
            </div>
            <div className="text-sm text-primary-light font-mono uppercase tracking-widest mt-2">
              {FACULTY_ADVISOR.role}
            </div>
            <div className="text-sm text-text-muted mt-2">
              {FACULTY_ADVISOR.subtitle}
            </div>
          </div>
        </div>

        {/* core leadership: President, Vice President, Secretary — featured row */}
        <div className="mb-16 md:mb-20">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-text-dim mb-8">
            Core Leadership
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto">
            {CORE_LEADERS.map((leader) => (
              <FeaturedLeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>

        {/* remaining leads: standard grid */}
        <div>
          <div className="text-center text-xs font-mono uppercase tracking-widest text-text-dim mb-8">
            Leads
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            {LEADS.map((leader) => (
              <LeaderCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}