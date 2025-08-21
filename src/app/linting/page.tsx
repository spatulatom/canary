export default function LintingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🔧 Modern Linting
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Direct ESLint integration replacing `next lint` for better control
          </p>
        </div>

        <div className="grid gap-8">
          {/* Deprecation Notice */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
              ⚠️ next lint Deprecation
            </h2>
            <p className="text-yellow-700 dark:text-yellow-400 mb-4">
              Starting with Next.js 15.5, the `next lint` command shows a
              deprecation warning and will be removed in Next.js 16.
            </p>
            <div className="bg-yellow-100 dark:bg-yellow-800/30 p-3 rounded-lg">
              <code className="text-sm text-yellow-800 dark:text-yellow-300">
                Warning: `next lint` is deprecated. Please use ESLint CLI
                directly.
              </code>
            </div>
          </div>

          {/* New Scripts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Updated package.json Scripts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This project now uses direct ESLint CLI commands instead of `next
              lint`.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`{
  "scripts": {
    "lint": "eslint",           // Instead of "next lint"
    "lint:fix": "eslint --fix", // Fix issues automatically
    "type-check": "tsc --noEmit", // Type checking
    "typegen": "next typegen"   // Generate route types
  }
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg p-4">
                <h3 className="font-medium text-green-800 dark:text-green-300 mb-2">
                  ✅ Benefits
                </h3>
                <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                  <li>• Direct control over linting</li>
                  <li>• Better ecosystem compatibility</li>
                  <li>• Transparent rule configuration</li>
                  <li>• Standard ESLint workflow</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
                  🔄 Migration
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">
                  Use the automated codemod:
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 p-1 rounded">
                  npx @next/codemod@latest next-lint-to-eslint-cli
                </code>
              </div>
            </div>
          </div>

          {/* ESLint Configuration */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ESLint Configuration
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explicit `eslint.config.mjs` files provide complete transparency
              into linting rules.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;`}
              </pre>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg p-4">
              <h3 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">
                Configuration Benefits
              </h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">
                Full control over rules, plugins, and parser options. No hidden
                Next.js wrapper.
              </p>
            </div>
          </div>

          {/* Alternative: Biome */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Alternative: Biome
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              New projects can choose Biome as a fast alternative to ESLint.
            </p>

            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`// biome.json
{
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true
  }
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                <h3 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
                  ⚡ Speed
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Significantly faster than ESLint
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                <h3 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
                  🔧 All-in-one
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Linting + formatting in one tool
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3">
              📅 Removal Timeline
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-red-700 dark:text-red-400">
                  <strong>Next.js 15.5:</strong> Deprecation warnings appear
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-red-700 dark:text-red-400">
                  <strong>Next.js 16:</strong> `next lint` command removed
                  completely
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-red-700 dark:text-red-400">
                  <strong>Next.js 16:</strong> Automatic linting during builds
                  also removed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
