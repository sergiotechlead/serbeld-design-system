import * as React from 'react';
import { cx } from '../utils';

/* Document components: for the brand manual, proposals and capability decks — not the website. */

export interface CalloutProps {
  label?: string;
  /** accent: guidance · warning: rules and risks (label in color-text beside a color-warning rule). */
  tone?: 'accent' | 'warning';
  children: React.ReactNode;
  className?: string;
}

/** A color-surface note with a 3px left rule, an uppercase Poppins label and Lekton body copy. */
export function Callout({ label, tone = 'accent', children, className }: CalloutProps) {
  return (
    <aside className={cx('sb-callout', tone === 'warning' && 'sb-callout--warning', className)}>
      {label ? <p className="sb-callout__label">{label}</p> : null}
      <p className="sb-callout__body">{children}</p>
    </aside>
  );
}

export interface DoDontProps {
  dos: string[];
  donts: string[];
  className?: string;
}

/** Paired guidance panels: DO in color-success, DO NOT in color-error, always labelled in words. */
export function DoDont({ dos, donts, className }: DoDontProps) {
  const panel = (kind: 'do' | 'dont', label: string, items: string[]) => (
    <div className={`sb-dodont__panel sb-dodont__panel--${kind}`}>
      <p className="sb-dodont__label">{label}</p>
      <ul className="sb-dodont__list">{items.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  );
  return (
    <div className={cx('sb-dodont', className)}>
      {panel('do', 'Do', dos)}
      {panel('dont', 'Do not', donts)}
    </div>
  );
}
