import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

export const revalidate = 3600;
const page = () => {
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 1 hour</p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
};

export default page;
