import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import { renderLog } from "@/utils/utils";

export const revalidate = 7200;
export default function Page() {
  renderLog("Rendered ISR 2 h page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 2 hour</p>
      <CachedNumber />
      <RandomNumber />
    </>
  );
}
