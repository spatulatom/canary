import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // This route is protected by middleware - check if we got here
  const middlewareRuntime = request.headers.get("X-Middleware-Runtime");
  const secureHash = request.headers.get("X-Secure-Hash");

  // Simulate some protected data
  const protectedData = {
    userId: "12345",
    permissions: ["read", "write"],
    lastLogin: new Date().toISOString(),
    sessionData: {
      authenticated: true,
      role: "user",
    },
  };

  return NextResponse.json({
    data: protectedData,
    middleware: {
      runtime: middlewareRuntime,
      secureHash: secureHash,
      protected: true,
    },
    message: "Protected data accessed successfully",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Simulate processing protected data
    return NextResponse.json({
      success: true,
      received: body,
      processed: true,
      timestamp: new Date().toISOString(),
      message: "Protected POST endpoint - data processed successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 }
    );
  }
}
