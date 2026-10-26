// src/components/Icon.tsx
import * as React from "react";

// src/icons.ts
var ICONS = {
  "bars": { viewBox: "0 0 448 512", d: "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" },
  "download": { viewBox: "0 0 512 512", d: "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" },
  "arrow-right": { viewBox: "0 0 448 512", d: "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" },
  "arrow-up-right-from-square": { viewBox: "0 0 512 512", d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" },
  "check": { viewBox: "0 0 448 512", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" },
  "calendar-days": { viewBox: "0 0 448 512", d: "M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" },
  "brand-instagram": { viewBox: "0 0 448 512", d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" },
  "brand-github": { viewBox: "0 0 496 512", d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" },
  "brand-linkedin": { viewBox: "0 0 448 512", d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }
};

// src/utils.ts
function cx(...names) {
  return names.filter(Boolean).join(" ");
}
function prefersReducedMotion() {
  return typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function pad2(n) {
  return String(n).padStart(2, "0");
}

// src/components/Icon.tsx
function Icon({ name, size, label, className }) {
  const def = ICONS[name];
  if (!def) return null;
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: cx("sb-icon", className),
      viewBox: def.viewBox,
      style: size ? { width: size, height: size } : void 0,
      role: label ? "img" : void 0,
      "aria-label": label,
      "aria-hidden": label ? void 0 : true,
      focusable: "false"
    },
    /* @__PURE__ */ React.createElement("path", { fill: "currentColor", d: def.d })
  );
}

// src/components/brand.tsx
import * as React2 from "react";
function Wordmark({ variant = "primary", size = 16, onAccent, role = "Technical Lead (VTEX)", href, className }) {
  const px = Math.max(14, size);
  const cls = cx("sb-wordmark", onAccent && "sb-wordmark--on-accent", className);
  const content = variant === "monogram" ? "SB" : variant === "lockup" ? /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("span", null, "Sergio Bele\xF1o"), /* @__PURE__ */ React2.createElement("span", { className: "sb-wordmark__role", style: { fontSize: Math.max(14, Math.round(px * 20 / 44)), marginTop: Math.round(px * 0.18) } }, role)) : "Sergio Bele\xF1o";
  const label = variant === "monogram" ? "Sergio Bele\xF1o" : void 0;
  return href ? /* @__PURE__ */ React2.createElement("a", { className: cls, style: { fontSize: px }, href, title: "Go to the homepage", "aria-label": label }, content) : /* @__PURE__ */ React2.createElement("span", { className: cls, style: { fontSize: px }, "aria-label": label }, content);
}
var PORTRAIT_ALT = "Sergio Bele\xF1o - Technical Lead (VTEX) | Full Stack Web Developer";
function Portrait({ src, alt = PORTRAIT_ALT, priority = true, placeholder = "Portrait \xB7 280 \xD7 280", className }) {
  if (!src) {
    return /* @__PURE__ */ React2.createElement("div", { className: cx("sb-portrait", "sb-portrait--empty", className), role: "img", "aria-label": alt }, placeholder);
  }
  return /* @__PURE__ */ React2.createElement(
    "img",
    {
      className: cx("sb-portrait", className),
      src,
      alt,
      title: "Portrait of Sergio Bele\xF1o",
      width: 280,
      height: 280,
      ...priority ? { fetchpriority: "high" } : {}
    }
  );
}

// src/components/actions.tsx
import * as React3 from "react";
function Button({ variant = "primary", icon, href, external, children, className, title, ...rest }) {
  const cls = cx("sb-btn", `sb-btn--${variant}`, className);
  const inner = /* @__PURE__ */ React3.createElement(React3.Fragment, null, icon ? /* @__PURE__ */ React3.createElement(Icon, { name: icon }) : null, /* @__PURE__ */ React3.createElement("span", null, children));
  if (href) {
    return /* @__PURE__ */ React3.createElement("a", { className: cls, href, title, ...external ? { target: "_blank", rel: "noreferrer" } : {} }, inner);
  }
  return /* @__PURE__ */ React3.createElement("button", { type: "button", className: cls, title, ...rest }, inner);
}
function SkipLink({ href = "#main-content", children = "Skip to content", className }) {
  return /* @__PURE__ */ React3.createElement("a", { className: cx("sb-skip-link", className), href, title: "Skip the navigation and jump to the main content" }, children);
}

// src/components/navigation.tsx
import * as React4 from "react";
function NavBar({ brand = "Sergio Bele\xF1o", brandHref = "#top", links, defaultOpen = false, className }) {
  const [open, setOpen] = React4.useState(defaultOpen);
  return /* @__PURE__ */ React4.createElement("header", { className: cx("sb-nav", open && "sb-nav--open", className) }, /* @__PURE__ */ React4.createElement("div", { className: "sb-nav__inner sb-container" }, /* @__PURE__ */ React4.createElement("a", { className: "sb-nav__brand", href: brandHref, title: "Go to the homepage" }, brand), /* @__PURE__ */ React4.createElement("nav", { className: "sb-nav__links", id: "sb-nav-links", "aria-label": "Primary" }, links.map((l) => /* @__PURE__ */ React4.createElement("a", { key: l.href || l.label, className: "sb-nav__link", href: l.href, "aria-current": l.active ? "true" : void 0, title: l.title, onClick: () => setOpen(false) }, l.label))), /* @__PURE__ */ React4.createElement(
    "button",
    {
      type: "button",
      className: "sb-nav__toggle",
      "aria-label": open ? "Close menu" : "Open menu",
      "aria-expanded": open,
      "aria-controls": "sb-nav-links",
      onClick: () => setOpen(!open)
    },
    /* @__PURE__ */ React4.createElement(Icon, { name: "bars" })
  )));
}
function Tabs({ tabs, value, defaultValue, onChange, label, className }) {
  var _a;
  const controlled = value !== void 0;
  const [inner, setInner] = React4.useState(defaultValue != null ? defaultValue : (_a = tabs[0]) == null ? void 0 : _a.id);
  const current = controlled ? value : inner;
  const refs = React4.useRef({});
  const select = (id) => {
    if (!controlled) setInner(id);
    onChange == null ? void 0 : onChange(id);
  };
  const onKey = (e, i) => {
    var _a2;
    const map = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = tabs[map[e.key]];
    select(next.id);
    (_a2 = refs.current[next.id]) == null ? void 0 : _a2.focus();
  };
  return /* @__PURE__ */ React4.createElement("div", { className: cx("sb-tabs", className), role: "tablist", "aria-label": label }, tabs.map((t, i) => {
    const selected = t.id === current;
    return /* @__PURE__ */ React4.createElement(
      "button",
      {
        key: t.id,
        type: "button",
        role: "tab",
        className: "sb-tab",
        id: `sb-tab-${t.id}`,
        "aria-controls": t.panelId,
        "aria-selected": selected,
        tabIndex: selected ? 0 : -1,
        title: `Show ${t.label} entries`,
        ref: (el) => {
          refs.current[t.id] = el;
        },
        onClick: () => select(t.id),
        onKeyDown: (e) => onKey(e, i)
      },
      t.label
    );
  }));
}
var SOCIAL_ORDER = ["instagram", "github", "linkedin"];
var SOCIAL_LABEL = { instagram: "Instagram", github: "GitHub", linkedin: "LinkedIn" };
function SocialIcons({ links, loading, count, placement = "hero", className }) {
  const sorted = [...links].sort((a, b) => SOCIAL_ORDER.indexOf(a.network) - SOCIAL_ORDER.indexOf(b.network));
  const cls = cx("sb-social", placement === "footer" && "sb-social--footer", className);
  if (loading) {
    const n = count != null ? count : links.length || 3;
    return /* @__PURE__ */ React4.createElement("ul", { className: cls, "aria-live": "polite", "aria-busy": "true" }, Array.from({ length: n }, (_, i) => /* @__PURE__ */ React4.createElement("li", { key: i }, /* @__PURE__ */ React4.createElement("span", { className: "sb-skeleton" }))));
  }
  return /* @__PURE__ */ React4.createElement("ul", { className: cls }, sorted.map((l) => {
    var _a;
    const label = (_a = l.label) != null ? _a : SOCIAL_LABEL[l.network];
    return /* @__PURE__ */ React4.createElement("li", { key: l.network }, /* @__PURE__ */ React4.createElement("a", { className: "sb-social__link", href: l.href, target: "_blank", rel: "noreferrer", title: `Open ${label} in a new tab`, "aria-label": `${label} (opens in a new tab)` }, l.src ? /* @__PURE__ */ React4.createElement("img", { className: "sb-social__image", src: l.src, alt: "", width: 24, height: 24, loading: "lazy" }) : /* @__PURE__ */ React4.createElement(Icon, { name: `brand-${l.network}` })));
  }));
}
function Footer({ children, year = (/* @__PURE__ */ new Date()).getFullYear(), social, loading, className }) {
  return /* @__PURE__ */ React4.createElement("footer", { className: cx("sb-footer", className) }, /* @__PURE__ */ React4.createElement("div", { className: "sb-footer__inner sb-container" }, /* @__PURE__ */ React4.createElement("p", { className: "sb-footer__text" }, children != null ? children : `\xA9 ${year} Sergio Bele\xF1o`), social ? /* @__PURE__ */ React4.createElement(SocialIcons, { links: social, placement: "footer", loading }) : null));
}

// src/components/content.tsx
import * as React5 from "react";
function SectionHeading({ index, id, as: Tag2 = "h2", children, className }) {
  const idx = typeof index === "number" ? pad2(index) : index;
  return /* @__PURE__ */ React5.createElement("div", { className: cx("sb-section-heading", className) }, idx ? /* @__PURE__ */ React5.createElement("span", { className: "sb-section-heading__index" }, idx) : null, /* @__PURE__ */ React5.createElement(Tag2, { className: "sb-section-heading__title", id }, children), /* @__PURE__ */ React5.createElement("span", { className: "sb-section-heading__line", "aria-hidden": "true" }));
}
function TypedRole({ text, speed = 80, static: isStatic, className }) {
  const instant = isStatic || prefersReducedMotion();
  const [n, setN] = React5.useState(instant ? text.length : 0);
  React5.useEffect(() => {
    if (instant) {
      setN(text.length);
      return;
    }
    setN(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, instant]);
  return /* @__PURE__ */ React5.createElement("p", { className: cx("sb-typed-role", className) }, /* @__PURE__ */ React5.createElement("span", { className: "sb-visually-hidden" }, text), /* @__PURE__ */ React5.createElement("span", { className: "sb-typed-role__text", "aria-hidden": "true" }, text.slice(0, n)));
}
function Hero({ eyebrow, name = "Sergio Bele\xF1o", role, staticRole, tagline, badges, actions = [], social, socialLoading, portrait, portraitAlt, id = "hero", className }) {
  return /* @__PURE__ */ React5.createElement("section", { className: cx("sb-section", "sb-hero", className), id, "aria-labelledby": "hero-heading" }, /* @__PURE__ */ React5.createElement("div", { className: "sb-container sb-hero__inner" }, /* @__PURE__ */ React5.createElement("div", { className: "sb-hero__content" }, eyebrow ? /* @__PURE__ */ React5.createElement("p", { className: "sb-eyebrow" }, eyebrow) : null, /* @__PURE__ */ React5.createElement("h1", { className: "sb-hero__name", id: "hero-heading" }, name), role ? /* @__PURE__ */ React5.createElement(TypedRole, { text: role, static: staticRole }) : null, tagline ? /* @__PURE__ */ React5.createElement("p", { className: "sb-hero__tagline" }, tagline) : null, (badges == null ? void 0 : badges.length) ? /* @__PURE__ */ React5.createElement("div", { className: "sb-hero__badges" }, badges.map((b) => {
    var _a;
    return /* @__PURE__ */ React5.createElement("a", { key: (_a = b.href) != null ? _a : b.src, href: b.href, target: "_blank", rel: "noreferrer", title: `Verify "${b.alt}" in a new tab` }, /* @__PURE__ */ React5.createElement("img", { src: b.src, alt: b.alt, width: 72, height: 72, loading: "lazy" }));
  })) : null, actions.length ? /* @__PURE__ */ React5.createElement("div", { className: "sb-hero__actions" }, /* @__PURE__ */ React5.createElement("div", { className: "sb-btn-row" }, actions.map((a, i) => {
    var _a;
    return /* @__PURE__ */ React5.createElement(Button, { key: a.label, variant: (_a = a.variant) != null ? _a : i === 0 ? "primary" : "outline", icon: a.icon, href: a.href, external: a.external, title: a.title }, a.label);
  }))) : null, social ? /* @__PURE__ */ React5.createElement("div", { className: "sb-hero__social" }, /* @__PURE__ */ React5.createElement(SocialIcons, { links: social, loading: socialLoading })) : null), /* @__PURE__ */ React5.createElement("div", { className: "sb-hero__portrait" }, /* @__PURE__ */ React5.createElement(Portrait, { src: portrait, alt: portraitAlt }))));
}
function Tag({ variant = "chip", children, className }) {
  return /* @__PURE__ */ React5.createElement("span", { className: cx("sb-tag", variant === "badge" && "sb-tag--badge", className) }, children);
}
function FactList({ facts, className }) {
  return /* @__PURE__ */ React5.createElement("dl", { className: cx("sb-facts", className) }, facts.map((f) => /* @__PURE__ */ React5.createElement("div", { key: f.label, className: "sb-facts__row" }, /* @__PURE__ */ React5.createElement("dt", { className: "sb-facts__label" }, f.label), /* @__PURE__ */ React5.createElement("dd", { className: "sb-facts__value" }, f.value))));
}
function CheckList({ title, items, className }) {
  return /* @__PURE__ */ React5.createElement("div", { className: cx("sb-checklist", className) }, title ? /* @__PURE__ */ React5.createElement("h3", { className: "sb-checklist__title" }, title) : null, /* @__PURE__ */ React5.createElement("ul", { className: "sb-checklist__items" }, items.map((it) => /* @__PURE__ */ React5.createElement("li", { key: it, className: "sb-checklist__item" }, /* @__PURE__ */ React5.createElement(Icon, { name: "check" }), /* @__PURE__ */ React5.createElement("span", null, it)))));
}
function SkillBar({ name, level, percentage, animate = true, className }) {
  const pct = Math.max(0, Math.min(99, percentage));
  const [w, setW] = React5.useState(animate ? 0 : pct);
  const ref = React5.useRef(null);
  React5.useEffect(() => {
    if (!animate || prefersReducedMotion()) {
      setW(pct);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver !== "function") {
      const t = window.setTimeout(() => setW(pct), 50);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver((entries) => {
      var _a;
      if ((_a = entries[0]) == null ? void 0 : _a.isIntersecting) {
        setW(pct);
        io.disconnect();
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [pct, animate]);
  return /* @__PURE__ */ React5.createElement("div", { className: cx("sb-skill-bar", className), ref }, /* @__PURE__ */ React5.createElement("div", { className: "sb-skill-bar__label" }, /* @__PURE__ */ React5.createElement("span", null, level ? `${name} (${level})` : name), /* @__PURE__ */ React5.createElement("span", { className: "sb-skill-bar__percentage" }, pct, "%")), /* @__PURE__ */ React5.createElement("div", { className: "sb-skill-bar__track", "aria-hidden": "true" }, /* @__PURE__ */ React5.createElement("div", { className: "sb-skill-bar__fill", style: { width: `${w}%` } })));
}

// src/components/cards.tsx
import * as React6 from "react";
function Card({ title, subtitle, interactive, padding, as: Tag_ = "div", children, className }) {
  const Comp = Tag_;
  return /* @__PURE__ */ React6.createElement(Comp, { className: cx("sb-card", interactive && "sb-card--interactive", className), style: padding ? { padding } : void 0 }, title ? /* @__PURE__ */ React6.createElement("h3", { className: "sb-card__title" }, title) : null, subtitle ? /* @__PURE__ */ React6.createElement("p", { className: "sb-card__subtitle" }, subtitle) : null, children);
}
function TimelineCard({ logo, logoAlt = "", date, title, company, location, current, description, link, as: Comp = "li", className }) {
  var _a, _b;
  const meta = [company, location].filter(Boolean);
  return /* @__PURE__ */ React6.createElement(Comp, { className: cx("sb-timeline-card", current && "sb-timeline-card--current", className) }, logo ? /* @__PURE__ */ React6.createElement("img", { className: "sb-timeline-card__logo", src: logo, alt: logoAlt, loading: "lazy", width: 38, height: 38 }) : /* @__PURE__ */ React6.createElement("span", { className: "sb-timeline-card__logo", "aria-hidden": "true" }), /* @__PURE__ */ React6.createElement("div", { className: "sb-timeline-card__body" }, /* @__PURE__ */ React6.createElement("div", { className: "sb-timeline-card__top" }, date ? /* @__PURE__ */ React6.createElement("span", { className: "sb-timeline-card__date" }, date) : null, current ? /* @__PURE__ */ React6.createElement(Tag, { variant: "badge" }, "Current") : null), /* @__PURE__ */ React6.createElement("h3", { className: "sb-timeline-card__name" }, title), meta.length ? /* @__PURE__ */ React6.createElement("p", { className: "sb-timeline-card__meta" }, meta.map((m, i) => /* @__PURE__ */ React6.createElement(React6.Fragment, { key: m }, i ? /* @__PURE__ */ React6.createElement("span", { className: "sb-timeline-card__sep", "aria-hidden": "true" }, "\xB7") : null, /* @__PURE__ */ React6.createElement("span", null, m)))) : null, description ? /* @__PURE__ */ React6.createElement("p", { className: "sb-timeline-card__description" }, description) : null, link ? /* @__PURE__ */ React6.createElement("a", { className: "sb-timeline-card__link", href: link.href, target: "_blank", rel: "noreferrer", title: `${(_a = link.label) != null ? _a : "View credential"}: ${title} (opens in a new tab)` }, (_b = link.label) != null ? _b : "View credential", /* @__PURE__ */ React6.createElement(Icon, { name: "arrow-up-right-from-square" })) : null));
}
function ServiceCard({ icon, iconAlt = "", name, description, price, currency = "$", period = "/USD per hour", action, className }) {
  return /* @__PURE__ */ React6.createElement("div", { className: cx("sb-service-card", className) }, icon ? /* @__PURE__ */ React6.createElement("img", { className: "sb-service-card__icon", src: icon, alt: iconAlt, loading: "lazy", width: 44, height: 44 }) : /* @__PURE__ */ React6.createElement("span", { className: "sb-service-card__icon sb-service-card__icon--empty", "aria-hidden": "true" }), /* @__PURE__ */ React6.createElement("h3", { className: "sb-service-card__name" }, name), description ? /* @__PURE__ */ React6.createElement("p", { className: "sb-service-card__description" }, description) : null, /* @__PURE__ */ React6.createElement("div", { className: "sb-service-card__price" }, /* @__PURE__ */ React6.createElement("span", { className: "sb-service-card__currency" }, currency), /* @__PURE__ */ React6.createElement("span", { className: "sb-service-card__amount" }, price), /* @__PURE__ */ React6.createElement("span", { className: "sb-service-card__period" }, period)), /* @__PURE__ */ React6.createElement("a", { className: cx("sb-service-card__button", action.className), href: action.href, target: "_blank", rel: "noreferrer", title: `${action.label}: ${name} (opens in a new tab)` }, action.label));
}
function BlogCard({ href, title, excerpt, image, imageAlt = "", date, className }) {
  return /* @__PURE__ */ React6.createElement("a", { className: cx("sb-blog-card", className), href }, image ? /* @__PURE__ */ React6.createElement("img", { className: "sb-blog-card__image", src: image, alt: imageAlt, loading: "lazy", height: 160 }) : /* @__PURE__ */ React6.createElement("span", { className: "sb-blog-card__image", "aria-hidden": "true" }), /* @__PURE__ */ React6.createElement("div", { className: "sb-blog-card__body" }, date ? /* @__PURE__ */ React6.createElement("span", { className: "sb-blog-card__date" }, date) : null, /* @__PURE__ */ React6.createElement("h3", { className: "sb-blog-card__title" }, title), excerpt ? /* @__PURE__ */ React6.createElement("p", { className: "sb-blog-card__excerpt" }, excerpt) : null));
}

// src/components/forms.tsx
import * as React7 from "react";
function TextField({ label, id, name, multiline, error, className, type = "text", ...rest }) {
  var _a;
  const fieldId = (_a = id != null ? id : name) != null ? _a : label.toLowerCase().replace(/\W+/g, "-");
  const common = {
    id: fieldId,
    name,
    className: cx("sb-field__control", className),
    "aria-invalid": error ? true : void 0,
    "aria-describedby": error ? `${fieldId}-error` : void 0,
    ...rest
  };
  return /* @__PURE__ */ React7.createElement("div", { className: "sb-field" }, /* @__PURE__ */ React7.createElement("label", { className: "sb-field__label", htmlFor: fieldId }, label), multiline ? /* @__PURE__ */ React7.createElement("textarea", { ...common }) : /* @__PURE__ */ React7.createElement("input", { type, ...common }), error ? /* @__PURE__ */ React7.createElement("span", { className: "sb-field__error", id: `${fieldId}-error` }, error) : null);
}
function ContactForm({
  title = "Send a message",
  subtitle = "Have a project in mind? I'd love to hear about it.",
  submitLabel = "Send Message",
  onSubmit,
  status: initialStatus = null,
  successText = "Message sent.",
  errorText = "Message not sent. Check the fields and try again.",
  className
}) {
  const [status, setStatus] = React7.useState(initialStatus);
  const submit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    const els = e.currentTarget.elements;
    const value = (n) => {
      var _a, _b;
      return (_b = (_a = els.namedItem(n)) == null ? void 0 : _a.value) != null ? _b : "";
    };
    Promise.resolve(onSubmit({ name: value("name"), email: value("email"), message: value("message") })).then(() => setStatus("success"), () => setStatus("error"));
  };
  return /* @__PURE__ */ React7.createElement(Card, { title, subtitle, className }, /* @__PURE__ */ React7.createElement("form", { className: "sb-contact-form", onSubmit: submit }, /* @__PURE__ */ React7.createElement(TextField, { label: "Name", id: "name", name: "name", required: true, autoComplete: "name" }), /* @__PURE__ */ React7.createElement(TextField, { label: "Email", id: "email", name: "email", type: "email", required: true, autoComplete: "email" }), /* @__PURE__ */ React7.createElement(TextField, { label: "Message", id: "message", name: "message", multiline: true, required: true }), /* @__PURE__ */ React7.createElement("button", { type: "submit", className: "sb-submit", title: "Send this message to Sergio" }, submitLabel), status ? /* @__PURE__ */ React7.createElement("p", { className: `sb-form-status sb-form-status--${status}`, role: "status" }, status === "success" ? successText : errorText) : null));
}

// src/components/documents.tsx
import * as React8 from "react";
function Callout({ label, tone = "accent", children, className }) {
  return /* @__PURE__ */ React8.createElement("aside", { className: cx("sb-callout", tone === "warning" && "sb-callout--warning", className) }, label ? /* @__PURE__ */ React8.createElement("p", { className: "sb-callout__label" }, label) : null, /* @__PURE__ */ React8.createElement("p", { className: "sb-callout__body" }, children));
}
function DoDont({ dos, donts, className }) {
  const panel = (kind, label, items) => /* @__PURE__ */ React8.createElement("div", { className: `sb-dodont__panel sb-dodont__panel--${kind}` }, /* @__PURE__ */ React8.createElement("p", { className: "sb-dodont__label" }, label), /* @__PURE__ */ React8.createElement("ul", { className: "sb-dodont__list" }, items.map((t) => /* @__PURE__ */ React8.createElement("li", { key: t }, t))));
  return /* @__PURE__ */ React8.createElement("div", { className: cx("sb-dodont", className) }, panel("do", "Do", dos), panel("dont", "Do not", donts));
}
export {
  BlogCard,
  Button,
  Callout,
  Card,
  CheckList,
  ContactForm,
  DoDont,
  FactList,
  Footer,
  Hero,
  ICONS,
  Icon,
  NavBar,
  Portrait,
  SectionHeading,
  ServiceCard,
  SkillBar,
  SkipLink,
  SocialIcons,
  Tabs,
  Tag,
  TextField,
  TimelineCard,
  TypedRole,
  Wordmark,
  cx,
  pad2,
  prefersReducedMotion
};
