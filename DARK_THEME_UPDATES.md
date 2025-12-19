# Dark Theme Updates

## Summary

Your website has been updated to match a modern dark portfolio design inspired by https://www.tajmirul.site/

## Key Changes

### 1. Theme System (`app/theme/index.js`)

**Color Scheme:**

- Primary background: `#09090b` (very dark)
- Secondary background: `#18181b` (dark charcoal)
- Primary text: `#ffffff` (white)
- Secondary text: `#a1a1aa` (muted gray)
- Accent color: `#8b5cf6` (purple) - for CTAs and highlights

**New Color Structure:**

```js
colors: {
  primary: { main: '#ffffff', ... }  // White for text
  accent: { main: '#8b5cf6', ... }   // Purple for highlights
  text: { primary, secondary, muted, disabled, inverse }
  background: { primary, secondary, tertiary, elevated }
  border: { default, hover }
}
```

### 2. Global Styles (`app/styles/globalStyles.js`)

- Dark background by default
- Light text on dark background
- Smooth transitions on links with accent color on hover
- Anti-aliased fonts for better readability

### 3. Components Updated

**Header (`app/components/ui/Header.js`):**

- Glass-morphism effect with `backdrop-filter: blur(10px)`
- Transparent background with subtle border
- Animated underline on nav links
- Purple accent color on hover

**Footer (`app/components/ui/Footer.js`):**

- Dark background with subtle border
- Consistent with overall dark theme
- Purple accent on hover

**Homepage (`app/page.js`):**

- Hero section with gradient text effect (white to purple)
- Feature cards with hover animations
- Modern CTA buttons with purple accent
- Smooth transitions and transforms

### 4. New Features

**Animation Utilities (`app/utils/animations.js`):**

- Pre-built framer-motion animation variants
- `fadeIn`, `fadeInUp`, `fadeInDown`
- `scaleIn`, `slideInLeft`, `slideInRight`
- `staggerContainer` and `staggerItem` for sequential animations

### 5. Dependencies

**Added:**

- `framer-motion` - For smooth, professional animations

## Visual Features

1. **Gradient Hero Title** - White to purple gradient text
2. **Card Hover Effects** - Lift and glow on hover
3. **Glassmorphism Header** - Blurred transparent header
4. **Animated Nav Links** - Underline animation on hover
5. **Purple Accents** - Consistent accent color throughout
6. **Smooth Transitions** - All interactive elements have 0.2-0.3s transitions

## Color Palette Reference

```
Dark Backgrounds:
- Primary: #09090b
- Secondary: #18181b
- Tertiary: #27272a

Text Colors:
- Primary: #ffffff
- Secondary: #a1a1aa
- Muted: #71717a

Accent:
- Main: #8b5cf6
- Light: #a78bfa
- Dark: #7c3aed

Borders:
- Default: #27272a
- Hover: #3f3f46
```

## How to Customize

### Change Accent Color:

Edit `app/theme/index.js`:

```js
accent: {
  main: '#your-color',
  light: '#lighter-shade',
  dark: '#darker-shade',
}
```

### Adjust Background Darkness:

```js
background: {
  primary: '#your-bg-color',
  secondary: '#slightly-lighter',
  // ...
}
```

### Typography:

All responsive typography is already set up with `clamp()` for fluid scaling.

## Testing

The site should now have:

- ✓ Dark theme throughout
- ✓ Purple accent colors
- ✓ Smooth animations
- ✓ Responsive design
- ✓ Modern hover effects
- ✓ Glassmorphism header

Run `npm run dev` and visit `http://localhost:3000` to see the changes.

## Reference

Inspired by modern portfolio designs with dark themes, particularly:

- https://www.tajmirul.site/
- Modern minimalist aesthetic
- Clean typography
- Smooth interactions
