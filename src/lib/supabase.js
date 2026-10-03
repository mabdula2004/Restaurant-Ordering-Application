import { createClient } from '@supabase/supabase-js'
const url = import.meta.env.VITE_SUPABASE_URL || 'https://sjmwsflfqzryhcjkfcwa.supabase.co'
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_yBX6wEICHPIBw5Y5rMm6-A_JfRKCMmH'
export const supabase = createClient(url, key)