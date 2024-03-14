import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import Header from "@/components/ecommerce/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
