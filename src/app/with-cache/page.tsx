import CustomNumber from "@/components/CustomNumber";
import ServerNumber from "@/components/ServerNumber";
import { GetCustomCachedNumber, GetUnsatableCachedNumber } from "@/utils/getNumber";

export default async function Page() {
  const number = await GetCustomCachedNumber();
  const cached = await GetUnsatableCachedNumber();
  return (
    <>
      <p className="text-lg font-bold">Unstable_Cache</p>
      <ServerNumber />
      Custom Cache : <CustomNumber rnd={number} />
      <br/>
      Layout Cache : <CustomNumber rnd={cached} />
    </>
  );
}
