import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";
import { renderLog } from "@/utils/utils";

export default function Page() {
  renderLog("### --- Rendered client page.tsx");
  return (
    <>
      <p className="text-lg font-bold">
        Static page with client and hydration error
      </p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
}
