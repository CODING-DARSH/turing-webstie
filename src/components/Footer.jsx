import logo from '../assets/images/logo.png';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Events', href: '#events' },
  { label: 'Leaders', href: '#leaders' },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/turingclubfetju/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/turing-club-ju/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:turingclub@jainuniversity.ac.in',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4.5 h-4.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-6">
          {/* left: logo + name + tagline */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="The Turing Club logo" className="h-9 w-9 object-contain" />
              <span className="font-semibold text-base tracking-tight">
                The Turing Club
              </span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Student-run technology community, Jain (Deemed-to-be) University. Founded 2021.
            </p>
          </div>

          {/* middle: quick links */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-4">
              Quick Links
            </div>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* address */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-4">
              Location
            </div>
            <a
              href="https://maps.google.com/?q=Jain+University+FET+Kanakapura+Road+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-white leading-relaxed hover:text-primary-light transition-colors"
            >
              Jain University, Kanakapura Road Campus, FET, Bengaluru, Karnataka
            </a>
          </div>

          {/* right: connect + logo again */}
          <div className="flex flex-col md:items-end">
            <div className="text-xs font-mono uppercase tracking-widest text-text-dim mb-4 md:text-right">
              Connect
            </div>
            <div className="flex items-center gap-4 mb-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="text-text-dim hover:text-primary-light transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <img
              src={logo}
              alt=""
              className="hidden md:block h-10 w-10 object-contain opacity-30"
            />
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 text-center text-xs text-text-dim">
          &copy; 2026 The Turing Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}