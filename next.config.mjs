/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "static.wikia.nocookie.net" },
            { protocol: "https", hostname: "disney.fandom.com" },
        ],
    },
    rewrites: () => {
        
        return [
            {
                source: "/",
                destination: "/",
            },
            {
                source: "/segunda-rota",
                destination: "/segunda-page",
            },
            {
                source: "/terceira-rota",
                destination: "/terceira-page",
            }
        ]
    }
};

export default nextConfig;
