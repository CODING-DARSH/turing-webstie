import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

// hrefs are "/#section" so they always route to the home page first,
// then scroll to the section — works correctly from any page, not just
// when already on home.
const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'What We Do', href: '/#what-we-do' },
  { label: 'Events', href: '/#events' },
  { label: 'Leaders', href: '/#leaders' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
          {/* left: logo + name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="The Turing Club logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <span className="font-semibold text-sm tracking-tight">
              The Turing Club
            </span>
          </Link>

          {/* right: nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-text-muted hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="px-4 py-2 bg-primary hover:bg-primary-light transition-colors rounded-md text-sm font-semibold">
              Apply to Join
            </button>
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-text" />
            <span className="block w-5 h-0.5 bg-text" />
            <span className="block w-5 h-0.5 bg-text" />
          </button>
        </nav>
      </header>

      {/* mobile drawer: backdrop — rendered outside <header> so it isn't
          trapped by the header's backdrop-blur containing block */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* mobile drawer: sliding panel from right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-dvh w-72 max-w-[80vw] bg-surface border-l border-border z-[70] transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <span className="text-sm font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 -mr-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-1 px-5 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="py-3 text-sm text-text-muted hover:text-text transition-colors border-b border-border/60"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full mt-6 px-4 py-3 bg-primary hover:bg-primary-light transition-colors rounded-md text-sm font-semibold">
            Apply to Join
          </button>
        </div>
      </div>
    </>
  );
}