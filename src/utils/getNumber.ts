import { unstable_cache } from "next/cache";
import { CACHED_NUMBER_TAG, renderLog } from "./utils";
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
  [CACHED_NUMBER_TAG],
  { revalidate: 259200, tags: [CACHED_NUMBER_TAG] },
);

// Buggy
const GetUnsatableCachedNumber_NoRevalidate = unstable_cache(
  async () => {
    return GetRandomNumber();
  },
  [CACHED_NUMBER_TAG],
  { tags: [CACHED_NUMBER_TAG] },
);
async function GetFetchCachedNumber() {
  // URL = "http://localhost:3000"
  // URL = "https://nextjs-revalidation-test.vercel.app"
  renderLog("### --- Called GetFetchCachedNumber");
  try {
    const res = await fetch(process.env.URL + "/api/get-number", {
      next: { revalidate: 259200, tags: [CACHED_NUMBER_TAG] },
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
      next: { tags: [CACHED_NUMBER_TAG] },
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
export const GetCachedNumber = GetFetchCachedNumber_NoRevalidate;
