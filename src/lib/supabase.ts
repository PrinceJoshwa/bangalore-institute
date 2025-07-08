import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase


// Types for our database tables
export interface ContactFormData {
  id?: string
  name: string
  email: string
  phone: string
  program?: string
  message?: string
  visit_date?: string
  created_at?: string
}

export interface AdmissionFormData {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  program: string
  qualification: string
  percentage: string
  address: string
  city: string
  state: string
  pincode: string
  guardian_name: string
  guardian_phone: string
  preferred_date?: string
  created_at?: string
}
