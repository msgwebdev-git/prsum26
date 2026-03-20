import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Security headers are now set per-request in middleware.ts
// (required for nonce-based CSP). Only non-CSP static config remains here.
const nextConfig: NextConfig = {
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
