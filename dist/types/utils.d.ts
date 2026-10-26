/** Join class names, skipping falsy values. */
export declare function cx(...names: Array<string | false | null | undefined>): string;
/** True when the visitor asked the OS for reduced motion. Every animation in Signal checks this. */
export declare function prefersReducedMotion(): boolean;
/** Two-digit section index with a leading zero: 1 → "01". */
export declare function pad2(n: number): string;
