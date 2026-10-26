import * as React from 'react';
import type { IconName } from '../icons';
import { type SocialLink } from './navigation';
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
export declare function SectionHeading({ index, id, as: Tag, children, className }: SectionHeadingProps): React.JSX.Element;
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
export declare function TypedRole({ text, speed, static: isStatic, className }: TypedRoleProps): React.JSX.Element;
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
export declare function Hero({ eyebrow, name, role, staticRole, tagline, badges, actions, social, socialLoading, portrait, portraitAlt, id, className }: HeroProps): React.JSX.Element;
export interface TagProps {
    /** chip: personality and capability pills · badge: small uppercase status (Current). */
    variant?: 'chip' | 'badge';
    children: React.ReactNode;
    className?: string;
}
/** A pill for one to three words. The word carries the meaning; the colour only confirms it. */
export declare function Tag({ variant, children, className }: TagProps): React.JSX.Element;
export interface Fact {
    label: string;
    value: React.ReactNode;
}
export interface FactListProps {
    facts: Fact[];
    className?: string;
}
/** The About facts block: Residence, Freelance, Specialty, Focus. */
export declare function FactList({ facts, className }: FactListProps): React.JSX.Element;
export interface CheckListProps {
    title?: string;
    items: string[];
    className?: string;
}
/** "Also working with": a check icon that inherits the text colour, one sentence per item. */
export declare function CheckList({ title, items, className }: CheckListProps): React.JSX.Element;
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
export declare function SkillBar({ name, level, percentage, animate, className }: SkillBarProps): React.JSX.Element;
