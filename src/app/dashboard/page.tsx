import { headers } from "next/headers";

export default async function DashboardPage() {
  // Access headers set by our Node.js middleware
  const headersList = await headers();
  const middlewareRuntime = headersList.get("X-Middleware-Runtime");
  const secureHash = headersList.get("X-Secure-Hash");
  const configExists = headersList.get("X-Config-Exists");
  const timestamp = headersList.get("X-Timestamp");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔒 Dashboard - Node.js Middleware
          </h1>
          <p className="text-lg text-gray-600">
            Protected route powered by stable Node.js middleware runtime
          </p>
        </div>

        <div className="grid gap-8">
          {/* Middleware Info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Middleware Headers</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Runtime:</span>
                <span className="text-green-600 font-mono">
                  {middlewareRuntime || "Not detected"}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Secure Hash:</span>
                <span className="text-blue-600 font-mono">
                  {secureHash || "Not generated"}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Config Exists:</span>
                <span
                  className={`font-mono ${
                    configExists === "true" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {configExists || "Unknown"}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Timestamp:</span>
                <span className="text-purple-600 font-mono">
                  {timestamp
                    ? new Date(parseInt(timestamp)).toLocaleString()
                    : "Not available"}
                </span>
              </div>
            </div>
          </div>

          {/* Node.js Features */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Node.js Runtime Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Crypto API</h3>
                  <p className="text-sm text-gray-600">
                    Full Node.js crypto module access
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">File System</h3>
                  <p className="text-sm text-gray-600">
                    Read/write files and directories
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">NPM Packages</h3>
                  <p className="text-sm text-gray-600">
                    Use any Node.js library
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h3 className="font-medium">Database Access</h3>
                  <p className="text-sm text-gray-600">
                    Connect to databases directly
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Middleware Configuration
            </h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                {`export const config = {
  runtime: 'nodejs', // Now stable in 15.5!
  matcher: ['/dashboard/:path*', '/api/protected/:path*']
};

export function middleware(request: NextRequest) {
  // Full Node.js API access
  const crypto = require('crypto');
  const fs = require('fs');
  
  // Complex authentication logic
  const secureHash = crypto
    .createHash('sha256')
    .update(Date.now().toString())
    .digest('hex');
    
  return NextResponse.next({
    headers: { 'X-Secure-Hash': secureHash }
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
