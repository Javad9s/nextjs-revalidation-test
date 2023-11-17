import { GetUnsatableCachedNumber } from "@/utils/getNumber";
import CustomNumber from "./CustomNumber";

export default async function CachedNumber() {
  const number = await GetUnsatableCachedNumber();
  return <CustomNumber rnd={number} />;
}
