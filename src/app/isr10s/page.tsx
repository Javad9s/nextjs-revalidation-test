import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

export const revalidate = 10;
const page = () => {
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 10 seconds</p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
};

export default page;
