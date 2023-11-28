import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Header from "@/components/UI/Header";
import ReduxProvider from "@/components/providers/ReduxProvider";
import SessionProvider from "@/components/providers/SessionProvider";

export const metadata: Metadata = {
  title: "Pinterest Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <SessionProvider>
            <Header />
            {children}
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
