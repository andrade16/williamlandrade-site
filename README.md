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

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Emotion (CSS-in-JS)
- **Animations**: Framer Motion
- **State Management**: Redux Toolkit
- **Email Service**: Resend
- **Code Quality**: ESLint, Prettier

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/williamlandrade-site.git
cd williamlandrade-site
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
RESEND_API_KEY=your_resend_api_key_here
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality
- `npm run format` - Formats code using Prettier
- `npm run format:check` - Checks code formatting

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Project Structure

```
williamlandrade-site/
├── app/                     # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── projects/            # Projects page
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form API
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── animations/          # Animation components
│   │   ├── ScrollReveal.tsx
│   │   └── AnimatedCounter.tsx
│   ├── layout/              # Layout components
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Grid.tsx
│   │   └── Flex.tsx
│   └── ui/                  # UI components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Avatar.tsx
├── public/                 # Static assets
│   └── images/             # Images and screenshots
├── theme/                  # Theme configuration
├── .env.local              # Environment variables (not in repo)
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies

```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key for contact form
RESEND_API_KEY=your_resend_api_key_here
```

To get a Resend API key:

1. Sign up at [resend.com](https://resend.com)
2. Create a new API key in your dashboard
3. Add the key to your `.env.local` file

## Pages

- **Home** (`/`) - Landing page with hero section and service overview
- **About** (`/about`) - Professional background, skills, and experience timeline
- **Projects** (`/projects`) - Showcase of professional projects with descriptions
- **Contact** (`/contact`) - Contact form with email integration

## Customization

### Update Personal Information

1. **Contact Information**: Update email, phone, and social links in:
   - `app/contact/page.tsx`
   - `components/ui/Footer.tsx`

2. **Experience**: Update work history in:
   - `app/about/page.tsx` (Experience section)

3. **Projects**: Update project details in:
   - `app/projects/page.tsx` (projects array)

4. **Profile Image**: Replace the avatar image at:
   - `public/images/william_profile_pic.jpg`

### Theme Customization

Modify theme settings in `theme/index.ts`:

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

## Contributing

This is a personal portfolio website. If you'd like to use it as a template:

1. Fork the repository
2. Update personal information
3. Customize styling and content
4. Deploy to your preferred platform

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

William Andrade

- Email: andrade.william61@gmail.com
- LinkedIn: [william-andrade](https://www.linkedin.com/in/william-andrade/)
- GitHub: [andrade16](https://github.com/andrade16)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Emotion](https://emotion.sh/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email service by [Resend](https://resend.com/)
