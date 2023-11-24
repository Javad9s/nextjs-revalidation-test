import { GetCachedNumber } from "@/utils/getNumber";
import NumDisplay from "./NumDisplay";

export default async function CachedNumber() {
  const cached_number = await GetCachedNumber();
  return <NumDisplay rnd={cached_number} />;
}
