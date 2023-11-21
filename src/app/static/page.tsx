import ServerNumber from "@/components/ServerNumber";

export default function Page() {
  // const randomNumber = Math.random();
  // console.log(`rendered static page ${randomNumber}`);
  return (
    <>
      <p className="text-lg font-bold">Static page</p>
      <ServerNumber />
    </>
  );
}
