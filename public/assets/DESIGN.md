---
name: Justice & Gutter Style
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4d4732'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#b51b0b'
  on-secondary: '#ffffff'
  secondary-container: '#d93723'
  on-secondary-container: '#fffbff'
  tertiary: '#3a5f94'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8dbff'
  on-tertiary-container: '#3b6095'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a7'
  on-secondary-fixed: '#400200'
  on-secondary-fixed-variant: '#920800'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a7c8ff'
  on-tertiary-fixed: '#001b3c'
  on-tertiary-fixed-variant: '#1f477b'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 2px
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.1'
  subheading-serif:
    fontFamily: Domine
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.4'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
spacing:
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  grid-margin: 12px
  grid-gutter: 8px
---

## Brand & Style

This design system is built on the aesthetic of high-volume, low-budget legal marketing. It is intentionally chaotic, loud, and designed to evoke the high-pressure urgency of a late-night TV commercial. The personality is aggressive, unpolished, and unapologetically tacky.

The design style is a hybrid of **Neubrutalism** and **Late-90s Web Gore**. It utilizes massive, clashing typography, heavy black strokes, and a "more is more" approach to information density. Every element fights for attention, creating a visual environment that feels urgent, frantic, and "eye-searing."

## Colors

The palette is dominated by high-saturation primary colors that clash by design. 
- **School Bus Yellow (#ffd700):** Used as the primary background and high-impact surface color. It is meant to be overwhelming.
- **Emergency Red (#e23d28):** Reserved for urgent calls to action, headlines that demand immediate attention, and aggressive borders.
- **Legal Blue (#003366):** Used for "authoritative" elements, secondary buttons, and to provide a jarring contrast against the yellow and red.
- **Black (#000000):** Used for heavy neubrutalist shadows, thick borders (4px+), and primary text.

## Typography

The typography strategy is "Billboard Style." It prioritizes impact over elegance. 
- **Headlines:** Use **Anton** for a condensed, massive look. Headlines should frequently use text shadows (black or white) and occasional gradients to mimic 90s WordArt.
- **Subheadings:** Mix in **Domine** to provide a "serious lawyer" serif contrast that feels disjointed from the rest of the UI.
- **Body & Data:** Use **Archivo Narrow** for its high information density and utilitarian feel. 
- **Labels:** **Space Grotesk** adds a slightly "technical" but harsh edge to smaller UI elements.

**Instruction:** Always use ALL CAPS for primary CTAs and major headlines. Do not be afraid to use inconsistent casing for "character."

## Layout & Spacing

This design system rejects standard whitespace. The layout model is a **Chaotic Grid**. Elements should feel "crammed" together to simulate the urgency of a tabloid or a low-budget website.

- **Breakpoints:** Desktop (1280px+), Tablet (768px), Mobile (375px).
- **Margins/Gutters:** Use tight gutters (8px) and small margins (12px) to ensure content hits the edge of the screen.
- **Reflow:** On mobile, stack elements vertically but maintain the "cluttered" density by reducing vertical padding between cards to almost zero.
- **Alignment:** Intentionally mix center-aligned headlines with left-aligned body text and right-aligned "flashes" or badges.

## Elevation & Depth

Depth is achieved through **Neubrutalist Hard Shadows**. Do not use blurs, soft gradients, or environmental lighting.
- **Shadows:** Use solid black `#000000` offsets (e.g., `4px 4px 0px 0px`).
- **Borders:** Every container must have a minimum 3px solid black border. 
- **Layers:** Use "Flash" elements (bright red boxes with yellow text) that sit on the highest Z-index, often rotated at 5-10 degree angles to break the grid and create a "sticker" effect.
- **Z-Index:** Content should occasionally overlap, with heavy borders separating the layers.

## Shapes

The shape language is strictly **Sharp (0)**. 
- All buttons, input fields, and containers must have 0px corner radii.
- The only exceptions are "starburst" shapes or "callout bubbles" used for prices or "FREE" offers, which should be jagged and hand-drawn in style.

## Components

### Buttons
Primary buttons should be **Emergency Red** with white text, a 4px black border, and a 4px hard black shadow. On hover, the shadow should disappear as the button "depresses" (translate 4px 4px).

### Cards
Cards should use a **Legal Blue** border or a thick black border. Backgrounds within cards can vary wildly—white for readability or a secondary yellow for maximum "eyesore" effect.

### Input Fields
Inputs must have a 3px black border. Use a bright yellow background for the active state. Placeholder text should be high-contrast and aggressive.

### Chips/Badges
Badges should look like "discount stickers." Use starburst shapes or bright red rectangles with yellow text. Place them at odd angles (e.g., -15deg) over the corners of images or cards.

### Navigation
The navigation bar should be a solid block of color (Blue or Red) with no transparency. Use uppercase **Anton** for links, separated by thick vertical bars or bullets.

### Testimonial "Flashes"
Create a component for "Customer Stories" that uses a bright magenta or green border to intentionally clash with the primary palette, featuring low-resolution user photos and bold, capitalized text.