import { GetCachedNumber } from "@/utils/getNumber";
import CustomNumber from "./CustomNumber";

export default async function CachedNumber() {
  const number = await GetCachedNumber();
  return <CustomNumber rnd={number} />;
}
