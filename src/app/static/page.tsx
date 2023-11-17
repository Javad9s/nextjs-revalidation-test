import ClientNumber from "@/components/ClientNumber";
import ServerNumber from "@/components/ServerNumber";

const page = () => {
  return (
    <>
      <p className="text-lg font-bold">Static page</p>
      <ServerNumber />
      <ClientNumber />
    </>
  );
};

export default page;
