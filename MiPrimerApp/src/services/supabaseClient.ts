import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zdgvoglzbuvsdvhbkiph.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZ3ZvZ2x6YnV2c2R2aGJraXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NjU2NjEsImV4cCI6MjA5NjU0MTY2MX0.WtRGGGUulxuEnTyM3bz-2Je4OqXMCun9asP87r7AU-o"

export const supabase = createClient (SUPABASE_URL, SUPABASE_ANON_KEY);


