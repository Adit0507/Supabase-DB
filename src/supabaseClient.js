import { createClient } from '@supabase/supabase-js'

const supabaseURL = "https://btczshjxlxbztlltryjn.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0Y3pzaGp4bHhienRsbHRyeWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMzM0MTIsImV4cCI6MTk5MzYwOTQxMn0.zOdUUcwi5p5FC8X-F2jz_6avkq7vRQI6WtgYbKb111M"

export const supabase = createClient(supabaseURL, supabaseAnonKey)
