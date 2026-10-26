import * as React from 'react';
import { type IconName } from '../icons';
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
export declare function Icon({ name, size, label, className }: IconProps): React.JSX.Element | null;
