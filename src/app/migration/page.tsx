export default function MigrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            📚 Next.js 16 Migration Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Prepare for the future with Next.js 16 deprecation warnings and
            migration strategies
          </p>
        </div>

        <div className="grid gap-8">
          {/* Overview */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              ⚠️ Deprecation Timeline
            </h2>
            <p className="text-yellow-700 dark:text-yellow-400 mb-4">
              Next.js 15.5 introduces deprecation warnings to help you prepare
              for Next.js 16. These features will be completely removed in the
              next major version.
            </p>
            <div className="bg-yellow-100 dark:bg-yellow-800/30 p-3 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>Action Required:</strong> Review and migrate deprecated
                features before upgrading to Next.js 16.
              </p>
            </div>
          </div>

          {/* legacyBehavior */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. legacyBehavior for next/link
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The `legacyBehavior` prop for `next/link` will be removed in
              Next.js 16.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-red-600 dark:text-red-400 mb-2">
                  ❌ Deprecated (will break)
                </h3>
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-3 rounded-lg">
                  <pre className="text-sm text-red-700 dark:text-red-400">
                    {`<Link href="/about" legacyBehavior>
  <a>About</a>
</Link>`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-green-600 dark:text-green-400 mb-2">
                  ✅ Modern approach
                </h3>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 p-3 rounded-lg">
                  <pre className="text-sm text-green-700 dark:text-green-400">
                    {`<Link href="/about">
  About
</Link>`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                Migration Steps:
              </h4>
              <ol className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>1. Remove the `legacyBehavior` prop</li>
                <li>2. Remove any child `&lt;a&gt;` elements</li>
                <li>3. Apply styling directly to the `Link` component</li>
              </ol>
            </div>
          </div>

          {/* AMP Support */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. AMP Support Removal
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All AMP-related APIs and configurations will be removed in Next.js
              16.
            </p>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 p-4 rounded-lg mb-4">
              <h3 className="font-medium text-red-800 dark:text-red-300 mb-2">
                ❌ Will be removed:
              </h3>
              <pre className="text-sm text-red-700 dark:text-red-400">
                {`// pages/amp-page.js
import { useAmp } from 'next/amp';

export const config = { amp: true };

export default function AmpPage() {
  const isAmp = useAmp();
  return <div>AMP Page: {isAmp ? 'AMP' : 'HTML'}</div>;
}

// next.config.ts
const nextConfig = {
  amp: {
    canonicalBase: 'https://example.com',
  },
};`}
              </pre>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                Migration Strategy:
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Remove all AMP-related code and configurations</li>
                <li>• Evaluate if AMP is still necessary for your use case</li>
                <li>• Use Next.js built-in optimizations for performance</li>
                <li>• Consider modern web standards and Core Web Vitals</li>
              </ul>
            </div>
          </div>

          {/* Image Quality Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. next/image Quality Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Quality prop will be restricted to 75 by default unless explicitly
              configured.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                  ⚠️ Will show warning
                </h3>
                <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700 p-3 rounded-lg">
                  <pre className="text-sm text-orange-700 dark:text-orange-400">
                    {`<Image 
  src="/photo.jpg" 
  quality={100} 
  alt="Photo" 
/>`}
                  </pre>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-green-600 dark:text-green-400 mb-2">
                  ✅ Explicit configuration
                </h3>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 p-3 rounded-lg">
                  <pre className="text-sm text-green-700 dark:text-green-400">
                    {`// next.config.ts
const nextConfig = {
  images: {
    qualities: [75, 100],
  },
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Local Patterns */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. next/image Local Patterns
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Query strings with local image paths require explicit
              configuration.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// next.config.ts
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/photo.jpg',
        // omitting "search" allows all query parameters
      },
      {
        pathname: '/photo.jpg',
        search: '?v=1', // allow specific query
      },
      {
        pathname: '/assets/**', // wildcard paths
        search: '', // block all query parameters
      },
    ],
  },
};`}
              </pre>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg">
              <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
                Security Benefits:
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Explicit configuration provides better security and performance
                optimization by controlling which image paths and query
                parameters are allowed.
              </p>
            </div>
          </div>

          {/* Action Plan */}
          <div className="bg-gray-900 dark:bg-gray-950 text-white rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">🚀 Action Plan</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Audit Your Codebase</h3>
                  <p className="text-sm text-gray-300">
                    Search for deprecated features in your project
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Run Development Server</h3>
                  <p className="text-sm text-gray-300">
                    Check console for deprecation warnings
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Migrate Gradually</h3>
                  <p className="text-sm text-gray-300">
                    Fix issues one by one, test thoroughly
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Update Dependencies</h3>
                  <p className="text-sm text-gray-300">
                    Ensure all packages are Next.js 16 compatible
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
