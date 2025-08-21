// Example of full Node.js middleware - would require runtime: 'nodejs' in config
// This file demonstrates what's possible with the stable Node.js middleware support

import { NextRequest, NextResponse } from "next/server";

/* 
// This configuration would enable Node.js runtime:
export const config = {
  runtime: 'nodejs', // Now stable in 15.5!
  matcher: ['/dashboard/:path*', '/api/protected/:path*']
};

export function middleware(request: NextRequest) {
  // With Node.js runtime, you have full access to Node.js APIs:
  
  // 1. Crypto API for secure token generation
  const crypto = require('crypto');
  const timestamp = Date.now().toString();
  const secureHash = crypto.createHash('sha256').update(timestamp).digest('hex');
  
  // 2. File system access
  const fs = require('fs');
  const path = require('path');
  const configExists = fs.existsSync(path.join(process.cwd(), 'next.config.ts'));
  
  // 3. Database connections (example with a hypothetical database)
  // const db = require('./lib/database');
  // const userSession = await db.validateSession(sessionToken);
  
  // 4. External npm packages that require Node.js
  // const jwt = require('jsonwebtoken');
  // const isValidJWT = jwt.verify(token, process.env.JWT_SECRET);
  
  // 5. Advanced logging with Node.js modules
  // const winston = require('winston');
  // winston.info('Middleware processed request', { 
  //   path: request.nextUrl.pathname, 
  //   timestamp 
  // });
  
  const response = NextResponse.next();
  
  // Add headers with Node.js-generated data
  response.headers.set('X-Middleware-Runtime', 'nodejs');
  response.headers.set('X-Secure-Hash', secureHash.substring(0, 16));
  response.headers.set('X-Config-Exists', configExists.toString());
  response.headers.set('X-Timestamp', timestamp);
  
  return response;
}
*/

// Export a demonstration object showing the capabilities
export const nodeJSMiddlewareFeatures = {
  runtime: "nodejs",
  capabilities: [
    "Full crypto module access",
    "File system operations (fs)",
    "Path manipulation utilities",
    "Database connections",
    "External npm packages",
    "Advanced logging libraries",
    "Complex authentication logic",
    "Server-side session management",
  ],
  exampleUseCases: [
    "JWT token validation with crypto",
    "Reading configuration files",
    "Database-backed authentication",
    "Advanced logging and monitoring",
    "Complex business logic",
    "Integration with existing Node.js libraries",
  ],
  migration: {
    from: "Edge Runtime (limited APIs)",
    to: "Node.js Runtime (full ecosystem)",
    benefits:
      "Access to entire Node.js ecosystem while maintaining middleware performance",
  },
};
