// This page showcases the new TypeScript improvements in Next.js 15.5
// Notice: No need to manually import LayoutProps, PageProps, etc. - they're globally available!

export default function TypeScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📝 TypeScript Improvements
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Enhanced type safety with typed routes, route validation, and
            automatic helpers
          </p>
        </div>

        <div className="grid gap-8">
          {/* Typed Routes */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Typed Routes (Stable)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Routes are now fully typed based on your file structure.
              TypeScript catches invalid links at compile time.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// ✅ Valid routes (type-safe)
<Link href="/">Home</Link>
<Link href="/dashboard">Dashboard</Link>
<Link href="/turbopack">Turbopack</Link>

// ❌ Invalid routes (TypeScript error)
<Link href="/non-existent">Broken</Link>`}
              </pre>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
              <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">Configuration</h3>
              <code className="text-sm text-green-700 dark:text-green-400">
                typedRoutes: true
              </code>{" "}
              <span className="text-green-700 dark:text-green-400">in next.config.ts</span>
            </div>
          </div>

          {/* Route Props Helpers */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Route Props Helpers</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Globally available <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">PageProps</code>,{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">LayoutProps</code>, and <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">RouteContext</code> types.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// Before: Manual typing and imports
interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}

// After: Automatic typing (no imports needed!)
export default function Page(props: PageProps<'/blog/[slug]'>) {
  // props.params and props.searchParams are fully typed
  // TypeScript knows the exact shape based on your route
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">PageProps</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Automatic params and searchParams typing
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">LayoutProps</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Includes children and parallel routes
                </p>
              </div>
            </div>
          </div>

          {/* Route Export Validation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Route Export Validation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TypeScript validates page exports during build time, catching
              errors before deployment.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// ✅ Valid exports
export default function Page() { return <div>Page</div>; }
export const dynamic = 'force-static';
export const runtime = 'nodejs';

// ❌ Invalid exports (caught at build time)
export const dynamic = 'invalid-value'; // TypeScript error!
export const runtime = 123; // TypeScript error!`}
              </pre>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
              <h3 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
                Works with Turbopack
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                New system generates type guards that work across both Webpack
                and Turbopack builds
              </p>
            </div>
          </div>

          {/* next typegen Command */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              next typegen Command
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Generate types independently without running dev or build.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`# Generate route types
next typegen

# Use in CI for type checking
next typegen && tsc --noEmit

# Or use npm script
npm run typegen && npm run type-check`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                <h3 className="font-medium text-orange-800 dark:text-orange-300 mb-2">
                  CI/CD Integration
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-400">
                  Perfect for external type validation
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                <h3 className="font-medium text-orange-800 dark:text-orange-300 mb-2">
                  Independent
                </h3>
                <p className="text-sm text-orange-700 dark:text-orange-400">
                  No need to run dev or build first
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
