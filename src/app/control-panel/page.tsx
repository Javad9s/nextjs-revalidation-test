import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import RevalidationPanel from "@/components/RevalidationPanel";
import { renderLog } from "@/utils/utils";

export default function Page() {
  renderLog("Rendered control panel page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Control Panel</p>
      <CachedNumber />
      <RandomNumber />
      <p className="text-lg font-bold">Revalidate each page:</p>
      <RevalidationPanel />
    </>
  );
}
