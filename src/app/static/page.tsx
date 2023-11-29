import ServerNumber from "@/components/ServerNumber";

export default function Page() {
  console.log("### --- Rendered static page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Static page</p>
      <ServerNumber />
    </>
  );
}
