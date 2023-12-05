import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import { renderLog } from "@/utils/utils";

// export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  renderLog("Rendered dynamic page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Dynamic page</p>
      <CachedNumber />
      <RandomNumber />
    </>
  );
}
