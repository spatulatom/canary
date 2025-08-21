// This page showcases the new TypeScript improvements in Next.js 15.5
// Notice: No need to manually import LayoutProps, PageProps, etc. - they're globally available!

export default function TypeScriptPage(props: PageProps<"/typescript">) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📝 TypeScript Improvements
          </h1>
          <p className="text-lg text-gray-600">
            Enhanced type safety with typed routes, route validation, and
            automatic helpers
          </p>
        </div>

        <div className="grid gap-8">
          {/* Typed Routes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Typed Routes (Stable)
            </h2>
            <p className="text-gray-600 mb-4">
              Routes are now fully typed based on your file structure.
              TypeScript catches invalid links at compile time.
            </p>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// ✅ Valid routes (type-safe)
<Link href="/">Home</Link>
<Link href="/dashboard">Dashboard</Link>
<Link href="/turbopack">Turbopack</Link>

// ❌ Invalid routes (TypeScript error)
<Link href="/non-existent">Broken</Link>`}
              </pre>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">Configuration</h3>
              <code className="text-sm text-green-700">
                typedRoutes: true
              </code>{" "}
              in next.config.ts
            </div>
          </div>

          {/* Route Props Helpers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Route Props Helpers</h2>
            <p className="text-gray-600 mb-4">
              Globally available <code>PageProps</code>,{" "}
              <code>LayoutProps</code>, and <code>RouteContext</code> types.
            </p>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
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
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2">PageProps</h3>
                <p className="text-sm text-blue-700">
                  Automatic params and searchParams typing
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2">LayoutProps</h3>
                <p className="text-sm text-blue-700">
                  Includes children and parallel routes
                </p>
              </div>
            </div>
          </div>

          {/* Route Export Validation */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Route Export Validation
            </h2>
            <p className="text-gray-600 mb-4">
              TypeScript validates page exports during build time, catching
              errors before deployment.
            </p>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
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

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-medium text-purple-800 mb-2">
                Works with Turbopack
              </h3>
              <p className="text-sm text-purple-700">
                New system generates type guards that work across both Webpack
                and Turbopack builds
              </p>
            </div>
          </div>

          {/* next typegen Command */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              next typegen Command
            </h2>
            <p className="text-gray-600 mb-4">
              Generate types independently without running dev or build.
            </p>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
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
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-medium text-orange-800 mb-2">
                  CI/CD Integration
                </h3>
                <p className="text-sm text-orange-700">
                  Perfect for external type validation
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-medium text-orange-800 mb-2">
                  Independent
                </h3>
                <p className="text-sm text-orange-700">
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
