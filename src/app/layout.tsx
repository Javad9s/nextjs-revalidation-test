import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Refresh from "@/components/Refresh";
import RandomNumber from "@/components/RandomNumber";
import CachedNumber from "@/components/CachedNumber";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-5 flex flex-col items-center justify-center gap-4 border-2 border-gray-400 bg-stone-100 p-4">
          <nav className="flex flex-wrap justify-center gap-2">
            <Link
              href={"/"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              Home
            </Link>
            <Link
              href={"/static"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              static
            </Link>
            <Link
              href={"/isr10s"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              isr 10s
            </Link>
            <Link
              href={"/isr1h"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              isr 1h
            </Link>
            <Link
              href={"/dynamic"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              dynamic
            </Link>
            <Link
              href={"/with-cache"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              with cache
            </Link>
            <Link
              href={"/control-panel"}
              className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
            >
              control panel
            </Link>
          </nav>
          <Refresh />
          On Layout : <RandomNumber />
          <br/>
          Cached : <CachedNumber />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          {children}
        </div>
      </body>
    </html>
  );
}
