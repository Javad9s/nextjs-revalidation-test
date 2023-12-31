import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Revalidation Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AppTimeNow = dynamic(() => import("@/components/TimeNow"), {
    ssr: false,
    loading: () => <>Current Time...</>,
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex items-center justify-center">
          <AppTimeNow />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
