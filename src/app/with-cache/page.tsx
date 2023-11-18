import CustomNumber from "@/components/CustomNumber";
import ServerNumber from "@/components/ServerNumber";
import { GetCustomCachedNumber } from "@/utils/getNumber";

export default async function Page() {
  const number = await GetCustomCachedNumber();
  return (
    <>
      <p className="text-lg font-bold">Unstable_Cache</p>
      <ServerNumber />
      With Custom Cache : <CustomNumber rnd={number} />
    </>
  );
}
