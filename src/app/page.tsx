import { renderLog } from "@/utils/utils";

export default function Home() {
  renderLog("### --- Rendered home page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Next v14.0.4-canary.31</p>
      <p className="text-lg font-bold">Steps to reproduce</p>
      <p>1. Go to Control Panel, click on cache tag.</p>
      <p>2. Click on root layout.</p>
      <p>2.1. Assuming every page should now be revalidated.</p>
      <p className="text-lg font-bold">Issue 1</p>
      <p>3.1. On Vercel: not found page always returns stale data.</p>
      <p>3.2. On local build not found page is ok.</p>
      <p className="text-lg font-bold line-through">Issue 2</p>
      <p className="line-through">4.1. On Vercel: with soft navigation some of static pages will still return stale data until first hard refresh on that specific page.</p>
      <p className="line-through">4.2. On local build soft navigation is ok.</p>
    </>
  );
}
