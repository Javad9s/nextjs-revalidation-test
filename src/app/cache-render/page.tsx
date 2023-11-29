import NumDisplay from "@/components/NumDisplay";
import ServerNumber from "@/components/ServerNumber";
import { renderLog } from "@/utils/utils";
import { cache } from "react";

const getNumber = cache(() => {
  const randomNumber = Math.random();
  renderLog(`### --- Called react cache ${randomNumber}`);
  return randomNumber;
});
export default function Page() {
  const custom_number = getNumber();
  renderLog("### --- Rendered cache-render page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Render with react cache</p>
      <ServerNumber />
      React Cache : <NumDisplay rnd={custom_number} />
    </>
  );
}
