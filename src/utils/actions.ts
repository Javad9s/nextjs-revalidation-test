"use server";

import { revalidatePath } from "next/cache";
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