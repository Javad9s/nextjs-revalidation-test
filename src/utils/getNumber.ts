import { unstable_cache } from "next/cache";
import { renderLog } from "./utils";
function getInt(rnd: number) {
  const min = 100;
  const max = 997;
  return Math.floor(rnd * (max - min + 1)) + min;
}
export function GetRandomNumber() {
  const randomNumber = Math.random();
  const currentDate = new Date();
  const utcDate = currentDate.toISOString().slice(0, 10);
  const utcTime = currentDate.toISOString().slice(11, 19);
  return `<${
    getInt(randomNumber) + randomNumber
  }> updated at ${utcDate} ${utcTime} UTC`;
}

const GetUnsatableCachedNumber = unstable_cache(
  async () => {
    return GetRandomNumber();
  },
  ["cachedNumber"],
  { revalidate: 259200, tags: ["cachedNumber"] },
);

// Buggy
const GetUnsatableCachedNumber_NoRevalidate = unstable_cache(
  async () => {
    return GetRandomNumber();
  },
  ["cachedNumber"],
  { tags: ["cachedNumber"] },
);
async function GetFetchCachedNumber() {
  // URL = "http://localhost:3000"
  // URL = "https://nextjs-revalidation-test.vercel.app"
  renderLog("### --- Called GetFetchCachedNumber");
  try {
    const res = await fetch(process.env.URL + "/api/get-number", {
      next: { revalidate: 259200, tags: ["cachedNumber"] },
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
async function GetFetchCachedNumber_NoRevalidate() {
  // URL = "http://localhost:3000"
  // URL = "https://nextjs-revalidation-test.vercel.app"
  renderLog("### --- Called GetFetchCachedNumber");
  try {
    const res = await fetch(process.env.URL + "/api/get-number", {
      next: { tags: ["cachedNumber"] },
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
export const GetCachedNumber = GetUnsatableCachedNumber;
