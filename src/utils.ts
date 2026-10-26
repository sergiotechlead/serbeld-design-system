/** Join class names, skipping falsy values. */
export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(' ');
}

/** True when the visitor asked the OS for reduced motion. Every animation in Signal checks this. */
export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Two-digit section index with a leading zero: 1 → "01". */
export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}
