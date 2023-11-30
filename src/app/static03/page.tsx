import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import { renderLog } from "@/utils/utils";

export default function Page() {
  renderLog("### --- Rendered static page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Static page 03</p>
      <CachedNumber />
      <RandomNumber />
    </>
  );
}
