import Link from "next/link";
import CachedNumber from "./CachedNumber";
import Refresh from "./Refresh";

export default function Navbar() {
  return (
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
          prefetch={false}
          className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
        >
          isr 10s
        </Link>
        <Link
          href={"/isr1h"}
          prefetch={false}
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
          href={"/cache-render"}
          className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
        >
          react cache
        </Link>
        <Link
          href={"/with-client"}
          className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
        >
          with client
        </Link>
        <Link
          href={"/control-panel"}
          className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
        >
          control panel
        </Link>
        <a
          href={"/nowhere"}
          className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
        >
          not found
        </a>
      </nav>
      <Refresh />
      <p>Cache On Layout : </p>
      <CachedNumber />
    </div>
  );
}
