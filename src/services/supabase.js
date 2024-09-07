//初始化
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tvvpowalarxjqvaqhywh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2dnBvd2FsYXJ4anF2YXFoeXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTEyNTEsImV4cCI6MjAzOTg4NzI1MX0.6Ezm9Dns6ZTXaIIcjkaYOgUHjzP7lMzgl74VBFH0qA0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
