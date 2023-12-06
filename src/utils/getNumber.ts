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
  const utcDate = currentDate.toISOString().slice(5, 10);
  const utcTime = currentDate.toISOString().slice(11, 19);
  // return `<${getInt(randomNumber) + randomNumber}> ${utcDate} ${utcTime}`;
  return `<${getInt(randomNumber)}> ${utcDate} ${utcTime}`;
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
  // NEXT_PUBLIC_SITE_URL = "http://localhost:3000"
  // NEXT_PUBLIC_SITE_URL = "https://nextjs-revalidation-test.vercel.app"
  // renderLog("Called GetFetchCachedNumber");
  try {
    const publicURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(publicURL + "/api/get-number", {
      next: { revalidate: 259200, tags: [CACHED_NUMBER_TAG] },
    });
    if (!res.ok) {
      return "api-error";
    }
    const json = await res.json();
    return json.randomNumber;
  } catch (error: any) {
    return "api-error";
  }
}
async function GetFetchCachedNumber_NoRevalidate() {
  // NEXT_PUBLIC_SITE_URL = "http://localhost:3000"
  // NEXT_PUBLIC_SITE_URL = "https://nextjs-revalidation-test.vercel.app"
  // renderLog("Called GetFetchCachedNumber");
  try {
    const publicURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(publicURL + "/api/get-number", {
      next: { tags: [CACHED_NUMBER_TAG] },
      cache: "force-cache",
    });
    if (!res.ok) {
      return "api-error";
    }
    const json = await res.json();
    return json.randomNumber;
  } catch (error: any) {
    return "api-error";
  }
}
export const GetCachedNumber = GetFetchCachedNumber_NoRevalidate;
