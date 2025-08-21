import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  // Access headers set by our Node.js middleware
  const middlewareRuntime = request.headers.get("X-Middleware-Runtime");
  const secureHash = request.headers.get("X-Secure-Hash");
  const configExists = request.headers.get("X-Config-Exists");
  const timestamp = request.headers.get("X-Timestamp");

  return NextResponse.json({
    currentTime: new Date().toISOString(),
    serverTimestamp: Date.now(),
    middleware: {
      runtime: middlewareRuntime,
      secureHash: secureHash,
      configExists: configExists === "true",
      middlewareTimestamp: timestamp ? parseInt(timestamp) : null,
    },
    message: "Time API powered by Next.js 15.5 with Node.js middleware",
    features: [
      "Node.js runtime middleware (stable)",
      "Turbopack builds (beta)",
      "TypeScript route validation",
      "Typed routes",
    ],
  });
}
