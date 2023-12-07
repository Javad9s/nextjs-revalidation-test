"use client";

import {
  RevalidateCacheTag,
  RevalidateCustomPath,
  RevalidateRootLayout,
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
  const onRevalidateCacheTag = () => {
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
  const onRevalidateCustomPath = () => {
    startTransition(async () => {
      try {
        var customPath = prompt("Please enter your path: (ex: /static/03)");
        if (!customPath) throw new Error();
        await RevalidateCustomPath(customPath);
        setMessage("revalidated!");
      } catch (error) {
        setMessage("Error!");
        console.log(error);
      }
    });
  };
  const onRedeploy = () => {
    startTransition(async () => {
      try {
        var ans = prompt("Please answer the following question: (1 + 1 = ?)");
        if (!ans || ans != "2") throw new Error();
        const redeployment_URI =
          "https://next-personal-assistant.vercel.app/api/revalidation-test-deploy";
        const res = await fetch(redeployment_URI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          setMessage(await res.text());
          console.log(res);
          return;
        }
        setMessage(await res.text());
        console.log(res);
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
          revalidatePath(&quot;/&quot;, &quot;layout&quot;)
        </button>
        <button
          onClick={onRevalidateCacheTag}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
            revalidateTag(&quot;cachedNumber&quot;)
        </button>
        <button
          onClick={onRevalidateCustomPath}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          revalidatePath(custom)
        </button>
        <button
          onClick={onRedeploy}
          className="rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-red-700 active:shadow-lg"
        >
          Redeploy
        </button>
      </div>
      {isPending ? "pending..." : message}
    </>
  );
}
