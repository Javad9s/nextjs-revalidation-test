import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import { renderLog } from "@/utils/utils";

export const revalidate = 3600;
export default function Page() {
  renderLog("### --- Rendered ISR 1 h page 01.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 1 hour 01</p>
      <CachedNumber />
      <RandomNumber />
    </>
  );
}
