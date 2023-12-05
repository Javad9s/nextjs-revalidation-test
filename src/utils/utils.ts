export function renderLog(log: string) {
  const currentDate = new Date();
  const utcTime = currentDate.toISOString().slice(11, 19);
  if (process.env.RENDER_LOG == "true") console.log(`### --- ${utcTime} --- ${log}`);
}
export const CACHED_NUMBER_TAG = "cachedNumber"