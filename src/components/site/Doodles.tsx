// Subtle hand-drawn doodle SVGs reused across sections
export function DoodleSwirl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" className={className} aria-hidden>
      <path
        d="M2 40 C 20 10, 50 60, 70 30 S 110 20, 118 40"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path
        d="M10 50 C 20 10, 50 10, 50 50 C 30 35, 20 40, 10 50 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M30 22 L 30 48" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" className={className} aria-hidden>
      <path
        d="M2 20 C 20 -2, 50 30, 76 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M70 6 L 76 12 L 68 18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
