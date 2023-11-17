import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

export default function Page() {
  return (
    <>
      <p className="text-lg font-bold">Static page</p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
}
