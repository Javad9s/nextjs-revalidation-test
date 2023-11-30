import { GetCachedNumber } from "@/utils/getNumber";

export default async function CachedNumber() {
  const cached_number = await GetCachedNumber();
  return <div>{`Cached: ${cached_number}`}</div>;
}
