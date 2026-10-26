import * as React from 'react';
import { ICONS, type IconName } from '../icons';
import { cx } from '../utils';

export interface IconProps {
  name: IconName;
  /** CSS length. Default 1em; 13px inside buttons; 24px social glyphs. */
  size?: string;
  /** Accessible name. Omit for decorative icons (rendered aria-hidden). */
  label?: string;
  className?: string;
}

/**
 * Font Awesome 6 Free glyphs rendered as inline SVG that inherit currentColor.
 * Icons are functional labels, never ornament: pair them with a text label.
 */
export function Icon({ name, size, label, className }: IconProps) {
  const def = ICONS[name];
  if (!def) return null;
  return (
    <svg
      className={cx('sb-icon', className)}
      viewBox={def.viewBox}
      style={size ? { width: size, height: size } : undefined}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      <path fill="currentColor" d={def.d} />
    </svg>
  );
}
