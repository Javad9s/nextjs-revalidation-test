import CustomNumber from "@/components/CustomNumber";

export default function Page() {
  const randomNumber = Math.random();
  // console.log(`rendered static page ${randomNumber}`);
  return (
    <>
      <p className="text-lg font-bold">Static page</p>
      Custom server : <CustomNumber rnd={randomNumber} />
    </>
  );
}
