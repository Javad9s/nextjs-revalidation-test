import Link from "next/link";
import CachedNumber from "./CachedNumber";
import Refresh from "./Refresh";

export default function Navbar() {
  const links = [
    { href: "/", title: "Home" },
    { href: "/static01", title: "Static 01" },
    { href: "/static02", title: "Static 02" },
    { href: "/static03", title: "Static 03" },
    { href: "/static04", title: "Static 04" },
    { href: "/static05", title: "Static 05" },
    { href: "/static06", title: "Static 06" },
    { href: "/isr10s", title: "ISR 10s", prefetch: false },
    { href: "/isr60s", title: "ISR 60s" },
    { href: "/isr1h01", title: "ISR 1h 01" },
    { href: "/isr1h02", title: "ISR 1h 02" },
    { href: "/isr1h03", title: "ISR 1h 03" },
    { href: "/dynamic", title: "Dynamic" },
    { href: "/params/01", title: "params/01" },
    { href: "/control-panel", title: "Control Panel" },
  ];
  return (
    <div className="m-5 flex flex-col items-center justify-center gap-4 border-2 border-gray-400 bg-stone-100 p-4">
      <nav className="flex flex-wrap justify-center gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            prefetch={link.prefetch || true}
            className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
          >
            {link.title}
          </Link>
        ))}
        <a
          href={"/nowhere"}
          className="bg-slate-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-slate-950 active:shadow-lg"
        >
          not found
        </a>
      </nav>
      <Refresh />
      <CachedNumber />
    </div>
  );
}
