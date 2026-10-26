/**
 * Signal — Sergio Beleño's interface system for serbeld.space.
 * Load tokens/tokens.css and src/styles/signal.css (or dist/signal.css) before rendering any component.
 */
export { Icon, type IconProps } from './components/Icon';
export { ICONS, type IconName } from './icons';
export { Wordmark, Portrait, type WordmarkProps, type PortraitProps } from './components/brand';
export { Button, SkipLink, type ButtonProps, type SkipLinkProps } from './components/actions';
export {
  NavBar, Tabs, SocialIcons, Footer,
  type NavBarProps, type NavLink, type TabsProps, type TabItem, type SocialIconsProps, type SocialLink, type SocialNetwork, type FooterProps
} from './components/navigation';
export {
  SectionHeading, TypedRole, Hero, Tag, FactList, CheckList, SkillBar,
  type SectionHeadingProps, type TypedRoleProps, type HeroProps, type HeroAction, type HeroBadge, type TagProps, type Fact, type FactListProps, type CheckListProps, type SkillBarProps
} from './components/content';
export {
  Card, TimelineCard, ServiceCard, BlogCard,
  type CardProps, type TimelineCardProps, type ServiceCardProps, type BlogCardProps
} from './components/cards';
export { TextField, ContactForm, type TextFieldProps, type ContactFormProps, type ContactFormData } from './components/forms';
export { Callout, DoDont, type CalloutProps, type DoDontProps } from './components/documents';
export { cx, pad2, prefersReducedMotion } from './utils';
