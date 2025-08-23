# Next.js Canary Features Showcase

## Table of Contents

- [Project Purpose](#project-purpose)
- [Featured Capabilities](#featured-capabilities)
- [Quick Start](#quick-start)
- [Interactive Demos](#interactive-demos)
- [Key Files](#key-files)
- [Available Scripts](#available-scripts)
- [Design Philosophy](#design-philosophy)
- [Tracking Canary Releases](#tracking-canary-releases)
- [Contributing](#contributing)

A minimal demonstration project showcasing the latest features from Next.js canary releases. Each feature is implemented with the smallest amount of code necessary to demonstrate its capabilities.

## 🎯 Project Purpose

This project tracks and demonstrates cutting-edge Next.js features as they're released in canary versions. The goal is to provide working examples with minimal code that clearly showcase each new capability.

## 🎯 Design Philosophy

Each feature demonstration follows these principles:

1. **Minimal Code** - Smallest possible implementation
2. **Clear Purpose** - Obvious what the feature does
3. **Working Example** - Fully functional, not just snippets
4. **Real Benefits** - Shows actual development improvements

## 🔮 Tracking Canary Releases

This project stays current with Next.js canary releases:

- **Current:** v15.5.0 (Turbopack builds, Node.js middleware, TypeScript improvements)
- **Next:** Monitoring for v15.6+ and v16.0 preparations
- **Updates:** Features added as canary releases become available

---

**Current Focus: Next.js 15.5**

## ✨ Featured Capabilities

### 🚀 [Turbopack Builds (Beta)](src/app/turbopack/page.tsx)

**Minimal showcase:** Performance metrics and build command examples

- Development: `npm run dev --turbopack`
- Production: `npm run build --turbopack`
- **Result:** 2-5x faster builds on large projects

### 🔒 [Node.js Middleware (Stable)](src/middleware.ts)

**Minimal showcase:** Authentication logic with crypto API access

- Protected routes with automatic redirection
- Custom headers and security features
- **Demo:** Visit `/dashboard` → redirects to `/login`

### 📝 [TypeScript Improvements](src/app/typescript/page.tsx)

**Minimal showcase:** Auto-generated route types and props

- Typed routes with compile-time validation
- Global `PageProps`, `LayoutProps` types
- **Command:** `npm run typegen`

### 🔧 [Modern Linting](eslint.config.mjs)

**Minimal showcase:** Direct ESLint integration

- Replaces `next lint` with standard ESLint CLI
- Transparent configuration with `eslint.config.mjs`
- **Commands:** `npm run lint`, `npm run lint:fix`

### 🌐 [API Integration](src/app/api/)

**Minimal showcase:** Type-safe routes with middleware headers

- [`/api/time`](src/app/api/time/route.ts) - Basic endpoint
- [`/api/protected/data`](src/app/api/protected/data/route.ts) - Protected endpoint

### 📚 [Migration Guide](src/app/migration/page.tsx)

**Minimal showcase:** Next.js 16 preparation examples

- Deprecation warnings and solutions
- Breaking changes timeline

## 🚀 Quick Start

```bash
# Clone and install
git clone <your-repo>
cd canary
npm install

# Experience Turbopack speed
npm run dev

# Try the features
open http://localhost:3000
```

## 🎮 Interactive Demos

| Feature        | URL           | What It Shows                      |
| -------------- | ------------- | ---------------------------------- |
| **Home**       | `/`           | Feature overview and navigation    |
| **Turbopack**  | `/turbopack`  | Build performance metrics          |
| **Middleware** | `/dashboard`  | Node.js authentication (redirects) |
| **TypeScript** | `/typescript` | Auto-generated types examples      |
| **Linting**    | `/linting`    | ESLint configuration details       |
| **APIs**       | `/api-demo`   | Type-safe API testing interface    |
| **Migration**  | `/migration`  | Next.js 16 preparation guide       |

## 📁 Key Files

- [`src/middleware.ts`](src/middleware.ts) - Node.js middleware showcase
- [`eslint.config.mjs`](eslint.config.mjs) - Modern linting setup
- [`next.config.ts`](next.config.ts) - Feature configurations
- [`package.json`](package.json) - Updated scripts for 15.5
- [`SHOWCASE.md`](SHOWCASE.md) - Detailed feature documentation

## 🛠 Available Scripts

```bash
npm run dev          # Development with Turbopack
npm run build        # Production build with Turbopack
npm run typegen      # Generate route types
npm run type-check   # TypeScript validation
npm run lint         # ESLint (modern approach)
npm run lint:fix     # Auto-fix linting issues
```

**Built with Next.js 15.5.0** | Showcasing the future of React development ⚡

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
