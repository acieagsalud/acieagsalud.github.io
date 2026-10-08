import type { NextConfig } from "next";

// GitHub Actions sets PAGES_BASE_PATH. It's empty for a <username>.github.io repo
// and "/<repo-name>" for any other repo name, so the site works either way.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
