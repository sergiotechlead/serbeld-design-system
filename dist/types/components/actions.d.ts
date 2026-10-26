import * as React from 'react';
import type { IconName } from '../icons';
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
export declare function Button({ variant, icon, href, external, children, className, title, ...rest }: ButtonProps): React.JSX.Element;
export interface SkipLinkProps {
    href?: string;
    children?: React.ReactNode;
    className?: string;
}
/** First element in the DOM: hidden off canvas, slides to 16px from the top on focus. */
export declare function SkipLink({ href, children, className }: SkipLinkProps): React.JSX.Element;
