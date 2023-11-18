import { GetUnsatableCachedNumber } from "@/utils/getNumber";
import CustomNumber from "./CustomNumber";

export default async function CachedNumber() {
  const unstable_cached_number = await GetUnsatableCachedNumber();
  return <CustomNumber rnd={unstable_cached_number} />;
}
