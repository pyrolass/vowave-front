import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logout } from "./app/services/auth_service";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  const { pathname } = req.nextUrl;

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && pathname === "/") {
    const orderUrl = new URL("/initial/home", req.url);
    return NextResponse.redirect(orderUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/initial/:path*"],
};
