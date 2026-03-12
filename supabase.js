
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "SUPABASE_URL"
const supabaseKey = "SUPABASE_PUBLIC_KEY"

export const supabase = createClient(supabaseUrl, supabaseKey)
