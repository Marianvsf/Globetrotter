import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // La imagen usa HTTPS
        hostname: 'cdn-icons-png.flaticon.com',
        port: '', // No hay un puerto específico, así que se deja vacío
        pathname: '/512/**', // Esto permitirá cualquier imagen que empiece con /512/ en ese dominio
      },
    ],
  }
};

export default nextConfig;
