# SkipLink

The first element in the DOM: hidden off canvas and sliding to 16px from the top on focus (0.2s ease), so keyboard users can jump past the navigation.

**Provide:** nothing by default; it targets `#main-content` with the label "Skip to content". The target needs `tabindex="-1"` so focus lands on it.

- Do: keep it first in the DOM on every page, including the blog.
- Don't: remove it because it is invisible to mouse users.
