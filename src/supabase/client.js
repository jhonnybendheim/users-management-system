import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';


dotenv.config();

const supabaseUrl = process.env.PROJECT_URL;
const supabaseKey = process.env.API_KEY;


export const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;    