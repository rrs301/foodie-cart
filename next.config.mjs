/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        unoptimized:true,
        remotePatterns:[
            {
                protocol:'https',
                hostname:'us-east-1-shared-usea1-02.graphassets.com',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'img.clerk.com',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
