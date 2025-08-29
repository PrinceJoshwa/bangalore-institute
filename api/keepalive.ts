// // api/keepalive.ts
// import { createClient } from "@supabase/supabase-js";
// import type { VercelRequest, VercelResponse } from "@vercel/node";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   const supabase = createClient(
//     process.env.VITE_SUPABASE_URL!,
//     process.env.VITE_SUPABASE_ANON_KEY!
//   );

//   try {
//     const { error } = await supabase.from("heartbeat").select("id").limit(1);
//     if (error) {
//       return res.status(500).json({ ok: false, error: error.message });
//     }

//     res.status(200).json({ ok: true, at: new Date().toISOString() });
//   } catch (err: any) {
//     res.status(500).json({ ok: false, error: err.message });
//   }
// }

// api/keepalive.ts
import { createClient } from "@supabase/supabase-js";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,            // <-- use backend env var
    process.env.SUPABASE_SERVICE_ROLE_KEY! // <-- service role key, not anon
  );

  try {
    // simple heartbeat query
    const { error } = await supabase.from("heartbeat").select("id").limit(1);

    if (error) {
      return res.status(500).json({
        ok: false,
        message: "❌ Keep-alive failed",
        error: error.message,
        at: new Date().toISOString(),
      });
    }

    return res.status(200).json({
      ok: true,
      message: "✅ Keep-alive successful. Supabase connection is active.",
      at: new Date().toISOString(),
    });
  } catch (err: any) {
    return res.status(500).json({
      ok: false,
      message: "❌ Unexpected server error",
      error: err.message,
      at: new Date().toISOString(),
    });
  }
}
