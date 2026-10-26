import * as React from 'react';
import { cx } from '../utils';
import { Icon } from './Icon';
import { Tag } from './content';

/* ------------------------------------------------------------------ Card */

export interface CardProps {
  title?: string;
  subtitle?: string;
  /** Border strengthens on hover. */
  interactive?: boolean;
  padding?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

/** The one shell every card shares: color-surface, 1px color-border hairline, radius-md, 24px padding. */
export function Card({ title, subtitle, interactive, padding, as: Tag_ = 'div', children, className }: CardProps) {
  const Comp = Tag_ as React.ElementType;
  return (
    <Comp className={cx('sb-card', interactive && 'sb-card--interactive', className)} style={padding ? { padding } : undefined}>
      {title ? <h3 className="sb-card__title">{title}</h3> : null}
      {subtitle ? <p className="sb-card__subtitle">{subtitle}</p> : null}
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ TimelineCard */

export interface TimelineCardProps {
  /** Square logo; requested at 38×38 WebP. */
  logo?: string;
  logoAlt?: string;
  /** "2025 - Present", "2023 - 2025". */
  date?: string;
  title: string;
  company?: string;
  /** "Bogotá, Colombia (Remote)". */
  location?: string;
  /** Only the newest entry: adds the Current badge and the accent-shadow border. */
  current?: boolean;
  description?: string;
  link?: { href: string; label?: string };
  as?: 'li' | 'div';
  className?: string;
}

/** One entry per role or credential: logo, date, role, company · location (mode). */
export function TimelineCard({ logo, logoAlt = '', date, title, company, location, current, description, link, as: Comp = 'li', className }: TimelineCardProps) {
  const meta = [company, location].filter(Boolean) as string[];
  return (
    <Comp className={cx('sb-timeline-card', current && 'sb-timeline-card--current', className)}>
      {logo ? <img className="sb-timeline-card__logo" src={logo} alt={logoAlt} loading="lazy" width={38} height={38} /> : <span className="sb-timeline-card__logo" aria-hidden="true" />}
      <div className="sb-timeline-card__body">
        <div className="sb-timeline-card__top">
          {date ? <span className="sb-timeline-card__date">{date}</span> : null}
          {current ? <Tag variant="badge">Current</Tag> : null}
        </div>
        <h3 className="sb-timeline-card__name">{title}</h3>
        {meta.length ? (
          <p className="sb-timeline-card__meta">
            {meta.map((m, i) => (
              <React.Fragment key={m}>
                {i ? <span className="sb-timeline-card__sep" aria-hidden="true">·</span> : null}
                <span>{m}</span>
              </React.Fragment>
            ))}
          </p>
        ) : null}
        {description ? <p className="sb-timeline-card__description">{description}</p> : null}
        {link ? (
          <a className="sb-timeline-card__link" href={link.href} target="_blank" rel="noreferrer" title={`${link.label ?? 'View credential'}: ${title} (opens in a new tab)`}>
            {link.label ?? 'View credential'}
            <Icon name="arrow-up-right-from-square" />
          </a>
        ) : null}
      </div>
    </Comp>
  );
}

/* ------------------------------------------------------------------ ServiceCard */

export interface ServiceCardProps {
  icon?: string;
  iconAlt?: string;
  name: string;
  description?: string;
  /** Required by the content standard: no service without a price. */
  price: number | string;
  currency?: string;
  /** Default "/USD per hour". */
  period?: string;
  /** Required by the content standard: no service without an action. */
  action: { label: string; href: string; className?: string };
  className?: string;
}

/** 44px icon, name, description, price block and a soft accent action that turns solid on hover. */
export function ServiceCard({ icon, iconAlt = '', name, description, price, currency = '$', period = '/USD per hour', action, className }: ServiceCardProps) {
  return (
    <div className={cx('sb-service-card', className)}>
      {icon ? <img className="sb-service-card__icon" src={icon} alt={iconAlt} loading="lazy" width={44} height={44} /> : <span className="sb-service-card__icon sb-service-card__icon--empty" aria-hidden="true" />}
      <h3 className="sb-service-card__name">{name}</h3>
      {description ? <p className="sb-service-card__description">{description}</p> : null}
      <div className="sb-service-card__price">
        <span className="sb-service-card__currency">{currency}</span>
        <span className="sb-service-card__amount">{price}</span>
        <span className="sb-service-card__period">{period}</span>
      </div>
      <a className={cx('sb-service-card__button', action.className)} href={action.href} target="_blank" rel="noreferrer" title={`${action.label}: ${name} (opens in a new tab)`}>
        {action.label}
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ BlogCard */

export interface BlogCardProps {
  href: string;
  title: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  date?: string;
  className?: string;
}

/** A post teaser that is one link: 160px cover, title clamped to 2 lines, excerpt to 3. The only card that lifts. */
export function BlogCard({ href, title, excerpt, image, imageAlt = '', date, className }: BlogCardProps) {
  return (
    <a className={cx('sb-blog-card', className)} href={href}>
      {image ? <img className="sb-blog-card__image" src={image} alt={imageAlt} loading="lazy" height={160} /> : <span className="sb-blog-card__image" aria-hidden="true" />}
      <div className="sb-blog-card__body">
        {date ? <span className="sb-blog-card__date">{date}</span> : null}
        <h3 className="sb-blog-card__title">{title}</h3>
        {excerpt ? <p className="sb-blog-card__excerpt">{excerpt}</p> : null}
      </div>
    </a>
  );
}
