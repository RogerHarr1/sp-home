# SP Home - Specialty Produce Employee Portal

A modern Next.js employee portal for Specialty Produce, featuring a clean interface with quick access to operations, HR resources, and company tools.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React 18** - UI library

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout with header
│   ├── page.tsx     # Main SP Home dashboard
│   └── globals.css  # Global styles and Tailwind
├── components/       # React components
│   ├── layout/      # Layout components (Header)
│   └── ui/          # UI components (Card, Button, Input)
├── lib/             # Utility functions
├── types/           # TypeScript type definitions
└── ...config files
```

## Environment Variables

Create a `.env.local` file to customize the base URL:

```
NEXT_PUBLIC_BASE_URL=https://your-server-url.com
```

## Deployment

This application is configured for deployment to Azure App Service or Azure Static Web Apps.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
