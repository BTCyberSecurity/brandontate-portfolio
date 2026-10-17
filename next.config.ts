import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: { "/api/resume": ["./private/resume.pdf"] },
  experimental: { globalNotFound: true },
};

export default nextConfig;
