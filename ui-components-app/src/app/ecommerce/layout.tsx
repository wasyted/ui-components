import type { Metadata } from "next";
import "@/app/globals.css";
import { Albert_Sans } from "next/font/google";

const text = Albert_Sans({ subsets: ["latin"], weight: 'variable' });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Created by Matías Wasyluk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${text.className}`}>
        {children}
      </body>
    </html>
  );
}
