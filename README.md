```markdown
# Lovable FAQ Bubble (Renderweb)

Files:
- lovable-faq-bubble.js — self-contained embeddable FAQ chat bubble (JS injects required styles)
- variables.css — optional theme variables (see below)

What it does:
- Adds a bottom-right chat bubble labeled "Renderweb FAQ".
- Opens an accessible accordion-style FAQ panel with 3 items (as provided).
- Questions are larger and use the site's main color (reads CSS variables if available).
- Keyboard and screen-reader friendly; emits a `lovable:faq:open` event when an item is opened.

Integration (two simple options):

1) Host the JS file (recommended)
- Upload `lovable-faq-bubble.js` to your CDN or static hosting.
- In Lovable's Custom HTML widget (or site footer), add:
  `<script src="https://cdn.example.com/path/to/lovable-faq-bubble.js" defer></script>`
- Replace the `src` with the real URL.

2) Inline in Lovable (if small/one-off)
- Open Lovable's Custom HTML area and paste the entire contents of `lovable-faq-bubble.js` inside a `<script defer>` block.

Customization:
- The component prefers an existing CSS variable for the main color:
  --rw-main-color or --primary will be used if present.
- You can also set these in your site CSS or provide the optional `variables.css`.
  Example (variables.css):
  ```
  :root {
    --lovable-main-color: #e91e63;
    --lovable-question-size: 1.2rem;
    --lovable-answer-size: 1rem;
  }
  ```
- Or call at runtime:
  `window.lovableFAQ.setColor('#e91e63');`

Accessibility & behavior:
- Semantic roles and aria attributes present (aria-expanded, aria-controls, aria-hidden, role="dialog"/"region").
- Keyboard: Tab navigation, Enter/Space toggles, ArrowUp/ArrowDown move between questions, Escape closes panel.
- Only one accordion item is open at a time.

Events:
- The component dispatches `lovable:faq:open` on window when a question is opened:
  `window.addEventListener('lovable:faq:open', e => console.log(e.detail));`

Notes:
- No external dependencies.
- Keep the JS accessible to the page (deferred script recommended).
- If you want the component to pick up your site's primary color, define `--rw-main-color` or `--primary` in your global CSS.

If you'd like, I can:
- Produce a zipped package of these files.
- Provide a one-line Lovable widget snippet already pointing at an example CDN URL.
```