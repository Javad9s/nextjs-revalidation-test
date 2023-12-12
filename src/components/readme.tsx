export default function ReadMe() {
  return (
    <div className="mx-4 max-w-4xl">
      <div className="WordSection1">
        <p className="text-lg font-bold">
          Vercel Deploy: Revalidation works poorly on pages that are cached in
          prerendering during build time
        </p>

        <p className="MsoNormal">
          Deploy the project to Vercel and set this environment variables:
        </p>
        <table
          className="MsoTableGrid"
          border={1}
          cellSpacing={0}
          cellPadding={0}
          style={{ borderCollapse: "collapse", border: "none" }}
        >
          <tbody>
            <tr>
              <td
                width={208}
                valign="top"
                style={{
                  width: "155.8pt",
                  border: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  <b>Env</b>
                </p>
              </td>
              <td
                width={208}
                valign="top"
                style={{
                  width: "155.85pt",
                  border: "solid windowtext 1.0pt",
                  borderLeft: "none",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  <b>purpose</b>
                </p>
              </td>
              <td
                width={208}
                valign="top"
                style={{
                  width: "155.85pt",
                  border: "solid windowtext 1.0pt",
                  borderLeft: "none",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  <b>example</b>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width={208}
                style={{
                  width: "155.8pt",
                  border: "solid windowtext 1.0pt",
                  borderTop: "none",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  NEXT_PUBLIC_SITE_URL
                </p>
              </td>
              <td
                width={208}
                style={{
                  width: "155.85pt",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "solid windowtext 1.0pt",
                  borderRight: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  necessary for internal api fetch
                </p>
              </td>
              <td
                width={208}
                style={{
                  width: "155.85pt",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "solid windowtext 1.0pt",
                  borderRight: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  https://nextjs-revalidation-test.vercel.app
                </p>
              </td>
            </tr>
            <tr>
              <td
                width={208}
                style={{
                  width: "155.8pt",
                  border: "solid windowtext 1.0pt",
                  borderTop: "none",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  CACHE_METHOD
                </p>
              </td>
              <td
                width={208}
                style={{
                  width: "155.85pt",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "solid windowtext 1.0pt",
                  borderRight: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  determines the cache method
                </p>
              </td>
              <td
                width={208}
                style={{
                  width: "155.85pt",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "solid windowtext 1.0pt",
                  borderRight: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  &quot;fetch&quot; or &quot;fetch_isr&quot; or
                  &quot;unstable_cache&quot; or &quot;unstable_cache_isr&quot;
                </p>
              </td>
            </tr>
            <tr>
              <td
                width={208}
                style={{
                  width: "155.8pt",
                  border: "solid windowtext 1.0pt",
                  borderTop: "none",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  RENDER_LOG
                </p>
              </td>
              <td
                width={208}
                style={{
                  width: "155.85pt",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "solid windowtext 1.0pt",
                  borderRight: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  Display custom logs in dashboard or console
                </p>
              </td>
              <td
                width={208}
                style={{
                  width: "155.85pt",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "solid windowtext 1.0pt",
                  borderRight: "solid windowtext 1.0pt",
                  padding: "0in 5.4pt 0in 5.4pt",
                }}
              >
                <p
                  className="MsoNormal"
                  style={{
                    marginBottom: "0in",
                    textAlign: "center",
                    lineHeight: "normal",
                  }}
                >
                  &quot;true&quot; or &quot;false&quot;
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="MsoNormal">&nbsp;</p>
        <p className="MsoNormal">
          Runtime logs that are generated by RENDER_LOG are formatted like this:
          &quot;### --- HH:mm:ss --- Log Text&quot; and can be found here in
          vercel account : dashboard / Logs.
        </p>
        <p className="MsoNormal">
          If you see &quot;Global Cache: api-error&quot; on website it is
          because the internal api was not ready during build so deploy it again
          and it should be ok.
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
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span dir="LTR" />
          Click on &quot;dynamic&quot;, go to dynamic page (it is dynamically
          rendered). You should see something like &quot;Global Cache:
          &lt;266&gt; 12-07 07:46:03&quot;. This value is what we expect to see
          in all of the pages (e.g., /static/01) [Side issue #1]
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          2-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Navigate to all other pages including &quot;params/01&quot; to
          &quot;params/06&quot; to make sure they are rendered and cached.
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          3-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Click on &quot;Control Panel&quot;. Then click on
          revalidatePath(&quot;/&quot;, &quot;layout&quot;) [Side issue #2].
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          4-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Click on &quot;dynamic&quot; again. You will see new global cache in
          dynamic page. You should see some logs like this in dashboard as well:
          <br />
          ### --- 08:24:58 --- Called get-number api &lt;730&gt; 12-07 08:24:58
          <br />
          ### --- 08:26:09 --- Rendered dynamic page.tsx{" "}
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          5-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Go to other static pages and param pages. Notice pages that were
          previously cached during build process, have a hard time revalidating
          and you won&quot;t see a log pointing &quot;Rendered page.tsx&quot;.
          Hence &quot;/params/01&quot; and &quot;/params/02&quot; will still
          show old data because they are rendered using generateStaticParams().
          but other params (e.g. /params/03) will render (with proper logs) and
          show fresh data.
        </p>
        <p className="MsoListParagraphCxSpLast">
          6-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          In this stage if you somehow can cause a new render in those pages,
          they will revalidate and cache alright from this point forward (with
          proper logs). The workaround is you go to that page and hit hard
          reloads (ctrl + R). Keep in mind soft navigation and router.refresh()
          won&apos;t cause a new render in this stage. If you are lucky enough,
          you can get one or two new renders in every step, then you click on
          revalidatePath(&quot;/&quot;, &quot;layout&quot;) again and repeat the
          process until you clean all of the pages [side issue #3].
        </p>
        <p className="MsoNormal">&nbsp;</p>
        <p className="MsoNormal">
          <b>
            2 - Behavior with isr fetch (CACHE_METHOD = &quot;fetch_isr&quot;):
          </b>
        </p>
        <p className="MsoListParagraphCxSpFirst">
          1-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Same as 2.1{" "}
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          2-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Same as 2.2
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          3-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Same as 2.3
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          4-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Same as 2.4
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          5-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Most pages will render again proprerly here.
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          6-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          If a page is still serving old data one hard reload (ctrl + R) will
          cause a new render but keep in mind you will still see the stale page
          until next reload or soft navigation or router.refresh() [side issue
          #3].
        </p>
        <p className="MsoListParagraphCxSpLast">
          7-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          For isr pages that have &quot;prefetch = false&quot; including
          &quot;isr 10s&quot; and &quot;isr 2h&quot;, first time navigating will
          cause a new render but new data will always be served in next visit
          [side issue #3]. This behavior is extremely intense in &quot;isr
          10s&quot; page.
        </p>
        <p className="MsoNormal">&nbsp;</p>
        <p className="MsoNormal">
          <b>
            3- Behavior with unstable_cache and isr (CACHE_METHOD =
            &quot;unstable_cache_isr&quot;):
          </b>
        </p>
        <p className="MsoListParagraphCxSpFirst">
          1-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Nextjs spam calls unstable_cache multiple times during build and
          revalidation calls are duplicate. Some fixes that applied on fetch
          should be apply to unstable_cache as well.
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          2-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Sometimes some random renders happen.
        </p>
        <p className="MsoListParagraphCxSpMiddle">
          3-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          Also, it seems unstable_cache is returning different result to
          different pages at the same time.
        </p>
        <p className="MsoListParagraphCxSpLast">
          4-
          <span style={{ font: '7.0pt "Times New Roman"' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </span>
          <span dir="LTR" />
          ...
        </p>
        <br />
        <p className="MsoNormal">
          <span className="text-lg font-bold">(Side issue #1) </span>
          Sometimes Global Cache for prerendered pages during build process is
          not consistence between different page. Most of the times they serve a
          new and updated global cache while global cache shown in dynamic page
          is the same from the previous build.
        </p>
        <br />
        <p className="MsoNormal">
          <span className="text-lg font-bold">(Side issue #2) </span>
          Calling revalidatePath in a server action causes unnecessary render on
          the current page. This happens in local build as well. Control panel
          will render once which will be lost and will not be cached. Next time
          you visit control panel you might still get old data or a different
          set of data. For this issue in local build, you can call
          revalidatePath(custom) and keep an eye on different values under
          &quot;Page Specific&quot; section in control panel (also keep in mind
          react, renders each page two times, one for hard reload and one for
          RSC and soft navigation).
        </p>
        <br />
        <p className="MsoNormal">
          <span className="text-lg font-bold">(Side issue #3) </span>
          When attempting to revalidate with hard reloads. If you are lucky and
          caused a new render, at that specific hit you still get the stale data
          while you see the render log in the dashboard. Only After next reload
          or soft navigation or router.refresh() new rendered page will be
          served.
        </p>
      </div>
      <div className="mt-9">
        <p className="text-lg font-bold">
          Issue 4 (can&apos;t revalidate not found page)
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
        <p className="text-lg font-bold">Issue 5 (cached notfound())</p>
        <p>1. Type in any non-numeric ids like /params/gg to /params/njs.</p>
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
