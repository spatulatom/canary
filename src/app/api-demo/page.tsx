export default function APIDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🌐 API Integration Demo
          </h1>
          <p className="text-lg text-gray-600">
            Modern API routes with full type safety and validation
          </p>
        </div>

        <div className="grid gap-8">
          {/* API Testing Interface */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Live API Testing</h2>
            <p className="text-gray-600 mb-6">
              Test the API routes built with Next.js 15.5 features.
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">GET /api/time</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    GET
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Returns current server time with middleware headers
                </p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Test API
                </button>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">GET /api/protected/data</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Protected
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Protected route that requires middleware authentication
                </p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Test Protected API
                </button>
              </div>
            </div>
          </div>

          {/* API Response Display */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">API Response</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-32">
              <p className="text-gray-500 text-center py-8">
                Click a button above to test the API and see the response here
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">API Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Type Safety</h3>
                  <p className="text-sm text-gray-600">
                    Full TypeScript support for requests and responses
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Middleware Integration</h3>
                  <p className="text-sm text-gray-600">
                    Node.js middleware adds custom headers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Route Validation</h3>
                  <p className="text-sm text-gray-600">
                    Automatic export validation at build time
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Error Handling</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive error responses
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">API Route Example</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`// app/api/time/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Access middleware headers
  const middlewareRuntime = request.headers.get('X-Middleware-Runtime');
  const secureHash = request.headers.get('X-Secure-Hash');
  
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    middleware: {
      runtime: middlewareRuntime,
      secureHash: secureHash
    },
    message: 'API powered by Next.js 15.5'
  });
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
