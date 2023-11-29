import ServerNumber from "@/components/ServerNumber";

export const revalidate = 3600;
export default function Page() {
  console.log("### --- Rendered ISR 1 h page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate every 1 hour</p>
      <ServerNumber />
    </>
  );
}
