import { unstable_cache } from "next/cache";
import { CACHED_NUMBER_TAG, renderLog } from "./utils";

export function GetRandomNumber() {
  const randomNumber = Math.random();
  const currentDate = new Date();
  const utcDate = currentDate.toISOString().slice(5, 10);
  const utcTime = currentDate.toISOString().slice(11, 19);
  const randomInt = Math.floor(randomNumber * 898) + 100;

  return `<${randomInt}> ${utcDate} ${utcTime}`;
}

const GetUnstableCachedNumber_ISR = unstable_cache(
  async () => {
    const randomNumber = GetRandomNumber();
    renderLog(`Called unstable_cache ${randomNumber}`);
    return randomNumber;
  },
  [CACHED_NUMBER_TAG],
  { revalidate: 259200, tags: [CACHED_NUMBER_TAG] },
);

const GetUnstableCachedNumber = unstable_cache(
  async () => {
    const randomNumber = GetRandomNumber();
    renderLog(`Called unstable_cache ${randomNumber}`);
    return randomNumber;
  },
  [CACHED_NUMBER_TAG],
  { tags: [CACHED_NUMBER_TAG] },
);

async function GetFetchCachedNumber(options: RequestInit): Promise<string> {
  // NEXT_PUBLIC_SITE_URL = "http://localhost:3000"
  // NEXT_PUBLIC_SITE_URL = "https://nextjs-revalidation-test.vercel.app"
  try {
    const publicURL =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(publicURL + "/api/get-number", options);
    if (!res.ok) {
      return "api-error";
    }
    const json = await res.json();
    return json.randomNumber;
  } catch (error: any) {
    return "api-error";
  }
}
export function GetCachedNumber(): Promise<string> {
  switch (process.env.CACHE_METHOD) {
    case "unstable_cache":
      return GetUnstableCachedNumber();

    case "unstable_cache_isr":
      return GetUnstableCachedNumber_ISR();

    case "fetch_no_force":
      return GetFetchCachedNumber({
        next: { tags: [CACHED_NUMBER_TAG] },
      });

    case "fetch_isr":
      return GetFetchCachedNumber({
        next: { tags: [CACHED_NUMBER_TAG], revalidate: 259200 },
      });

    case "fetch":
    default:
      return GetFetchCachedNumber({
        next: { tags: [CACHED_NUMBER_TAG] },
        cache: "force-cache",
      });
  }
}
