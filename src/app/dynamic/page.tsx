import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

export const dynamic = "force-dynamic";
const page = () => {
  return (
    <>
      <p className="text-lg font-bold">Dynamic page</p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
};

export default page;
