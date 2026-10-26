import * as React from 'react';
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
export declare function NavBar({ brand, brandHref, links, defaultOpen, className }: NavBarProps): React.JSX.Element;
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
export declare function Tabs({ tabs, value, defaultValue, onChange, label, className }: TabsProps): React.JSX.Element;
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
/** 38px circles in the fixed order Instagram, GitHub, LinkedIn. No third-party brand colour enters the palette. */
export declare function SocialIcons({ links, loading, count, placement, className }: SocialIconsProps): React.JSX.Element;
export interface FooterProps {
    /** Default: "© <current year> Sergio Beleño" — the year is derived, never hardcoded. */
    children?: React.ReactNode;
    year?: number;
    social?: SocialLink[];
    loading?: boolean;
    className?: string;
}
/** 1px top hairline, 32px padding, Lekton 13 faint, social cluster at 16px. Stacks and centres at 560px. */
export declare function Footer({ children, year, social, loading, className }: FooterProps): React.JSX.Element;
