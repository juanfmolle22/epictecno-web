import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/proyectos", destination: "/portfolio", permanent: false },
      { source: "/quienes-somos", destination: "/nosotros", permanent: true },
      { source: "/portafolio", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;
