# Layout System Guide

## Overview

This project includes a comprehensive responsive-first layout system with reusable components, a dark theme system, and global styles inspired by modern portfolio websites.

## Theme System

Located in `app/theme/index.js`, the theme includes:

### Breakpoints
```js
xs: '320px'   // Extra small devices
sm: '576px'   // Small devices
md: '768px'   // Medium devices (tablets)
lg: '992px'   // Large devices (desktops)
xl: '1200px'  // Extra large devices
xxl: '1400px' // Extra extra large devices
```

### Media Queries
Use `theme.mediaQueries` for responsive styling:
```js
${theme.mediaQueries.md} {
  font-size: 1.5rem;
}
```

### Spacing
Consistent spacing scale: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`

### Colors
Modern dark theme with:
- **Primary**: White/light tones for main text
- **Accent**: Purple (#8b5cf6) for highlights and CTAs
- **Neutral grays**: 50-950 scale for various UI elements
- **Text colors**: primary (white), secondary, muted, disabled
- **Background colors**: primary (#09090b), secondary, tertiary, elevated
- **Border colors**: default and hover states

### Typography
- Font families (primary, monospace)
- Font sizes (xs through 5xl)
- Font weights (light, normal, medium, semibold, bold)
- Line heights (tight, normal, relaxed)

## Layout Components

### Container
Centers content with responsive max-width and padding.

```jsx
import { Container } from './components'

<Container>Content</Container>
<Container fluid>Full width</Container>
<Container narrow>Narrower max-width for readability</Container>
```

### Grid
Responsive grid layout with customizable columns per breakpoint.

```jsx
import { Grid, GridItem } from './components'

<Grid cols={1} mdCols={2} lgCols={3} gap="2rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <GridItem colSpan={2}>Spans 2 columns</GridItem>
</Grid>
```

Props:
- `cols` - columns for mobile (default: 1)
- `smCols` - columns for small screens
- `mdCols` - columns for medium screens
- `lgCols` - columns for large screens
- `xlCols` - columns for extra large screens
- `gap` - gap between items

### Flex
Flexbox container with responsive options.

```jsx
import { Flex, FlexItem } from './components'

<Flex direction="row" justify="space-between" align="center" gap="1rem">
  <FlexItem flex="1">Item 1</FlexItem>
  <FlexItem>Item 2</FlexItem>
</Flex>

// Responsive: column on mobile, row on desktop
<Flex responsive direction="row">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

Props:
- `direction` - flex-direction (default: 'row')
- `justify` - justify-content (default: 'flex-start')
- `align` - align-items (default: 'stretch')
- `gap` - gap between items
- `wrap` - flex-wrap (default: 'nowrap')
- `responsive` - switches to column on mobile

### Section
Page section with responsive padding.

```jsx
import { Section } from './components'

<Section>Content</Section>
<Section fullHeight>Takes full viewport height</Section>
<Section center>Centers content vertically and horizontally</Section>
<Section bgColor="#f8f9fa">With background color</Section>
<Section paddingY="4rem">Custom padding</Section>
```

### Header
Sticky header with navigation. Located in `app/components/Header.js`.

- Mobile-responsive with hamburger menu button
- Sticky positioning
- Customizable navigation links

### Footer
Multi-column footer with links and copyright. Located in `app/components/Footer.js`.

- Responsive grid layout
- Social links
- Copyright year

## Global Styles

Located in `app/styles/globalStyles.js`, includes:

- CSS reset
- Responsive typography with fluid scaling
- Base link styles
- Consistent spacing
- Image responsiveness

## Usage Examples

### Basic Page Layout

```jsx
'use client'

import { Container, Section, Grid } from './components'

export default function Page() {
  return (
    <>
      <Section fullHeight center>
        <Container>
          <h1>Hero Section</h1>
          <p>Full height centered section</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Grid Section</h2>
          <Grid cols={1} mdCols={2} lgCols={3}>
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
          </Grid>
        </Container>
      </Section>
    </>
  )
}
```

### Custom Styled Component

```jsx
'use client'

import styled from '@emotion/styled'
import { theme } from './theme'

const Card = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: 8px;
  box-shadow: ${theme.shadows.md};

  ${theme.mediaQueries.md} {
    padding: ${theme.spacing.xl};
  }
`
```

## Responsive Design Philosophy

This layout system follows a mobile-first approach:

1. Design for mobile first (smallest screens)
2. Use media queries to enhance for larger screens
3. Content should be readable at any size
4. Touch targets should be at least 44x44px
5. Test on actual devices when possible

## Animations

The project includes framer-motion for smooth animations. Utility animations are available in `app/utils/animations.js`:

```jsx
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from './utils/animations'

<motion.div {...fadeInUp}>
  Animated content
</motion.div>

<motion.div variants={staggerContainer} initial="initial" animate="animate">
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
</motion.div>
```

Available animations:
- `fadeIn`, `fadeInUp`, `fadeInDown`
- `scaleIn`
- `slideInLeft`, `slideInRight`
- `staggerContainer`, `staggerItem`

## Customization

### Modifying the Theme

Edit `app/theme/index.js` to customize:
- Brand colors (current accent: purple #8b5cf6)
- Background colors (dark theme)
- Breakpoints
- Spacing scale
- Typography

### Adding New Components

1. Create component in `app/components/`
2. Export from `app/components/index.js`
3. Follow responsive-first patterns

### Overriding Global Styles

Edit `app/styles/globalStyles.js` to modify base styles.
