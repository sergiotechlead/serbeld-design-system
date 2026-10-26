import * as React from 'react';
export interface CalloutProps {
    label?: string;
    /** accent: guidance · warning: rules and risks (label in color-text beside a color-warning rule). */
    tone?: 'accent' | 'warning';
    children: React.ReactNode;
    className?: string;
}
/** A color-surface note with a 3px left rule, an uppercase Poppins label and Lekton body copy. */
export declare function Callout({ label, tone, children, className }: CalloutProps): React.JSX.Element;
export interface DoDontProps {
    dos: string[];
    donts: string[];
    className?: string;
}
/** Paired guidance panels: DO in color-success, DO NOT in color-error, always labelled in words. */
export declare function DoDont({ dos, donts, className }: DoDontProps): React.JSX.Element;
