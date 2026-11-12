# Complete Protein design system

A small design system built from the Complete Protein app: one token file, React and
TypeScript components, and a matching Figma file.

## What is in the box
| Part | Status |
|---|---|
| Tokens (colour, spacing, radius, type, sizes) with light and dark themes | Done. Contrast checked in code |
| Button (primary, secondary, ghost, disabled) | Done |
| TextField (label, hint, error state with icon, text and thicker border) | Done |
| Badge: Complete and Partial (+n EAA) | Done |
| AminoDots (nine essential amino acids, spoken label) | Done |
| IngredientRow (pair row combining dots and badge) | Done |
| Card | Done |
| Storybook stories and config | Written, not run. Needs `npx storybook@latest init` |
| Modal, Navigation, responsive page layouts | Not built yet |

## Run it
```
npm install
npm run tokens      # checks contrast and regenerates src/styles/tokens.css
npm run typecheck
npx storybook@latest init   # first time only, then npm run storybook
```
After `init`, keep the `.storybook/` and `*.stories.tsx` files in this folder
(overwrite the generated samples if it asks).

## One source of truth
Edit `design-tokens/tokens.json`, run `npm run tokens`, and the CSS variables update.
`build-tokens.mjs` fails if any text, control or focus colour drops below WCAG 2.1
contrast (4.5:1 for text, 3:1 for controls and focus, in light and dark).

## Figma file structure (build this to match the code)
Pages: Cover, Foundations, Components, Patterns, Prototype.

Variable collections (create one mode per theme: Light, Dark):
| Figma variable | Code token |
|---|---|
| color/surface, color/surface-raised | --color-surface, --color-surface-raised |
| color/text, color/text-muted | --color-text, --color-text-muted |
| color/border, color/border-strong | --color-border, --color-border-strong |
| color/accent, color/on-accent, color/focus | --color-accent, --color-on-accent, --color-focus |
| color/success-bg, -text, -border | --color-success-bg, -text, -border |
| color/danger-bg, -text, -border | --color-danger-bg, -text, -border |
| color/neutral-bg, color/neutral-text | --color-neutral-bg, --color-neutral-text |
Number variables: space/1 to space/6, radius/sm, md, lg, size/control, size/dot.
Text styles: the five sizes (14, 16, 20, 24, 32) with the two line heights.

Figma components (use variants and auto layout): Button (variant x state), Text field
(default, focus, error, disabled), Badge (complete, partial), Amino dots (base, added,
missing), Ingredient row, Card. Name the variant properties exactly like the React props
(`variant`, `base`, `added`).

## The side-by-side proof
Make one Prototype or Components frame that shows the pairs list in Figma next to the
same list rendered from Storybook, in light and dark. Screenshot both for the case study.

## Accessibility notes
- Controls are 44px tall (`--size-control`).
- Error and badge states use an icon plus text, never colour alone.
- Dots carry a label such as "9 of 9 essential amino acids covered".
- Focus ring is a 3px outline with offset, visible in both themes.
- Hover motion respects `prefers-reduced-motion`.
- Sample rows in the stories are placeholder data, not real nutrition scores.
