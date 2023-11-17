import { unstable_cache } from "next/cache";
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const GetCustomNumber = unstable_cache(async () => {
  //   await sleep(100);
  const randomNumber = Math.random();
  return randomNumber;
}, ["key_customNumber"]);
export const GetUnsatableCachedNumber = unstable_cache(
  async () => {
    //   await sleep(100);
    const randomNumber = Math.random();
    // console.log(randomNumber);
    return randomNumber;
  },
  ["cachedNumber"],
  { tags: ["cachedNumber"] },
);
export async function GetCachedNumber() {
  // URL="http://localhost:3000"
  // URL = "https://nextjs-revalidation-test.vercel.app"
  try {
    const res = await fetch(process.env.URL + "/api/get-number", {
      next: { tags: ["fetchNumber"] },
      cache: "force-cache",
    });
    if (!res.ok) {
      return "";
    }
    const json = await res.json();
    return json.randomNumber;
  } catch (error: any) {
    return "";
  }
}
