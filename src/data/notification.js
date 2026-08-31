// Update this whenever there's a new event/announcement to highlight.
// - `id` must change whenever the message changes, so a previously
//   minimized/dismissed notification doesn't stay hidden for returning
//   visitors when the message is actually different.
// - `expiresAt` is a local date-time string (YYYY-MM-DDTHH:mm:ss).
//   Once this moment passes, the strip stops showing automatically —
//   no other code changes needed. Example below expires at 11:59:59 PM
//   on Sept 15, 2026.
// - Set `active: false` to manually turn the strip off before its expiry
//   (e.g. if the event is cancelled or filled early).

export const notification = {
  id: 'hiring-2nd-3rd-year-sept-2026',
  message: 'Hiring Open — 2nd & 3rd Year Students',
  href: '#upcoming-events',
  expiresAt: '2026-09-15T23:59:59',
  active: true,
};