import * as React from 'react';
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
export declare function Wordmark({ variant, size, onAccent, role, href, className }: WordmarkProps): React.JSX.Element;
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
/** The only photographic asset: 280×280, radius-lg, hairline on surface, shadow-md. */
export declare function Portrait({ src, alt, priority, placeholder, className }: PortraitProps): React.JSX.Element;
