import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Served as a standalone document (no site layout) so its Tailwind/daisyUI
// styles don't clash with the site's Panda CSS.
export const dynamic = "force-static";

export async function GET() {
  const html = await readFile(
    join(process.cwd(), "app/homeloan-system-design/page.html"),
    "utf8",
  );

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
