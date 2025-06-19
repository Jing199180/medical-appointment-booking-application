//初始化
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://trtttaxbpojttogmjalz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydHR0YXhicG9qdHRvZ21qYWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMTkwNDksImV4cCI6MjA2NTg5NTA0OX0.sAf39kd7bST_PO26rcf9ztSN-h7FvNa5qFuHGHUbTHA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
