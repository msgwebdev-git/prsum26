import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  // 1. Run next-intl middleware first (locale detection, redirects)
  const response = intlMiddleware(request);

  // 2. Generate a cryptographic nonce per request
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // 3. Build CSP with nonce — production-grade policy
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'unsafe-inline'`, // Tailwind + motion require inline styles
    `img-src 'self' blob: data: https://hatscripts.github.io`,
    `font-src 'self' https://fonts.gstatic.com`,
    `frame-src https://www.youtube-nocookie.com https://www.google.com`,
    `connect-src 'self' https://fonts.googleapis.com`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  // 4. Set CSP header and pass nonce to server components via request header
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  // 5. Other security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
