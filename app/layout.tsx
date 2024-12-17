import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins' ,
})

export const metadata: Metadata = {
  title: "CloudVault",
  description: "CloudVault- The only cloud based storage solution you need. Secure, reliable and easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
