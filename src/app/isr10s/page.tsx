import ServerNumber from "@/components/ServerNumber";
import { renderLog } from "@/utils/utils";

export const revalidate = 10;
export default function Page() {
  renderLog("### --- Rendered ISR 10 s page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 10 seconds</p>
      <ServerNumber />
    </>
  );
}
