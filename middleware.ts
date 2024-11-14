import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req });
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

    // Handle root path
    if (req.nextUrl.pathname === "/") {
      if (isAuth) {
        return NextResponse.redirect(new URL(`/${token.role}`, req.url));
      }
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL(`/${token.role}`, req.url));
      }
      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/auth/signin?from=${encodeURIComponent(from)}`, req.url)
      );
    }

    // Handle role-based access
    const role = token.role;
    const path = req.nextUrl.pathname;

    if (path.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }

    if (path.startsWith("/solicitor") && role !== "solicitor") {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }

    if (path.startsWith("/user") && role !== "user") {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/",
    "/admin/:path*",
    "/user/:path*",
    "/solicitor/:path*",
    "/auth/:path*",
  ],
};