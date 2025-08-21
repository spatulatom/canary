export default function TurbopackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ⚡ Turbopack Builds (Beta)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Experience lightning-fast builds with Turbopack
          </p>
        </div>

        <div className="grid gap-8">
          {/* Performance Metrics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Performance Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  2-5x
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Faster than Webpack
                </div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  1.2B+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Requests served in production
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  Beta
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Ready for production
                </div>
              </div>
            </div>
          </div>

          {/* Build Commands */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Turbopack Commands
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-sm text-gray-900 dark:text-gray-100">
                  npm run dev
                </code>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Development with Turbopack (already enabled)
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <code className="text-sm text-gray-900 dark:text-gray-100">
                  npm run build
                </code>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Production builds with Turbopack (enabled in this project)
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Multi-core optimization
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Takes advantage of all CPU cores
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Incremental builds
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Only rebuilds what changed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Production ready
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Battle-tested on Vercel sites
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Bundle optimization
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Smaller bundles, fewer requests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
