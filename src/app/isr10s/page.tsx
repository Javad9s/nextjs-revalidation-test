import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

export const revalidate = 10;
export default function Page() {
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 10 seconds</p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
}
