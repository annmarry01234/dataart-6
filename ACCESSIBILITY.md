# Accessibility Features

This project implements several accessibility best practices following WCAG 2.1 AA guidelines.

## Timeline
- Timeline markers are **focusable buttons** with `role="button"`.
- Users can navigate using **Tab** or **Arrow keys** (← →).
- The active marker uses **`aria-current="step"`**.

## Modal
- Implemented with **`role="dialog"`** and `aria-modal="true"`.
- Focus is **trapped inside the modal** when open.
- Modal can be closed with **Escape key** or **Close button**.
- When closed, focus **returns to the triggering marker**.

## Images
- All images include descriptive **`alt` text**.

## Keyboard Support
- Open modal via **Enter** or **Space** on timeline markers.
- Close via **Esc** or **Close button**.

## Colour Contrast
- Colours checked to ensure at least **4.5:1 contrast ratio** for text.
- Focus states have visible outlines (`focus:ring`).

## Other
- All interactive elements use **semantic roles**.
- Headings (`h2`, `h3`) follow logical order for screen readers.
