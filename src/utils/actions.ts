"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { CACHED_NUMBER_TAG } from "./utils";
export async function RevalidateRootLayout() {
  revalidatePath("/", "layout");
}
export async function RevalidateCustomPath(path: string) {
  revalidatePath(path);
}
export async function RevalidateNotFound() {
  revalidatePath("/_not-found");
}
export async function RevalidateCacheTag() {
  revalidateTag(CACHED_NUMBER_TAG);
}
