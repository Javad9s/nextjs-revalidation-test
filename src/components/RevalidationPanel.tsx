"use client";

import { RevalidateISR1hPage, RevalidateRootLayout, RevalidateRootPage, RevalidateStaticPage } from "@/utils/actions";
import { useState, useTransition } from "react";

const RevalidationPanel = () => {
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
          Revalidate Static Page
        </button>
        <button
          onClick={onRevalidateISR1hPage}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          Revalidate ISR 1h Page
        </button>
      </div>
      {isPending ? "pending..." : ""}
      {message}
    </>
  );
};

export default RevalidationPanel;
