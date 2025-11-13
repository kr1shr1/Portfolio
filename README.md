# Kritarth Shrivastava - Full Stack Developer Portfolio

A modern, animated single-page portfolio website showcasing projects, skills, and achievements of a full-stack web developer. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Light Theme** - Clean, professional design with smooth animations and gradients
- **Fully Responsive** - Mobile-first design that works seamlessly on all devices
- **Smooth Animations** - Sophisticated fade-in, slide-in, and stagger animations throughout
- **Single Page Application** - Fast navigation with smooth scrolling between sections
- **Dark Mode Ready** - Built with light theme but easily customizable for dark mode
- **Performance Optimized** - Uses Next.js 16 with optimized loading and rendering

## 📑 Sections

1. **Hero** - Eye-catching introduction with animated gradient text and call-to-action
2. **About** - Personal story and key statistics
3. **Projects** - Featured 4 projects with tech stacks, descriptions, and GitHub links
   - Car-Saathi (Ride-sharing app)
   - AcadHelper (Course management platform)
   - Coin Change (Expense tracker)
   - Buildzy (Collaborative website builder)
4. **Skills** - Technical skills organized by categories
   - Languages
   - CS Fundamentals
   - Frameworks & Libraries
   - Databases & Tools
5. **Achievements** - Competitive programming accomplishments and ratings
6. **Contact** - Email, phone, and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Forms**: React Hook Form + Zod

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 Customization

### Update Personal Information

Edit these files to customize the portfolio:

- **Hero Section**: `components/sections/hero.tsx`
- **About Section**: `components/sections/about.tsx`
- **Projects Section**: `components/sections/projects.tsx`
- **Skills Section**: `components/sections/skills.tsx`
- **Achievements Section**: `components/sections/achievements.tsx`
- **Contact Section**: `components/sections/contact.tsx`

### Modify Colors

Colors are defined using Tailwind CSS design tokens in `app/globals.css`. Key color variables:
- `--primary`: Main brand color (purple)
- `--accent`: Accent color (warm)
- `--secondary`: Secondary background color
- `--background`: Main background color
- `--foreground`: Text color

### Add New Projects

Edit `components/sections/projects.tsx` and add a new project object to the `projects` array:

\`\`\`typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["Tech1", "Tech2", "Tech3"],
  image: "/path-to-image.jpg",
  github: "https://github.com/link",
  live: "https://project-link.com"
}
\`\`\`

### Customize Navigation Links

Edit `app/page.tsx` to modify the navigation menu items.

## 🎨 Design System

The portfolio uses a consistent design system with:
- **Color Palette**: Purple primary (#9333ea), Warm accent (#f97316), Clean neutrals
- **Typography**: Clean sans-serif font family with proper hierarchy
- **Spacing**: Consistent spacing scale following Tailwind conventions
- **Animations**: Smooth transitions with staggered timing for visual interest

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (md breakpoint)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (lg breakpoint)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Vercel will automatically build and deploy

### Environment Variables

No environment variables required for this portfolio. It's a static site with client-side rendering.

## 📂 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with navigation
│   ├── globals.css         # Global styles and design tokens
│   └── favicon.ico
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── achievements.tsx
│   │   └── contact.tsx
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
│   └── images/            # Project images
├── package.json
├── tsconfig.json
├── next.config.mjs
└── README.md
\`\`\`

## 🎯 Performance Optimizations

- Next.js 16 with Turbopack (default bundler)
- Optimized CSS with Tailwind CSS v4
- Lazy-loaded images
- Minimal JavaScript bundle
- Smooth animations using CSS transforms
- Viewport-based animation triggers

## 🔗 Contact & Links

- **Email**: kritarthshrivastava28@gmail.com
- **Phone**: +91-9412807859
- **GitHub**: [GitHub Profile](https://github.com)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com)

## 📄 License

This portfolio template is open source. Feel free to use it as inspiration for your own portfolio!

## 🙏 Credits

Built with modern web technologies and best practices. Inspired by contemporary portfolio designs and optimized for performance and accessibility.

---

**Made with ❤️ by Kritarth Shrivastava**

Last Updated: 2025
