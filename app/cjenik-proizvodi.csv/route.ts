import { generateProizvodiCsv } from "@/lib/cjenik";

export const dynamic = "force-static";

export async function GET() {
  return new Response(generateProizvodiCsv(), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
    },
  });
}
