// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import cfg from "@/config";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/cv")) {
    return NextResponse.redirect(cfg.resume);
  }

  return NextResponse.next();
}
