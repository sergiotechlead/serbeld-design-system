import * as React from 'react';
import { cx } from '../utils';
import { Icon } from './Icon';

/* ------------------------------------------------------------------ NavBar */

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
  title?: string;
}

export interface NavBarProps {
  brand?: React.ReactNode;
  brandHref?: string;
  /** Order: About, Experience, Skills, Services, Contact, Blog. Point each at its section id. */
  links: NavLink[];
  defaultOpen?: boolean;
  className?: string;
}

/** Sticky 72px header: wordmark left, Poppins 14/500 links right; a 44px toggle menu at 820px and below. */
export function NavBar({ brand = 'Sergio Beleño', brandHref = '#top', links, defaultOpen = false, className }: NavBarProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <header className={cx('sb-nav', open && 'sb-nav--open', className)}>
      <div className="sb-nav__inner sb-container">
        <a className="sb-nav__brand" href={brandHref} title="Go to the homepage">{brand}</a>
        <nav className="sb-nav__links" id="sb-nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href || l.label} className="sb-nav__link" href={l.href} aria-current={l.active ? 'true' : undefined} title={l.title} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="sb-nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="sb-nav-links"
          onClick={() => setOpen(!open)}
        >
          <Icon name="bars" />
        </button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ Tabs */

export interface TabItem {
  id: string;
  label: string;
  panelId?: string;
}

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** aria-label for the tablist. */
  label?: string;
  className?: string;
}

/** role="tablist" with aria-selected and arrow-key, Home and End navigation (the credentials tabs). */
export function Tabs({ tabs, value, defaultValue, onChange, label, className }: TabsProps) {
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue ?? tabs[0]?.id);
  const current = controlled ? value : inner;
  const refs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const select = (id: string) => {
    if (!controlled) setInner(id);
    onChange?.(id);
  };
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const map: Record<string, number> = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = tabs[map[e.key]];
    select(next.id);
    refs.current[next.id]?.focus();
  };
  return (
    <div className={cx('sb-tabs', className)} role="tablist" aria-label={label}>
      {tabs.map((t, i) => {
        const selected = t.id === current;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            className="sb-tab"
            id={`sb-tab-${t.id}`}
            aria-controls={t.panelId}
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            title={`Show ${t.label} entries`}
            ref={(el) => { refs.current[t.id] = el; }}
            onClick={() => select(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ SocialIcons */

export type SocialNetwork = 'instagram' | 'github' | 'linkedin';

export interface SocialLink {
  network: SocialNetwork;
  href: string;
  label?: string;
  /** Optional image (rendered 24px, desaturated). Default: the Font Awesome brand glyph. */
  src?: string;
}

export interface SocialIconsProps {
  links: SocialLink[];
  /** Renders skeleton circles, one per link (or `count`), with aria-busy. */
  loading?: boolean;
  count?: number;
  placement?: 'hero' | 'footer';
  className?: string;
}

const SOCIAL_ORDER: SocialNetwork[] = ['instagram', 'github', 'linkedin'];
const SOCIAL_LABEL: Record<SocialNetwork, string> = { instagram: 'Instagram', github: 'GitHub', linkedin: 'LinkedIn' };

/** 38px circles in the fixed order Instagram, GitHub, LinkedIn. No third-party brand colour enters the palette. */
export function SocialIcons({ links, loading, count, placement = 'hero', className }: SocialIconsProps) {
  const sorted = [...links].sort((a, b) => SOCIAL_ORDER.indexOf(a.network) - SOCIAL_ORDER.indexOf(b.network));
  const cls = cx('sb-social', placement === 'footer' && 'sb-social--footer', className);
  if (loading) {
    const n = count ?? (links.length || 3);
    return (
      <ul className={cls} aria-live="polite" aria-busy="true">
        {Array.from({ length: n }, (_, i) => <li key={i}><span className="sb-skeleton" /></li>)}
      </ul>
    );
  }
  return (
    <ul className={cls}>
      {sorted.map((l) => {
        const label = l.label ?? SOCIAL_LABEL[l.network];
        return (
          <li key={l.network}>
            <a className="sb-social__link" href={l.href} target="_blank" rel="noreferrer" title={`Open ${label} in a new tab`} aria-label={`${label} (opens in a new tab)`}>
              {l.src ? <img className="sb-social__image" src={l.src} alt="" width={24} height={24} loading="lazy" /> : <Icon name={`brand-${l.network}`} />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* ------------------------------------------------------------------ Footer */

export interface FooterProps {
  /** Default: "© <current year> Sergio Beleño" — the year is derived, never hardcoded. */
  children?: React.ReactNode;
  year?: number;
  social?: SocialLink[];
  loading?: boolean;
  className?: string;
}

/** 1px top hairline, 32px padding, Lekton 13 faint, social cluster at 16px. Stacks and centres at 560px. */
export function Footer({ children, year = new Date().getFullYear(), social, loading, className }: FooterProps) {
  return (
    <footer className={cx('sb-footer', className)}>
      <div className="sb-footer__inner sb-container">
        <p className="sb-footer__text">{children ?? `© ${year} Sergio Beleño`}</p>
        {social ? <SocialIcons links={social} placement="footer" loading={loading} /> : null}
      </div>
    </footer>
  );
}
