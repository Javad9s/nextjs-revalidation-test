import CachedNumber from "@/components/CachedNumber";
import RandomNumber from "@/components/RandomNumber";
import ReadMe from "@/components/readme";
import { renderLog } from "@/utils/utils";

export default function Home() {
  renderLog("Rendered home page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Next v14.0.5-canary.5</p>
      <CachedNumber />
      <RandomNumber />
      <ReadMe />
    </>
  );
}
