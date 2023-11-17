import { unstable_cache } from "next/cache";
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const GetCustomNumber = unstable_cache(async () => {
  //   await sleep(100);
  const randomNumber = Math.random();
  return randomNumber;
}, ["customNumber"]);
export const GetCachedNusmber = unstable_cache(async () => {
  //   await sleep(100);
  const randomNumber = Math.random();
  return randomNumber;
}, ["cachedNumber"]);
export async function GetCachedNumber() {
  // URL="http://localhost:3000"
  // URL = "https://nextjs-revalidation-test.vercel.app"
  try {
    const res = await fetch(process.env.URL + "/api/get-number", {
      next: { tags: ["cachedNumber"] },
      cache: "force-cache",
    });
    if (!res.ok) {
      return "";
    }
    const json = await res.json();
    return json.randomNumber;
  } catch (error:any) {
    return "";
  }
}
