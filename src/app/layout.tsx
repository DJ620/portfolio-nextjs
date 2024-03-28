import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const ss3 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel (DJ) Hersh",
  description: "Daniel (DJ) Hersh's Frontend Web Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ss3.className}>{children}</body>
    </html>
  );
}
