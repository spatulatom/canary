import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Next.js 15.5 Feature Showcase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the latest features from Next.js 15.5
            including Turbopack builds in beta, stable Node.js middleware,
            TypeScript improvements, and modern linting approaches.
          </p>
        </header>
      

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Turbopack Builds */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                ⚡
              </div>
              <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                Turbopack Builds
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Production builds powered by Turbopack - up to 5x faster on large
              projects.
            </p>
            <Link
              href="/turbopack"
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
            >
              View Performance →
            </Link>
          </div>

          {/* Node.js Middleware */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                🔒
              </div>
              <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                Node.js Middleware
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stable Node.js runtime support with full API access for complex
              middleware.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium"
            >
              Try Dashboard →
            </Link>
          </div>

          {/* TypeScript Improvements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                📝
              </div>
              <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                TypeScript Features
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Typed routes, route validation, and automatic prop helpers for
              better DX.
            </p>
            <Link
              href="/typescript"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              Explore Types →
            </Link>
          </div>

          {/* Modern Linting */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                🔧
              </div>
              <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                Modern Linting
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Direct ESLint integration replacing `next lint` for better
              control.
            </p>
            <Link
              href="/linting"
              className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium"
            >
              View Config →
            </Link>
          </div>

          {/* API Routes */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                🌐
              </div>
              <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                API Integration
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Modern API routes with full type safety and validation.
            </p>
            <Link
              href="/api-demo"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
            >
              Test APIs →
            </Link>
          </div>

          {/* Migration Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                📚
              </div>
              <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">
                Migration Guide
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn about deprecations and prepare for Next.js 16.
            </p>
            <Link
              href="/migration"
              className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium"
            >
              View Guide →
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Performance Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                5x
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Faster builds on large sites
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Node.js API compatibility
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                ∞
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Type safety improvements
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                0
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Configuration overhead
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
