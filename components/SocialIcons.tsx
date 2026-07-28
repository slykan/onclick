export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.5 6.7a2.8 2.8 0 0 0-1.97-1.98C18.8 4.25 12 4.25 12 4.25s-6.8 0-8.53.47A2.8 2.8 0 0 0 1.5 6.7 29.9 29.9 0 0 0 1 12a29.9 29.9 0 0 0 .5 5.3 2.8 2.8 0 0 0 1.97 1.98C5.2 19.75 12 19.75 12 19.75s6.8 0 8.53-.47a2.8 2.8 0 0 0 1.97-1.98A29.9 29.9 0 0 0 23 12a29.9 29.9 0 0 0-.5-5.3ZM9.75 15.4V8.6L15.5 12l-5.75 3.4Z" />
    </svg>
  );
}
