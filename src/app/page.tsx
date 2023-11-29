import { renderLog } from "@/utils/utils";

export default function Home() {
  renderLog("### --- Rendered home page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Home</p>
      Next v14.0.4-canary.25
    </>
  );
}
