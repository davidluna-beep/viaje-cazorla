---
name: Natural Explorer
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#727973'
  outline-variant: '#c2c8c1'
  surface-tint: '#466553'
  primary: '#163526'
  on-primary: '#ffffff'
  primary-container: '#2d4c3b'
  on-primary-container: '#99bca6'
  inverse-primary: '#accfb8'
  secondary: '#785832'
  on-secondary: '#ffffff'
  secondary-container: '#fed2a2'
  on-secondary-container: '#795932'
  tertiary: '#18323d'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f4954'
  on-tertiary-container: '#9cb7c5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7ebd4'
  primary-fixed-dim: '#accfb8'
  on-primary-fixed: '#012113'
  on-primary-fixed-variant: '#2e4d3c'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#e9bf90'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#5e411d'
  tertiary-fixed: '#cbe7f5'
  tertiary-fixed-dim: '#afcbd8'
  on-tertiary-fixed: '#021f29'
  on-tertiary-fixed-variant: '#304a55'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
  adventure-accent: '#D35400'
  gastronomy-accent: '#C0392B'
  nature-accent: '#27AE60'
  starlight-blue: '#1A237E'
  surface-cream: '#F4F1EA'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality for the app is grounded, adventurous, and reliable. It aims to evoke the feeling of a trusted local guide—someone who knows the hidden trails of the Sierras de Cazorla but presents them with modern clarity. The "Natural Explorer" style balances the ruggedness of outdoor adventure with the seamless usability of a premium travel tool.

The visual direction is a blend of **Modern Minimalism** and **Tactile Design**. We use heavy whitespace to allow high-quality nature photography to breathe, while employing organic color palettes and soft geometry to make the experience feel approachable for families and groups. The UI avoids the clinical coldness of typical SaaS products, opting instead for a warm, "wood-and-stone" aesthetic that feels at home in the wilderness.

## Colors

The palette is derived directly from the landscape of the Natural Park.
- **Primary (Forest Green):** Used for primary actions, navigation headers, and core branding elements. It represents the dense pine forests.
- **Secondary (Wood Brown):** Used for highlights, call-to-actions that require warmth, and interactive accents.
- **Tertiary (Slate Grey):** Used for logistical information, secondary icons, and subtle UI borders.
- **Neutral (Warm Off-White):** The canvas of the app. We avoid pure white (#FFFFFF) in favor of a soft cream to reduce eye strain and provide a more organic feel.

**Named Colors** are utilized for category-specific tagging:
- `adventure-accent` for high-energy activities like Vía Ferrata or Kayaking.
- `gastronomy-accent` for restaurant listings and food experiences.
- `nature-accent` for hiking and fauna observation.

## Typography

The typography system focuses on high legibility in outdoor conditions (high glare). 

- **Montserrat** is the display face. Its geometric, open counters feel modern and authoritative, perfect for trail names and section headers. 
- **Inter** is the workhorse for body copy and metadata. It provides exceptional clarity for logistical details like car travel times and difficulty ratings.

We use a generous line-height to ensure that long descriptions of hiking routes remain readable. Label styles use slightly increased letter spacing and uppercase transformations to distinguish metadata (like "TYPE" or "LOGISTICS") from general descriptive text.

## Layout & Spacing

The design system utilizes a **Fixed Grid** for desktop to maintain focus on the travel itinerary, while transitioning to a **Fluid Grid** for mobile devices to accommodate single-hand use on the trail.

- **Desktop:** 12-column grid with a 1200px max-width. Content is centered to create a "journal" feel.
- **Mobile:** Single column with 16px side margins. 
- **Spacing Rhythm:** Based on an 8px scale. Padding within activity cards should be generous (24px) to ensure touch targets for adolescents and adults alike are easy to hit.

The "Daily Timeline" view uses a vertical rhythm where 48px of vertical space represents roughly one hour of the day, allowing for a visual "gap" where no activities are planned.

## Elevation & Depth

To maintain the "Natural Explorer" aesthetic, this design system avoids heavy, artificial dropshadows. Instead, it uses **Tonal Layering** and **Ambient Depth**.

- **Surface Levels:** The base background is `neutral-color_hex`. Cards and interactive containers use `surface-cream` or white to subtly lift off the page.
- **Shadows:** When depth is required (e.g., for an active activity card), use a very soft, diffused shadow: `box-shadow: 0 4px 20px rgba(45, 76, 59, 0.08)`. Note the use of the primary green in the shadow tint to keep it natural.
- **Depth via Blur:** Use backdrop blurs (10px) on navigation bars and floating action buttons to maintain a sense of context with the background imagery.

## Shapes

The shape language is defined by **Rounded** geometry (8px base). This choice softens the "technical" nature of a planning app and makes it feel more like a friendly travel companion.

- **Buttons & Inputs:** Use the base 8px radius.
- **Activity Cards:** Use `rounded-lg` (16px) to create a clear container for high-quality photography.
- **Category Filters:** Use `rounded-xl` or full pill shapes to distinguish them from actionable buttons.
- **Images:** All images within cards should inherit the container's roundedness for a unified look.

## Components

### Activity Cards
Cards feature a 16:9 image header. The content area includes a prominent "Score" badge (e.g., ⭐ 9.5) in the top right. Use the `tertiary_color` for logistics icons (car, clock, mountain).

### Daily Timeline
A vertical line in `secondary_color` connects chronological activities. Each "stop" is represented by a 12px dot. Morning, Afternoon, and Evening are separated by horizontal dividers with a label in `label-sm`.

### Category Filters
Pill-shaped chips that use an "Outlined" style when inactive and a "Solid" style using the specific `named_colors` (Adventure, Gastronomy, Nature) when selected.

### Buttons
- **Primary:** Solid `primary_color_hex` with white text. High contrast for critical actions like "Book Now" or "Start Navigation."
- **Secondary:** Outlined in `secondary_color_hex` with matching text for less urgent actions like "View Details."

### Status Indicators (Effort Levels)
Use a 3-bar signal icon to represent "Esfuerzo" (Effort):
- 1 bar (Green): Bajo
- 2 bars (Amber): Medio
- 3 bars (Red): Alto

### Input Fields
Soft cream background (`surface-cream`) with a bottom-only border in `tertiary_color` for a clean, sophisticated look. Use `body-md` for user input.