import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import { renderLog } from "@/utils/utils";

export const revalidate = 10;
export default function Page() {
  renderLog("### --- Rendered ISR 60 s page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 60 seconds</p>
      <CachedNumber />
      <RandomNumber />
    </>
  );
}