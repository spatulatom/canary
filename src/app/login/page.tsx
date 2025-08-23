export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🔐 Login Required
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Access to dashboard requires authentication
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6">
          <h2 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
            Node.js Middleware Protection
          </h2>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            This login page demonstrates the stable Node.js middleware runtime
            in action. The middleware checked for authentication and redirected
            you here.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This is a demo - any credentials will work for testing purposes
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="font-medium text-gray-900 dark:text-white">
            Middleware Features Demonstrated:
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Node.js runtime support (stable)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Crypto API access for secure hashing
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                File system access for config checks
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                URL redirection logic
              </span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              🧭 Middleware in Next.js: Request-Only Interception
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Middleware in Next.js only intercepts incoming requests, not
              outgoing responses. It sits in the request pipeline, before your
              route handlers or page logic runs.
            </p>

            <div className="space-y-2">
              <div>
                <strong className="text-green-600 dark:text-green-400">
                  ✅ Middleware runs:
                </strong>
                <ul className="text-sm text-gray-600 dark:text-gray-300 ml-4 mt-1 space-y-1">
                  <li>
                    • Before the request reaches your API route, page, or
                    server-side logic
                  </li>
                  <li>
                    • Can modify the request, redirect, rewrite, or block it
                  </li>
                  <li>
                    • Can add headers, cookies, or metadata to the request
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-red-600 dark:text-red-400">
                  ❌ Middleware does not:
                </strong>
                <ul className="text-sm text-gray-600 dark:text-gray-300 ml-4 mt-1 space-y-1">
                  <li>
                    • Intercept or modify the response that your server sends
                    back
                  </li>
                  <li>
                    • Tag along with fetch() calls made from your server to
                    other services
                  </li>
                  <li>
                    • Act as a post-processing layer for SSR-rendered HTML or
                    API responses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
