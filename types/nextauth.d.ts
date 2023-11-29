import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            access: string;
            refresh: string;
            exp: number;
            iat: number;
            jti: string;
            sub: string | string;
        }
    }
}