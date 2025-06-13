// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://abtwoffpviwpekjerqac.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidHdvZmZwdml3cGVramVycWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODkyNTYsImV4cCI6MjA2MzA2NTI1Nn0.HGvwD7Fy35sJka6trR-6w_AWnOQbLgnKh_rgduMZyME';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
