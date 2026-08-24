import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Inlined at build time from the server-only VERCEL_ENV so client
    // components (delete/ban/save buttons) can tell the live production
    // demo apart from preview deployments and local `next dev`, where
    // these actions should keep working normally.
    NEXT_PUBLIC_DEMO_READONLY: String(process.env.VERCEL_ENV === "production"),
  },
};

export default nextConfig;
