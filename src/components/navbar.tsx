import Link from "next/link";
import CachedNumber from "./CachedNumber";
import Refresh from "./Refresh";

export default function Navbar() {
  const links = [
    { href: "/", title: "Home" },
    { href: "/static/01", title: "Static 01" },
    { href: "/static/02", title: "Static 02" },
    { href: "/static/03", title: "Static 03" },
    { href: "/static/04", title: "Static 04" },
    { href: "/isr/10s", title: "ISR 10s", prefetch: false },
    { href: "/isr/1h", title: "ISR 1h" },
    { href: "/dynamic", title: "Dynamic", prefetch: false },
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
            prefetch={link.prefetch}
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
    </div>
  );
}
