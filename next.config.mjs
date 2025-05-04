import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {},
    async rewrites() {
        return [
            {
                source: '/api/botserver/:path*',
                destination: 'https://botserver.cookiebotfur.net/:path*',
            },
        ];
    },
};

export default withNextIntl(nextConfig);