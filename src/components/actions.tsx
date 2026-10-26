import * as React from 'react';
import type { IconName } from '../icons';
import { cx } from '../utils';
import { Icon } from './Icon';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** primary: Signal Blue fill for the one action a view is for · outline: everything beside it. */
  variant?: 'primary' | 'outline';
  /** Leading 13px icon, 8px before the label. */
  icon?: IconName;
  /** Renders an <a>. */
  href?: string;
  /** With href: opens in a new tab (target=_blank rel=noreferrer). */
  external?: boolean;
  /** Verb first: "Download CV", "Get in touch". */
  children: React.ReactNode;
}

/** Two variants only. Poppins 14/600, padding 12×22, radius-sm, min 130×44. */
export function Button({ variant = 'primary', icon, href, external, children, className, title, ...rest }: ButtonProps) {
  const cls = cx('sb-btn', `sb-btn--${variant}`, className);
  const inner = (
    <>
      {icon ? <Icon name={icon} /> : null}
      <span>{children}</span>
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} title={title} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={cls} title={title} {...rest}>
      {inner}
    </button>
  );
}

export interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

/** First element in the DOM: hidden off canvas, slides to 16px from the top on focus. */
export function SkipLink({ href = '#main-content', children = 'Skip to content', className }: SkipLinkProps) {
  return (
    <a className={cx('sb-skip-link', className)} href={href} title="Skip the navigation and jump to the main content">
      {children}
    </a>
  );
}
