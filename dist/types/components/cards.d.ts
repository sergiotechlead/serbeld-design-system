import * as React from 'react';
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
export declare function Card({ title, subtitle, interactive, padding, as: Tag_, children, className }: CardProps): React.JSX.Element;
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
    link?: {
        href: string;
        label?: string;
    };
    as?: 'li' | 'div';
    className?: string;
}
/** One entry per role or credential: logo, date, role, company · location (mode). */
export declare function TimelineCard({ logo, logoAlt, date, title, company, location, current, description, link, as: Comp, className }: TimelineCardProps): React.JSX.Element;
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
    action: {
        label: string;
        href: string;
        className?: string;
    };
    className?: string;
}
/** 44px icon, name, description, price block and a soft accent action that turns solid on hover. */
export declare function ServiceCard({ icon, iconAlt, name, description, price, currency, period, action, className }: ServiceCardProps): React.JSX.Element;
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
export declare function BlogCard({ href, title, excerpt, image, imageAlt, date, className }: BlogCardProps): React.JSX.Element;
