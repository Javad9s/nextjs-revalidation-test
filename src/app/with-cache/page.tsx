import NumDisplay from "@/components/NumDisplay";
import ServerNumber from "@/components/ServerNumber";
import { GetCustomCachedNumber } from "@/utils/getNumber";
import { renderLog } from "@/utils/utils";

export default async function Page() {
  renderLog("### --- Rendered Unstable_Cache page.tsx");
  const custom_number = await GetCustomCachedNumber();
  return (
    <>
      <p className="text-lg font-bold">Unstable_Cache</p>
      <ServerNumber />
      Custom Cache : <NumDisplay rnd={custom_number} />
    </>
  );
}
