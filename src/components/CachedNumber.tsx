import { GetUnsatableCachedNumber } from "@/utils/getNumber";
import NumDisplay from "./NumDisplay";

export default async function CachedNumber() {
  const unstable_cached_number = await GetUnsatableCachedNumber();
  return <NumDisplay rnd={unstable_cached_number} />;
}
