import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import { renderLog } from "@/utils/utils";
import Link from "next/link";
interface Props {
  params: {
    id: string;
  };
}
export function generateStaticParams() {
  const ids = [{ id: "01" }, { id: "02" }, { id: "03" }];
  return ids;
}
export default function Page({ params: { id } }: Props) {
  renderLog(`### --- Rendered param page ${id}.tsx`);
  const links = [
    { href: "/params/01", title: "param 01" },
    { href: "/params/02", title: "param 02" },
    { href: "/params/03", title: "param 03" },
    { href: "/params/04", title: "param 04" },
    { href: "/params/05", title: "param 05" },
    { href: "/params/06", title: "param 06" },
    { href: "/params/07", title: "param 07", prefetch: false },
    { href: "/params/08", title: "param 08", prefetch: false },
    { href: "/params/09", title: "param 09", prefetch: false },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
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
      </div>
      <p className="text-lg font-bold">{`param = ${id}`}</p>
      <CachedNumber />
      <RandomNumber />
    </>
  );
}
