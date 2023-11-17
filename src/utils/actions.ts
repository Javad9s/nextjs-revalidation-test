"use server";
import { revalidatePath, revalidateTag } from "next/cache";
export async function RevalidateRootLayout() {
  revalidatePath("/", "layout");
}
export async function RevalidateRootPage() {
  revalidatePath("/");
}
export async function RevalidateStaticPage() {
  revalidatePath("/static");
}
export async function RevalidateISR1hPage() {
  revalidatePath("/isr1h");
}
export async function RevalidateCachePage() {
  revalidatePath("/with-cache");
}
export async function RevalidateCacheTag() {
  revalidateTag("cashedNumber");
}
