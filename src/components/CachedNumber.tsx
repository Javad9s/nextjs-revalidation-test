import { GetUnsatableCachedNumber } from "@/utils/getNumber";
import NumDisplay from "./NumDisplay";

export default async function CachedNumber() {
  const cached_number = await GetUnsatableCachedNumber();
  return <NumDisplay rnd={cached_number} />;
}
