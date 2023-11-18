import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

export default function Page() {
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
