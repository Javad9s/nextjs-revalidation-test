"use client";

import { useRouter } from "next/navigation";

const Refresh = () => {
  const router = useRouter();
  const onRefreshClick = () => {
    router.refresh();
  };
  return (
    <button
      onClick={onRefreshClick}
      className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg"
    >
      Router.Refresh()
    </button>
  );
};

export default Refresh;
