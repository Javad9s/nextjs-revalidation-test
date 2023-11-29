import { unstable_cache } from "next/cache";
import { renderLog } from "./utils";
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const GetCustomCachedNumber = unstable_cache(
  async () => {
    //   await sleep(100);
    const randomNumber = Math.random();
    return randomNumber;
  },
  ["customNumber"],
  { tags: ["customNumber"] },
);

const GetUnsatableCachedNumber = unstable_cache(
  async () => {
    const randomNumber = Math.random();
    return randomNumber;
  },
  ["cachedNumber"],
  { revalidate: 259200, tags: ["cachedNumber"] },
);
async function GetFetchCachedNumber() {
  // URL="http://localhost:3000"
  // URL = "https://nextjs-revalidation-test.vercel.app"
  renderLog("### --- Called GetFetchCachedNumber");
  try {
    const res = await fetch(process.env.URL + "/api/get-number", {
      next: { revalidate: 259200, tags: ["cachedNumber"] },
      // next: { tags: ["cachedNumber"] },
      // cache: "force-cache",
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
export const GetCachedNumber = GetFetchCachedNumber;
