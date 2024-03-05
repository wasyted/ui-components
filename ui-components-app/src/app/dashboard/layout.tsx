import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import SidePanel from "@/components/dashboard/SidePanel";
import "../globals.css";

const questrial = Questrial({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Created by Matías Wasyluk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.className} dark:bg-neutral-900 dark:text-white flex`}>
        <SidePanel />
        {children}
      </body>
    </html>
  );
}
