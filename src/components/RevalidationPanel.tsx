"use client";

import {
  RevalidateCachePage,
  RevalidateCacheTag,
  RevalidateISR1hPage,
  RevalidateRootLayout,
  RevalidateRootPage,
  RevalidateStaticPage,
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
  const onRevalidateRootPage = () => {
    startTransition(async () => {
      try {
        await RevalidateRootPage();
        setMessage("revalidated!");
      } catch (error) {
        setMessage("Error!");
        console.log(error);
      }
    });
  };
  const onRevalidateStaticPage = () => {
    startTransition(async () => {
      try {
        await RevalidateStaticPage();
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
  const onRevalidateCachePage = () => {
    startTransition(async () => {
      try {
        await RevalidateCachePage();
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
          Revalidate root layout
        </button>
        <button
          onClick={onRevalidateRootPage}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          Revalidate root page
        </button>
        <button
          onClick={onRevalidateStaticPage}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          Revalidate static page
        </button>
        <button
          onClick={onRevalidateISR1hPage}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          Revalidate ISR 1h page
        </button>
        <button
          onClick={onRevalidateCachePage}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          Revalidate cache page
        </button>
        <button
          onClick={onRevalidatecacheTag}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          Revalidate cache tag
        </button>
      </div>
      {isPending ? "pending..." : ""}
      {message}
    </>
  );
}
