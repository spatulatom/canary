# Next.js 15.5 Feature Showcase

This project demonstrates all the major new features introduced in Next.js 15.5:

## 🚀 Features Implemented

### 1. **Turbopack Builds (Beta)**

- ✅ Development server with `--turbopack` flag
- ✅ Production builds enabled in package.json
- ✅ Performance metrics display page
- 📍 Visit: [/turbopack](http://localhost:3001/turbopack)

### 2. **Node.js Middleware (Stable)**

- ✅ Middleware with Node.js-style authentication logic
- ✅ Custom headers and security features
- ✅ Protected routes with automatic redirection
- 📍 Try: [/dashboard](http://localhost:3001/dashboard) (redirects to login)
- 📍 Login: [/login](http://localhost:3001/login)

### 3. **TypeScript Improvements**

- ✅ Typed routes enabled (`typedRoutes: true`)
- ✅ Automatic `PageProps`, `LayoutProps`, `RouteContext` types
- ✅ Route export validation
- ✅ `next typegen` command integration
- 📍 Explore: [/typescript](http://localhost:3001/typescript)

### 4. **Modern Linting**

- ✅ Direct ESLint CLI instead of `next lint`
- ✅ Updated package.json scripts
- ✅ Explicit eslint.config.mjs configuration
- 📍 Learn: [/linting](http://localhost:3001/linting)

### 5. **API Integration**

- ✅ Type-safe API routes with middleware integration
- ✅ Protected API endpoints
- 📍 Test: [/api-demo](http://localhost:3001/api-demo)
- 📍 APIs: [/api/time](http://localhost:3001/api/time), [/api/protected/data](http://localhost:3001/api/protected/data)

### 6. **Migration Guide**

- ✅ Comprehensive Next.js 16 preparation guide
- ✅ Deprecation warnings and migration strategies
- 📍 Prepare: [/migration](http://localhost:3001/migration)

## 🛠 Generated Files

The project automatically generates:

- `.next/types/routes.d.ts` - Type-safe route definitions
- Global `PageProps`, `LayoutProps`, `RouteContext` types
- Route validation at build time

## 🚀 Commands

```bash
# Development with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Generate route types
npm run typegen

# Type checking
npm run type-check

# Modern linting
npm run lint
npm run lint:fix
```

## 📈 Performance Benefits

- **2-5x faster builds** with Turbopack on multi-core machines
- **Type-safe routing** prevents runtime errors
- **Node.js middleware** enables complex authentication logic
- **Modern tooling** with direct ESLint integration

## 🎯 Key Showcases

1. **Typed Routes**: Try navigating - TypeScript catches invalid routes
2. **Middleware**: Visit `/dashboard` to see Node.js middleware redirect
3. **Type Generation**: Run `npm run typegen` to see automatic type generation
4. **API Integration**: Test APIs to see middleware headers in action
5. **Build Performance**: Use `npm run build` to experience Turbopack speed

## 🔮 Next.js 16 Preparation

This project demonstrates both:

- ✅ **New features** to adopt from 15.5
- ⚠️ **Deprecations** to migrate away from before 16.0

Visit [/migration](http://localhost:3001/migration) for a complete preparation guide.

---

**Built with Next.js 15.5.0** - Showcasing the cutting edge of React development! 🚀
