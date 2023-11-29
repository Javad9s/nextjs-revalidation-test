import ServerNumber from "@/components/ServerNumber";

// export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  console.log("### --- Rendered dynamic page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Dynamic page</p>
      <ServerNumber />
    </>
  );
}
