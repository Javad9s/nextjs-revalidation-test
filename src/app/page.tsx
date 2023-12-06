import CachedNumber from "@/components/CachedNumber";
import { renderLog } from "@/utils/utils";

export default function Home() {
  renderLog("Rendered home page.tsx");
  return (
    <>
      <p className="text-lg font-bold">Next v14.0.4-canary.40</p>
      <CachedNumber />
      <div className="items-start">
        <p className="text-lg font-bold">Steps to reproduce</p>
        <br />
        <p className="text-lg font-bold">Issue 1 (Soft navigation Rerender)</p>
        <p>1. On first deploy of the project</p>
        <p>
          2. (On Vercel) notice how cached values are inconsistence between
          pages.
          <a
            className="text-blue-950 underline"
            href="https://github.com/evankirkiles/nextjs-broken-data-cache-demo"
          >
            This repo fixes it
          </a>
        </p>
        <p>
          2. Go to &quot;Control Panel&quot; click on &quot;root layout&quot;.
        </p>
        <p>
          3.1. (On Vercel) with soft navigation some of pages will still return
          stale data until first hard refresh on that specific page.
        </p>
        <p>
          3.2. (On Vercel) even after some days you might randomly find a page
          that needs a hard refresh in order to render updated data.
        </p>
        <p>3.3. (On Vercel) includes static, ISR and pages with params.</p>
        <p>
          3.4. (On Vercel) after First hard refresh on that specific page
          revalidation mostly works as expected.
        </p>
        <p>3.5. (On local build) soft navigation returns updated data.</p>
        <br />
        <p className="text-lg font-bold">
          Issue 2 (can&apos;t revalidate not found page)
        </p>
        <p>
          1. Go to &quot;Control Panel&quot; click on the &quot;root
          layout&quot; button.
        </p>
        <p>
          2. Click on &quot;not found&quot; button on navbar or type in any
          arbitrary address.
        </p>
        <p>
          3.1. (On Vercel) general not found page always returns stale data.
        </p>
        <p>3.2. (On local build) not found page is a dynamic page.</p>
        <br />
        <p className="text-lg font-bold">Issue 3 (cached notfound())</p>
        <p>1. Type in any Address between /params/30 to /params/59.</p>
        <p>
          2. Pages that use notFound() from next/navigation are actually cached.
        </p>
        <p>3. This could cause DoS of type Disk exhaustion.</p>
        <p>
          4. notFound() should always redirect to one general not found page.
        </p>
        <p>
          5. Must implement a garbage collector mechanism with Maximum cache
          size and maximum cache age that purges oldest visited page.
        </p>
        <p>
          6. With this behavior regular pages with params will also be generated
          and cached without proper control.
        </p>
      </div>
    </>
  );
}
