import ClientNumber from "@/components/ClientNumber";
import CustomNumber from "@/components/CustomNumber";
import ServerNumber from "@/components/ServerNumber";
import { GetNumberCached } from "@/utils/getNumber";

export default async function Page() {
  const number = await GetNumberCached();
  return (
    <>
      <p className="text-lg font-bold">Unstable_Cache</p>
      With Cache : <CustomNumber rnd={number} />
      <ServerNumber />
      <ClientNumber />
    </>
  );
}
