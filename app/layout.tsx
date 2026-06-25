import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "RH International",
  description: "Corporate and Service Oriented Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <CustomCursor />
          <ThemeToggle />
          <PageTransition>
            {children}
          </PageTransition>
        </Providers>
      </body>
    </html>
  );
}
