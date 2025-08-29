// api/keepalive.ts
import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { ok: boolean; message: string; error?: string; at?: string; }): any; new(): any; }; }; }) {
  const supabase = createClient(
    process.env.VITE_SUPABASE_URL!,
    process.env.VITE_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("heartbeat").select("id").limit(1);
  if (error) {
    return res.status(500).json({ ok: false, message: "❌ Keep-alive failed", error: error.message });
  }

  return res.status(200).json({ ok: true, message: "✅ Keep-alive successful. Supabase connection is active.", at: new Date().toISOString() });
}

