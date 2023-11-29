import ServerNumber from "@/components/ServerNumber";
import { renderLog } from "@/utils/utils";

export default function Page() {
  renderLog("### --- Rendered static page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Static page</p>
      <ServerNumber />
    </>
  );
}
