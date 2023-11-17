import { unstable_cache } from "next/cache";
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const GetCustomNumber = unstable_cache(async () => {
//   await sleep(100);
  const randomNumber = Math.random();
  return randomNumber;
}, ["customNumber"]);
export const GetCachedNumber = unstable_cache(async () => {
  //   await sleep(100);
    const randomNumber = Math.random();
    return randomNumber;
  }, ["cachedNumber"]);