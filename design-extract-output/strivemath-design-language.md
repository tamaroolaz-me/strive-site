# Strive Math — Design Language

Extracted from https://www.strivemath.com/ · April 2026  
Framework: Next.js + Chakra UI

---

## Color Palette

### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#0F1574` | Dark navy — headings, primary text, CTA backgrounds |
| Primary Light | `#878AB9` | Muted purple-grey — secondary text, subtle UI |
| Primary Orange 100 | `#FF6635` | Vivid coral-orange — highlights |
| Primary Orange 50 | `#FFB39A` | Soft peach — tints |

### Accent Colors (Rainbow System)
| Name | Hex | Role |
|------|-----|------|
| Accent Purple | `#7058FF` | Primary accent — buttons, hover glows, focus rings |
| Accent Pink | `#FF4F84` | Energy, gradients |
| Accent Orange | `#FFA41C` | Warmth, gradients |
| Accent Green | `#B0EB33` | Success, vibrancy |
| Accent Blue | `#2C81ED` | Trust, links |

### Gradient (Signature)
```
linear-gradient(to right, #FFA41C → #FF4F84 → #7058FF → #2C81ED → #B0EB33)
```
Used on CTAs, hover states, decorative elements.

### Semantic / UI Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Dark | `#575863` | Body text |
| Text Muted | `#B1B1C2` | Placeholder, caption |
| Navy Section BG | `#484D97` | Dark section backgrounds |
| Purple Tint BG | `#f1eeff` | Light purple card backgrounds |
| Subtle BG | `#f3f3f8` | Page section alternates |
| Error | `#FF4F84` | Inline errors (reuses accent pink) |
| REPL Outline | `#0F1574` | Code editor border |
| REPL Explanation | `#FF4F84` | Code explanation highlights |

---

## Typography

### Font Families
| Family | Usage | Weights Available |
|--------|-------|-------------------|
| **Jost** | Headings, UI, navigation | 400, 500, 600, 700 |
| **Roboto** | Body copy fallback | 400 |
| **Inconsolata** | Code / monospace | 400, 600, 700, 900 |

**Font stack:** `Jost, sans-serif` · `Roboto, sans-serif` · `Inconsolata, monospace`

### Type Scale (Chakra UI)
| Token | Value | Usage |
|-------|-------|-------|
| `sm` | ~14px | Captions, labels |
| `md` | 16px | Base body |
| `lg` | ~18px | Large body |
| `xl` | ~20px | Subheadings |
| `3xl` | ~30px | Section titles |
| `6xl` | ~60px | Hero headings |
| `100px` | 100px | Display / oversized decorative |

### Font Weights
| Weight | Token |
|--------|-------|
| 400 | Regular |
| 500 | Medium |
| 600 | SemiBold |
| 700 | Bold |
| 900 | Black (code display) |

### Other Typography
- **Letter spacing:** `0.01rem`, `0.02em`
- **Line heights:** Standard Chakra defaults (tall for headings)

---

## Spacing & Layout

- **Base unit:** 4px (Chakra default, 1 = 4px)
- **Custom breakpoint:** `lg: 1230px` (overrides Chakra default of 992px)
- Standard Chakra breakpoints: `sm: 480px`, `md: 768px`, `lg: 1230px`, `xl: 1280px`

---

## Border Radius

| Value | Usage |
|-------|-------|
| `5px` / `7px` | Small inputs, chips |
| `16px` / `20px` | Cards, modals |
| `24px` / `30px` | Feature cards |
| `32px` / `40px` | Large cards |
| `55px` / `65px` / `94px` / `100px` | Pills, big CTAs |
| `full` / `100%` | Circles, avatar, badges |

**Signature shape:** Highly rounded pill buttons (`borderRadius: "24.5px"` to `"100px"`)

---

## Shadows

| Name | Value |
|------|-------|
| Card subtle | `0px 8px 30.26px rgba(15, 21, 116, 0.07)` |
| Card standard | `0px 8px 24px rgba(0, 0, 0, 0.1)` |
| Card hover | `0px 15px 30px 0px rgba(0, 0, 0, 0.1)` |
| Elevated | `0 14px 24px #00000033` |
| Hero dramatic | `0px 70px 70px -50px rgb(0 0 0 / 30%), 0px 10px 20px -15px rgb(0 0 0 / 10%)` |
| Button press | `0px 4px 11px rgba(0, 0, 0, 0.31)` |
| Focus ring | `0px 0px 0px 3px white, 0px 0px 0px 6px hsla(249, 100%, 67%, 0.3)` |
| Glow (purple) | `0px 0px 48px 0px rgb(199 199 224)` |
| Swiper card | `-5px 5px 15px 1px var(--chakra-colors-accentPurple)` |

---

## Animations & Transitions

| Property | Value |
|----------|-------|
| Default transition | `0.2s all` |
| Fast transition | `0.15s all` |
| Transform | `transform 0.3s` |
| Button gradient | `200ms` duration |
| Width animate | `width 1s` |
| Flash effect | Custom CSS var `--appear-distance: 130%` |

---

## Gradients (All)

| Name | Definition |
|------|-----------|
| Rainbow CTA | `linear(to-r, accentOrange, accentPink, accentPurple)` |
| Rainbow hover | `linear(to-r, #FFA41C, #FF4F84, #7058FF, #2C81ED, #B0EB33)` |
| Navy hero | `linear(315deg, #134297 0%, #0F3C8E 20%, #0B3785 40%, #07317C 60%, #032B74 80%, #00266b 100%)` |
| Dark fade | `linear-gradient(to-b, #484C97, #484C9766)` |
| Coral-Pink-Purple | `linear-gradient(to right, #FE6636, #FF4F84 40%, #7058FF 80%)` |

---

## Component Patterns

### CTA Button
- Background: Rainbow gradient (`accentOrange → accentPink → accentPurple`)
- Hover: Extended rainbow (`+ accentBlue + accentGreen`)
- Border radius: `24.5px`
- Color: `white`
- Transition: `200ms`
- Padding: `py:5 px:5`

### Cards
- Background: `#fff` or `#f1eeff`
- Border radius: `16px`–`40px`
- Shadow: `0px 8px 30.26px rgba(15, 21, 116, 0.07)`

### Code/REPL
- Font: `Inconsolata`
- Outline: `#0F1574`
- Explanation color: `#FF4F84`

### Navigation
- Sticky on scroll
- Background: `#ffffffbb` (frosted)
- Color mode: Light only

---

## Accessibility

- Color mode: **Light only** (`initialColorMode: "light"`, `useSystemColorMode: false`)
- Focus rings: `0px 0px 0px 3px white, 0px 0px 0px 6px hsla(249, 100%, 67%, 0.3)`
- Contrast: Primary `#0F1574` on white — WCAG AAA compliant

---

## Framework & Tools

- **Framework:** Next.js (App Router disabled, pages-based)
- **UI Library:** Chakra UI (extendTheme pattern)
- **Analytics:** Google Tag Manager (`GTM-PK4HRL6`)
- **Support:** Intercom (`app_id: il3i9ko7`)
- **Swiper:** carousel component
