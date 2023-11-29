import ServerNumber from "@/components/ServerNumber";

export const revalidate = 10;
export default function Page() {
  console.log("### --- Rendered ISR 10 s page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 10 seconds</p>
      <ServerNumber />
    </>
  );
}
