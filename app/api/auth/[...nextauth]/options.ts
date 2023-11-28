import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { signInRequest } from "@/services/auth";

export const options: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email Address",
                    type: "email",
                },
                password: {
                    type: "password",
                    label: "Password",
                }
            },
            async authorize(credentials, req) {
                try {
                    const res = await signInRequest({
                        email: credentials?.email!,
                        password: credentials?.password!
                    });
                    const user = await res.json();

                    // If no error and we have user data, return it
                    if (user && res.ok) {
                        return user
                    }

                    // If there's an issue with the credentials or other error, handle it
                    throw new Error('Invalid credentials or unexpected response');
                } catch (error) {
                    // Handle errors, log them, etc.
                    console.error('Error during authentication:', error);
                    // Return null to indicate authentication failure
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            session.user = token as any;
            return session;
        }
    }
}
