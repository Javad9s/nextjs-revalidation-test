export function renderLog(log: string) {
  if (process.env.RENDER_LOG == "true") console.log(log);
}
export const CACHED_NUMBER_TAG = "cachedNumber"