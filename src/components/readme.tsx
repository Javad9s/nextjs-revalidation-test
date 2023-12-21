export default function ReadMe() {
  return (
    <div className="max-w-4xl">
      <div className="WordSection1">
        <a
          href="https://github.com/Javad9s/nextjs-revalidation-test"
          className="text-blue-600 hover:underline"
        >
          https://github.com/Javad9s/nextjs-revalidation-test
        </a>
        <p className="text-lg font-bold">
          On Vercel: On demand revalidation doesn&apos;t work for pages that are
          pre-rendered during build time.
        </p>
        <p>Including static pages and &quot;generateStaticParams()&quot;</p>
        <br />
        <p className="MsoNormal">
          Deploy the project to Vercel and set this environment variables:
        </p>

        <table className="table-auto text-sm">
          <thead className="border-b bg-gray-50 font-medium">
            <tr className="divide-x">
              <th className="p-1">Env</th>
              <th className="p-1">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="divide-x">
              <td className="p-1 text-xs">NEXT_PUBLIC_SITE_URL</td>
              <td className="p-1">
                necessary for internal api fetch <br />
                Ex: https://nextjs-revalidation-test.vercel.app
              </td>
            </tr>
            <tr className="divide-x">
              <td className="p-1">CACHE_METHOD</td>
              <td className="p-1">
                determines the cache method
                <br /> Ex: &quot;fetch&quot; or &quot;fetch_isr&quot; or
                &quot;unstable_cache&quot; or &quot;unstable_cache_isr&quot;
              </td>
            </tr>
            <tr className="divide-x">
              <td className="p-1">RENDER_LOG</td>
              <td className="p-1">
                display custom logs in dashboard or console
                <br />
                Ex: &quot;true&quot; or &quot;false&quot;
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p className="MsoNormal">
          Special logs that are generated by RENDER_LOG are formatted like this:
          &quot;### --- HH:mm:ss --- Log Text&quot; and can be found in vercel
          dashboard.
        </p>
        <p className="MsoNormal">
          If you see &quot;Global Cache: api-error&quot; on website because the
          internal api was not ready during build, deploy the project again and
          it should be ok.
        </p>
        <br />
        <p className="MsoNormal">
          <b>
            1 - Behavior with fetch and &lt;cache: &quot;force-cache&quot;&gt;
            (CACHE_METHOD = &quot;fetch&quot;):
          </b>
        </p>
        <p className="MsoListParagraphCxSpFirst">
          1-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Go to dynamic page (which will render in each hit). You should see
          something like &quot;Global Cache: &lt;266&gt; 12-07 07:46:03&quot;.
          This value is what we expect to see in all other pages[1].
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          2-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Go to Control Panel. Then click on revalidatePath(&quot;/&quot;,
          &quot;layout&quot;) [2].
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          3-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Go to dynamic page again. You will see new global cache in dynamic
          page. You should see some logs like this in dashboard as well:
          <br />
          ### --- 08:24:58 --- Called get-number api &lt;730&gt; 12-07 08:24:58
          <br />
          ### --- 08:26:09 --- Rendered dynamic page.tsx
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          4-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Go to other static pages and param pages. Notice pages that were
          previously cached during build process, have a hard time revalidating
          and you won&quot;t see a log as well. Hence &quot;/params/01&quot; and
          &quot;/params/02&quot; will still show old data because they are
          rendered using generateStaticParams(). but other params (e.g.
          /params/03) will render again and show fresh data.
        </p>
        <p className="MsoListParagraphCxSpLast">
          5-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          In this stage if you somehow can cause a new render in those pages,
          they will revalidate and cache properly from this point forward (in
          another word they are cleaned). The workaround is you go to that page
          and hit reloads (ctrl + R). Keep in mind soft navigation and
          router.refresh() won&apos;t cause a new render in this stage. If you
          are lucky enough, you can get one or two new renders in every step,
          then you click on revalidatePath(&quot;/&quot;, &quot;layout&quot;)
          again and repeat the process until you clean all of the pages [3].
        </p>
        <br />
        <p className="MsoNormal">
          <b>
            2 - Behavior with isr fetch (CACHE_METHOD = &quot;fetch_isr&quot;):
          </b>
        </p>
        <p className="MsoListParagraphCxSpFirst">
          1-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Same as 1.1
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          2-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Same as 1.2
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          3-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Same as 1.3
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          4-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          Most pages will render again properly here.
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          5-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          If a page is still serving old data, one reload (ctrl + R) will cause
          a new render, but keep in mind you will still see the stale page until
          next reload or soft navigation or router.refresh() [3].
        </p>
        <p className="MsoListParagraphCxSpLast">
          6-
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          For isr pages that have &quot;prefetch = false&quot; including
          &quot;isr 10s&quot; and &quot;isr 2h&quot;, first time navigating will
          cause a new render but new data will always be served in next visit
          [3].
        </p>
        <br />
        <p className="text-lg font-bold">Side issues:</p>
        <p className="MsoNormal">
          <span className="text-lg font-bold">
            [1] Cache is not consistence between build on vercel and dynamic
            page
          </span>
          At first deploy, global cache is different between static pages and
          dynamic page. They serve a new and updated global cache while dynamic
          page is serving the one from previous build.
        </p>
        <br />
        <p className="MsoNormal">
          <span className="text-lg font-bold">
            [2] Calling revalidatePath in a server action causes unnecessary
            render on the current page
          </span>
          This happens in local build as well. Control panel will render once,
          which will be lost and will not be cached. Next time you visit control
          panel you might still get old data or a different set of data. For
          this issue in local build, you can call revalidatePath(custom) and
          keep an eye on different values under &quot;Page Specific&quot;
          section in control panel (also keep in mind react, renders each page
          two times, one for hard reload and one for RSC and soft navigation).
        </p>
        <br />
        <p className="MsoNormal">
          <span className="text-lg font-bold">
            [3] On Vercel: App router serves stale data despite rendering fresh
            pages
          </span>
          When attempting to revalidate with hard reloads. If you are lucky and
          caused a new render, at that specific hit you still get the stale data
          while you see the render log in the dashboard. Only After next reload
          or soft navigation or router.refresh() new rendered page will be
          served. This behavior is extremely intense in &quot;isr 10s&quot;
          page.
        </p>
      </div>
      <div className="mt-9">
        <p className="text-lg font-bold">
          [4] Can&apos;t revalidate not found page
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
        <p className="text-lg font-bold">[5] Cached notFound()</p>
        <p>1. Type in any non-numeric ids like /params/gg or /params/njs.</p>
        <p>
          2. Pages that use notFound() from next/navigation are actually cached.
        </p>
        <p>3. This could cause Disk exhaustion.</p>
        <p>
          4. notFound() should always redirect to one general not found page.
        </p>
        <p>
          5. Or implement a garbage collector mechanism with Maximum cache size
          and maximum cache age that purges oldest visited page.
        </p>
        <p>
          6. With this behavior regular pages with params will also be generated
          and cached without proper control.
        </p>
      </div>
    </div>
  );
}
