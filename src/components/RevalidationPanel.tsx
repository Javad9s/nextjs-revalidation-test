"use client";

import {
  RevalidateCacheTag,
  RevalidateISR1hPage,
  RevalidateRootLayout
} from "@/utils/actions";
import { useState, useTransition } from "react";
export default function RevalidationPanel() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const onRevalidateRootLayout = () => {
    startTransition(async () => {
      try {
        await RevalidateRootLayout();
        setMessage("revalidated!");
      } catch (error) {
        setMessage("Error!");
        console.log(error);
      }
    });
  };

  const onRevalidateISR1hPage = () => {
    startTransition(async () => {
      try {
        await RevalidateISR1hPage();
        setMessage("revalidated!");
      } catch (error) {
        setMessage("Error!");
        console.log(error);
      }
    });
  };

  const onRevalidatecacheTag = () => {
    startTransition(async () => {
      try {
        await RevalidateCacheTag();
        setMessage("revalidated!");
      } catch (error) {
        setMessage("Error!");
        console.log(error);
      }
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={onRevalidateRootLayout}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          root layout
        </button>

        <button
          onClick={onRevalidateISR1hPage}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          ISR 1h
        </button>

        <button
          onClick={onRevalidatecacheTag}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          cache tag
        </button>
      </div>
      {isPending ? "pending..." : ""}
      {message}
    </>
  );
}
