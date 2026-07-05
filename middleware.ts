import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pre-launch gate: rewrite every request to the coming-soon page. Remove
// this file to lift the gate — app/layout.tsx falls back to the normal
// docs shell automatically once the "x-coming-soon" header stops arriving.
const GATE_PATH = "/coming-soon";
const GATE_HEADER = "x-coming-soon";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const headers = new Headers(request.headers);
  headers.set(GATE_HEADER, "1");

  if (pathname === GATE_PATH) {
    return NextResponse.next({ request: { headers } });
  }

  const url = request.nextUrl.clone();
  url.pathname = GATE_PATH;
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ["/((?!_next|favicon|assets|robots.txt|sitemap|_pagefind).*)"],
};
