import * as React from 'react';
import type { IconName } from '../icons';
import { cx, pad2, prefersReducedMotion } from '../utils';
import { Button } from './actions';
import { Portrait } from './brand';
import { Icon } from './Icon';
import { SocialIcons, type SocialLink } from './navigation';

/* ------------------------------------------------------------------ SectionHeading */

export interface SectionHeadingProps {
  /** Number or two-digit string; numbers get a leading zero. */
  index?: number | string;
  /** id for aria-labelledby on the section. */
  id?: string;
  as?: 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

/** Two-digit accent index, title in Poppins 26/600, hairline filling the width; 12px apart, 32px above content. */
export function SectionHeading({ index, id, as: Tag = 'h2', children, className }: SectionHeadingProps) {
  const idx = typeof index === 'number' ? pad2(index) : index;
  return (
    <div className={cx('sb-section-heading', className)}>
      {idx ? <span className="sb-section-heading__index">{idx}</span> : null}
      <Tag className="sb-section-heading__title" id={id}>{children}</Tag>
      <span className="sb-section-heading__line" aria-hidden="true" />
    </div>
  );
}

/* ------------------------------------------------------------------ TypedRole */

export interface TypedRoleProps {
  /** A real title, never a rotating list of adjectives. */
  text: string;
  /** ms per character. Default 80. */
  speed?: number;
  /** Render the full text without typing. */
  static?: boolean;
  className?: string;
}

/** Types itself in with a pipe cursor blinking every 1.1s. One per page. Screen readers get the full text at once. */
export function TypedRole({ text, speed = 80, static: isStatic, className }: TypedRoleProps) {
  const instant = isStatic || prefersReducedMotion();
  const [n, setN] = React.useState(instant ? text.length : 0);
  React.useEffect(() => {
    if (instant) { setN(text.length); return; }
    setN(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, instant]);
  return (
    <p className={cx('sb-typed-role', className)}>
      <span className="sb-visually-hidden">{text}</span>
      <span className="sb-typed-role__text" aria-hidden="true">{text.slice(0, n)}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ Hero */

export interface HeroAction {
  label: string;
  href?: string;
  icon?: IconName;
  variant?: 'primary' | 'outline';
  external?: boolean;
  title?: string;
}

export interface HeroBadge {
  src: string;
  alt: string;
  href?: string;
}

export interface HeroProps {
  eyebrow?: string;
  name?: string;
  role?: string;
  staticRole?: boolean;
  /** Capped at 520px. */
  tagline?: string;
  /** 72px verifiable credential images. */
  badges?: HeroBadge[];
  /** First is primary, the rest outline, 12px apart. */
  actions?: HeroAction[];
  social?: SocialLink[];
  socialLoading?: boolean;
  portrait?: string;
  portraitAlt?: string;
  id?: string;
  className?: string;
}

/** Category → name (the only h1) → role → tagline → proof → actions → social, with the portrait beside it. */
export function Hero({ eyebrow, name = 'Sergio Beleño', role, staticRole, tagline, badges, actions = [], social, socialLoading, portrait, portraitAlt, id = 'hero', className }: HeroProps) {
  return (
    <section className={cx('sb-section', 'sb-hero', className)} id={id} aria-labelledby="hero-heading">
      <div className="sb-container sb-hero__inner">
        <div className="sb-hero__content">
          {eyebrow ? <p className="sb-eyebrow">{eyebrow}</p> : null}
          <h1 className="sb-hero__name" id="hero-heading">{name}</h1>
          {role ? <TypedRole text={role} static={staticRole} /> : null}
          {tagline ? <p className="sb-hero__tagline">{tagline}</p> : null}
          {badges?.length ? (
            <div className="sb-hero__badges">
              {badges.map((b) => (
                <a key={b.href ?? b.src} href={b.href} target="_blank" rel="noreferrer" title={`Verify "${b.alt}" in a new tab`}>
                  <img src={b.src} alt={b.alt} width={72} height={72} loading="lazy" />
                </a>
              ))}
            </div>
          ) : null}
          {actions.length ? (
            <div className="sb-hero__actions">
              <div className="sb-btn-row">
                {actions.map((a, i) => (
                  <Button key={a.label} variant={a.variant ?? (i === 0 ? 'primary' : 'outline')} icon={a.icon} href={a.href} external={a.external} title={a.title}>
                    {a.label}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}
          {social ? <div className="sb-hero__social"><SocialIcons links={social} loading={socialLoading} /></div> : null}
        </div>
        <div className="sb-hero__portrait"><Portrait src={portrait} alt={portraitAlt} /></div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Tag */

export interface TagProps {
  /** chip: personality and capability pills · badge: small uppercase status (Current). */
  variant?: 'chip' | 'badge';
  children: React.ReactNode;
  className?: string;
}

/** A pill for one to three words. The word carries the meaning; the colour only confirms it. */
export function Tag({ variant = 'chip', children, className }: TagProps) {
  return <span className={cx('sb-tag', variant === 'badge' && 'sb-tag--badge', className)}>{children}</span>;
}

/* ------------------------------------------------------------------ FactList */

export interface Fact {
  label: string;
  value: React.ReactNode;
}

export interface FactListProps {
  facts: Fact[];
  className?: string;
}

/** The About facts block: Residence, Freelance, Specialty, Focus. */
export function FactList({ facts, className }: FactListProps) {
  return (
    <dl className={cx('sb-facts', className)}>
      {facts.map((f) => (
        <div key={f.label} className="sb-facts__row">
          <dt className="sb-facts__label">{f.label}</dt>
          <dd className="sb-facts__value">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ CheckList */

export interface CheckListProps {
  title?: string;
  items: string[];
  className?: string;
}

/** "Also working with": a check icon that inherits the text colour, one sentence per item. */
export function CheckList({ title, items, className }: CheckListProps) {
  return (
    <div className={cx('sb-checklist', className)}>
      {title ? <h3 className="sb-checklist__title">{title}</h3> : null}
      <ul className="sb-checklist__items">
        {items.map((it) => (
          <li key={it} className="sb-checklist__item"><Icon name="check" /><span>{it}</span></li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ SkillBar */

export interface SkillBarProps {
  name: string;
  /** Advanced (90) · Intermediate (78–85) · Familiar (70). Must agree with the percentage. */
  level?: 'Advanced' | 'Intermediate' | 'Familiar';
  /** 0–99; never 100. */
  percentage: number;
  /** Default true: fills over 1.1s when scrolled into view. */
  animate?: boolean;
  className?: string;
}

/** Label and percentage over an 8px surface-2 track with a flat accent fill. */
export function SkillBar({ name, level, percentage, animate = true, className }: SkillBarProps) {
  const pct = Math.max(0, Math.min(99, percentage));
  const [w, setW] = React.useState(animate ? 0 : pct);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!animate || prefersReducedMotion()) { setW(pct); return; }
    const el = ref.current;
    if (!el || typeof IntersectionObserver !== 'function') {
      const t = window.setTimeout(() => setW(pct), 50);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) { setW(pct); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [pct, animate]);
  return (
    <div className={cx('sb-skill-bar', className)} ref={ref}>
      <div className="sb-skill-bar__label">
        <span>{level ? `${name} (${level})` : name}</span>
        <span className="sb-skill-bar__percentage">{pct}%</span>
      </div>
      <div className="sb-skill-bar__track" aria-hidden="true">
        <div className="sb-skill-bar__fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}
