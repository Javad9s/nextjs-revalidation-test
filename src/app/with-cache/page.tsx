import CustomNumber from "@/components/CustomNumber";
import ServerNumber from "@/components/ServerNumber";
import { GetCustomCachedNumber, GetUnsatableCachedNumber } from "@/utils/getNumber";

export default async function Page() {
  const custom_number = await GetCustomCachedNumber();
  const cached_number = await GetUnsatableCachedNumber();
  return (
    <>
      <p className="text-lg font-bold">Unstable_Cache</p>
      <ServerNumber />
      Custom Cache : <CustomNumber rnd={custom_number} />
      <br/>
      Layout Cache : <CustomNumber rnd={cached_number} />
    </>
  );
}
