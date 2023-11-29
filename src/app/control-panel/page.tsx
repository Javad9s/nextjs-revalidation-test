import RevalidationPanel from "@/components/RevalidationPanel";

export default function Page() {
  console.log("### --- Rendered control panel page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Revalidate each page:</p>
      <RevalidationPanel />
    </>
  );
}
