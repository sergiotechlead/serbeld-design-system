import * as React from 'react';
import { cx } from '../utils';

export interface WordmarkProps {
  /** primary: "Sergio Beleño" · lockup: name over role line · monogram: "SB" (32px and below only). */
  variant?: 'primary' | 'lockup' | 'monogram';
  /** px; clamped to 14 minimum, below which the tilde loses definition. Default 16 (nav). */
  size?: number;
  /** Ink switches to color-text-on-accent for a Signal Blue field. */
  onAccent?: boolean;
  /** Lockup role line. Default "Technical Lead (VTEX)". */
  role?: string;
  href?: string;
  className?: string;
}

/** The typographic identity: the name in Poppins SemiBold 600, sentence case, tracking zero, tilde preserved. */
export function Wordmark({ variant = 'primary', size = 16, onAccent, role = 'Technical Lead (VTEX)', href, className }: WordmarkProps) {
  const px = Math.max(14, size);
  const cls = cx('sb-wordmark', onAccent && 'sb-wordmark--on-accent', className);
  const content =
    variant === 'monogram' ? 'SB'
      : variant === 'lockup' ? (
        <>
          <span>Sergio Beleño</span>
          <span className="sb-wordmark__role" style={{ fontSize: Math.max(14, Math.round((px * 20) / 44)), marginTop: Math.round(px * 0.18) }}>{role}</span>
        </>
      ) : 'Sergio Beleño';
  const label = variant === 'monogram' ? 'Sergio Beleño' : undefined;
  return href ? (
    <a className={cls} style={{ fontSize: px }} href={href} title="Go to the homepage" aria-label={label}>{content}</a>
  ) : (
    <span className={cls} style={{ fontSize: px }} aria-label={label}>{content}</span>
  );
}

export interface PortraitProps {
  /** WebP exported at 560×560 for a 280×280 render. Omit to show the empty frame. */
  src?: string;
  /** Default: the name and role line, never a description of the photo. */
  alt?: string;
  /** Default true: fetchpriority="high" (it is the LCP element). */
  priority?: boolean;
  placeholder?: React.ReactNode;
  className?: string;
}

const PORTRAIT_ALT = 'Sergio Beleño - Technical Lead (VTEX) | Full Stack Web Developer';

/** The only photographic asset: 280×280, radius-lg, hairline on surface, shadow-md. */
export function Portrait({ src, alt = PORTRAIT_ALT, priority = true, placeholder = 'Portrait · 280 × 280', className }: PortraitProps) {
  if (!src) {
    return <div className={cx('sb-portrait', 'sb-portrait--empty', className)} role="img" aria-label={alt}>{placeholder}</div>;
  }
  return (
    <img
      className={cx('sb-portrait', className)}
      src={src}
      alt={alt}
      title="Portrait of Sergio Beleño"
      width={280}
      height={280}
      {...(priority ? { fetchpriority: 'high' } : {})}
    />
  );
}
