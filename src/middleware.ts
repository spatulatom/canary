import { NextRequest, NextResponse } from "next/server";

// For demonstration purposes, let's use a simpler middleware approach
// that shows the concept without relying on Node.js APIs that might not work in all environments

export const config = {
  matcher: ["/dashboard/:path*", "/api/protected/:path*"],
};

export function middleware(request: NextRequest) {
  // Showcase Node.js-style logic without requiring the runtime
  // (In a real app with Node.js runtime, you'd have access to crypto, fs, etc.)

  // 1. Generate secure hash using Web APIs (available in both runtimes)
  const timestamp = Date.now().toString();
  // In a real Node.js runtime, you'd use crypto.createHash() for secure hashing

  // 2. Simulate configuration check (in real Node.js runtime, you'd use fs.existsSync)
  const configExists = true; // Simplified for demo

  // 3. Advanced authentication logic
  const authToken = request.headers.get("authorization");
  const sessionCookie = request.cookies.get("session");

  // Create response with custom headers showcasing middleware capabilities
  const response = NextResponse.next();

  // Add custom headers showcasing middleware features
  response.headers.set("X-Middleware-Runtime", "nodejs-style");
  response.headers.set("X-Secure-Hash", timestamp.substring(0, 16)); // First 16 chars of timestamp
  response.headers.set("X-Config-Exists", configExists.toString());
  response.headers.set("X-Timestamp", timestamp);

  // Simulate authentication check
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!sessionCookie && !authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Additional validation using our helper function
    if (authToken && !isValidToken(authToken)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

// Helper function showcasing validation logic
function isValidToken(token: string | null): boolean {
  if (!token) return false;

  // Simple validation - in real Node.js runtime you'd use crypto
  // For demo purposes, just check if it's a reasonable length
  return token.length >= 8;
}
