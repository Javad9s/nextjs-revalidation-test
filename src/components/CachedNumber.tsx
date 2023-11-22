import { GetFetchCachedNumber } from "@/utils/getNumber";
import NumDisplay from "./NumDisplay";

export default async function CachedNumber() {
  const cached_number = await GetFetchCachedNumber();
  return <NumDisplay rnd={cached_number} />;
}
