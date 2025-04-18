import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    allowedDevOrigins: [
        "*",
        "127.0.0.1",
        "localhost",
        "192.168.1.65"
    ],
};

export default withNextIntl(nextConfig);
