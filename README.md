# William Andrade - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and skills. Built with Next.js 16, TypeScript, and Emotion for a polished, performant web experience.

## Features

- **Responsive Design**: Mobile-first approach ensuring seamless experiences across all devices
- **Modern Animations**: Smooth scroll animations and page transitions using Framer Motion
- **Type-Safe**: Built with TypeScript for enhanced developer experience and code reliability
- **Contact Form**: Integrated email functionality using Resend API
- **Dark Theme**: Sleek dark theme with gradient accents
- **SEO Optimized**: Built with Next.js for optimal search engine visibility
- **Performance**: Optimized builds with focus on speed and user experience
- **Custom 404 Page**: Branded error page with navigation options
- **Back to Top Button**: Smooth scroll-to-top functionality on all pages
- **Centralized Routing**: Type-safe route constants for consistent navigation
- **Mobile Navigation**: Hamburger menu with slide-out sidebar for mobile devices

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Emotion (CSS-in-JS)
- **Animations**: Framer Motion
- **State Management**: Redux Toolkit
- **Email Service**: Resend
- **Code Quality**: ESLint, Prettier

## Deployment

### Deploy via Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Pushed my code to a Git repository
2. Imported my repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy!

## Project Structure

```
williamlandrade-site/
├── app/                      # Next.js app directory
│   ├── about/                # About page
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form API endpoint
│   ├── contact/              # Contact page
│   ├── projects/             # Projects page
│   ├── EmotionRegistry.tsx   # Emotion CSS-in-JS SSR configuration
│   ├── icon.svg              # Favicon and app icon
│   ├── layout.tsx            # Root layout with metadata
│   ├── not-found.tsx         # Custom 404 page
│   ├── page.tsx              # Home page
│   └── providers.tsx         # Client-side providers
├── components/               # React components
│   ├── animations/           # Animation components
│   │   ├── ScrollReveal.tsx  # Scroll-triggered reveal animation
│   │   └── AnimatedCounter.tsx # Number counter animation
│   ├── layout/               # Layout components
│   │   ├── Container.tsx     # Content container wrapper
│   │   ├── Section.tsx       # Page section wrapper
│   │   ├── Grid.tsx          # Grid layout component
│   │   └── Flex.tsx          # Flexbox layout component
│   └── ui/                   # UI components
│       ├── Header.tsx        # Navigation header with mobile menu
│       ├── Footer.tsx        # Site footer
│       ├── Avatar.tsx        # Profile image component
│       └── BackToTop.tsx     # Scroll-to-top button
├── lib/                      # Utility libraries
│   └── constants.ts          # Application constants (routes, etc.)
├── public/                   # Static assets
│   ├── images/               # Images and screenshots
│   └── resume.pdf            # Downloadable resume
├── theme/                    # Theme configuration
│   └── index.ts              # Theme tokens (colors, typography, spacing)
├── .env.local                # Environment variables (not in repo)
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies

```

## Environment Variables

Created a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key for contact form
RESEND_API_KEY=my_resend_api_key_here
```

To get a Resend API key:

1. Signed up at [resend.com](https://resend.com)
2. Create a new API key in my dashboard
3. Added the key to my `.env.local` file

## Pages

- **Home** (`/`) - Landing page with hero section and service overview
- **About** (`/about`) - Professional background, skills, and experience timeline
- **Projects** (`/projects`) - Showcase of professional projects with descriptions
- **Contact** (`/contact`) - Contact form with email integration
- **404** (any invalid route) - Custom error page with navigation options

### Theme Customization

You can modify theme settings in `theme/index.ts`:

- Colors
- Typography
- Spacing
- Shadows
- Media queries

## Performance Optimization

This site is optimized for performance with:

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- CSS-in-JS with Emotion for minimal CSS bundle size
- Lazy loading of animations
- Font optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

William Andrade

- Email: andrade.william61@gmail.com
- LinkedIn: [william-andrade](https://www.linkedin.com/in/william-andrade/)
- GitHub: [andrade16](https://github.com/andrade16) or [williamlandrade](https://github.com/williamlandrade)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Emotion](https://emotion.sh/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email service by [Resend](https://resend.com/)
