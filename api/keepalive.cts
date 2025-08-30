// // // // // api/keepalive.ts
// // // // import { createClient } from "@supabase/supabase-js";
// // // // import type { VercelRequest, VercelResponse } from "@vercel/node";

// // // // export default async function handler(req: VercelRequest, res: VercelResponse) {
// // // //   const supabase = createClient(
// // // //     process.env.VITE_SUPABASE_URL!,
// // // //     process.env.VITE_SUPABASE_ANON_KEY!
// // // //   );

// // // //   try {
// // // //     const { error } = await supabase.from("heartbeat").select("id").limit(1);
// // // //     if (error) {
// // // //       return res.status(500).json({ ok: false, error: error.message });
// // // //     }

// // // //     res.status(200).json({ ok: true, at: new Date().toISOString() });
// // // //   } catch (err: any) {
// // // //     res.status(500).json({ ok: false, error: err.message });
// // // //   }
// // // // }

// // // // api/keepalive.ts
// // // import { createClient } from "@supabase/supabase-js";
// // // import type { VercelRequest, VercelResponse } from "@vercel/node";

// // // export default async function handler(req: VercelRequest, res: VercelResponse) {
// // //   const supabase = createClient(
// // //     process.env.SUPABASE_URL!,            // <-- use backend env var
// // //     process.env.SUPABASE_SERVICE_ROLE_KEY! // <-- service role key, not anon
// // //   );

// // //   try {
// // //     // simple heartbeat query
// // //     const { error } = await supabase.from("heartbeat").select("id").limit(1);

// // //     if (error) {
// // //       return res.status(500).json({
// // //         ok: false,
// // //         message: "❌ Keep-alive failed",
// // //         error: error.message,
// // //         at: new Date().toISOString(),
// // //       });
// // //     }

// // //     return res.status(200).json({
// // //       ok: true,
// // //       message: "✅ Keep-alive successful. Supabase connection is active.",
// // //       at: new Date().toISOString(),
// // //     });
// // //   } catch (err: any) {
// // //     return res.status(500).json({
// // //       ok: false,
// // //       message: "❌ Unexpected server error",
// // //       error: err.message,
// // //       at: new Date().toISOString(),
// // //     });
// // //   }
// // // }

// // // api/keepalive.ts
// // import { VercelRequest, VercelResponse } from "@vercel/node";
// // import { createClient } from "@supabase/supabase-js";

// // const supabase = createClient(
// //   process.env.SUPABASE_URL ?? "",
// //   process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
// // );

// // export default async function handler(req: VercelRequest, res: VercelResponse) {
// //   if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
// //     return res.status(500).json({ ok: false, error: "Missing Supabase env vars" });
// //   }

// //   try {
// //     const { data, error } = await supabase
// //       .from("heartbeat") // Make sure this table exists in Supabase
// //       .update({ checked_at: new Date().toISOString() })
// //       .eq("id", 1)
// //       .select("checked_at");

// //     if (error) return res.status(500).json({ ok: false, error: error.message });

// //     return res.status(200).json({ ok: true, last_checked: data?.[0]?.checked_at });
// //   } catch (err: any) {
// //     return res.status(500).json({ ok: false, error: err.message });
// //   }
// // }

// // api/keep-alive.ts
// import { createClient } from '@supabase/supabase-js';
// import type { VercelRequest, VercelResponse } from '@vercel/node';

// export default async function handler(
//   request: VercelRequest,
//   response: VercelResponse,
// ) {
//   // You should use Environment Variables for these keys
//   const supabaseUrl = process.env.VITE_SUPABASE_URL;
//   const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

//   if (!supabaseUrl || !supabaseKey) {
//     return response.status(500).json({
//       error: 'Supabase URL or Key is not defined in environment variables.',
//     });
//   }

//   try {
//     const supabase = createClient(supabaseUrl, supabaseKey);

//     // This is a simple query to "touch" the database
//     const { error } = await supabase.from('heartbeat').select('id').limit(1);

//     if (error) {
//       throw error;
//     }

//     console.log('Supabase project has been kept alive.');
//     return response.status(200).json({ message: 'Ping successful. Project is active.' });

//   } catch (error: any) {
//     console.error('Error pinging Supabase:', error.message);
//     return response.status(500).json({
//       message: 'Error pinging Supabase.',
//       error: error.message,
//     });
//   }
// }

// api/keep-alive.cts  <- Make sure the file name ends in .cts

const { createClient } = require('@supabase/supabase-js');

// This function will be exported
async function handler(request, response) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return response.status(500).json({
      error: 'Supabase URL or Key is not defined in environment variables.',
    });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    // IMPORTANT: Make sure you have replaced 'your_table_name' below!
    const { error } = await supabase.from('heartbeat').select('id').limit(1);

    if (error) {
      throw error;
    }

    console.log('Supabase project has been kept alive.');
    return response.status(200).json({ message: 'Ping successful. Project is active.' });

  } catch (error) {
    console.error('Error pinging Supabase:', error.message);
    return response.status(500).json({
      message: 'Error pinging Supabase.',
      error: error.message,
    });
  }
}

// Use module.exports to make the function available
module.exports = handler;