import { Link } from 'react-router-dom';

import photo1 from '../assets/images/events/hackncrack/photo-1.jpeg';
import photo2 from '../assets/images/events/hackncrack/photo-2.jpeg';
import photo3 from '../assets/images/events/hackncrack/photo-3.jpeg';
import photo4 from '../assets/images/events/hackncrack/photo-4.jpeg';

const EVENT_PHOTOS = [photo1, photo2, photo3, photo4];

export default function Events() {
  return (
    <section id="events" className="relative border-b border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20">

        {/* header row */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-border rounded-full text-xs font-mono tracking-widest text-text-muted uppercase">
              Events
            </div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight max-w-2xl">
              What we've run.
            </h2>
          </div>

          <Link
            to="/our-work"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 border border-border hover:border-text-dim transition-colors rounded-md text-sm font-medium text-text-muted whitespace-nowrap"
          >
            See More Events
            <span>&rarr;</span>
          </Link>
        </div>

        {/* featured event: HackNCrack */}
        <div className="border border-border rounded-xl bg-surface/60 overflow-hidden">
          <div className="p-5 md:p-7">

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 border border-border rounded-md text-xs font-mono text-text-muted uppercase tracking-wider">
                Hackathon
              </span>

              <span className="text-xs text-text-dim">
                Featured Event
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-text mb-3">
              HackNCrack
            </h3>

            <p className="text-sm text-text-muted leading-relaxed max-w-2xl mb-5">
              A fast-paced hackathon where every team had to ship a working
              build, not just a pitch — real, functioning projects, demoed
              by the end of the event.
            </p>

            {/* Emojilang sub-project highlight */}
            <div className="border border-border rounded-lg p-4 bg-bg/60">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">🔤</span>

                  <span className="text-sm font-semibold text-text">
                    Emojilang
                  </span>
                </div>

                <a
                  href="https://github.com/CODING-DARSH/EmojiLang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-primary-light transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.75c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.03 10.03 0 0022 12.25C22 6.58 17.52 2 12 2z" />
                  </svg>

                  View Repo
                </a>
              </div>

              <p className="text-xs text-text-muted leading-relaxed">
                A build from HackNCrack — an experimental language where
                syntax is written entirely in emojis.
              </p>
            </div>

            {/* photo gallery */}
            <div className="grid grid-cols-4 gap-2.5 mt-5">
              {EVENT_PHOTOS.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md overflow-hidden border border-border bg-surface"
                >
                  <img
                    src={src}
                    alt={`HackNCrack event photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* mobile: see more events link */}
        <Link
          to="/our-work"
          className="sm:hidden mt-6 inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-md text-sm font-medium text-text-muted"
        >
          See More Events
          <span>&rarr;</span>
        </Link>

      </div>
    </section>
  );
}