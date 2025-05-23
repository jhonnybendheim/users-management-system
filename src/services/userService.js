import { supabase } from '../supabase/client.js';

export async function createUser({ name, email }) {
  const { data, error } = await supabase.from('users').insert([{ name, email }]);
  return error ? { error: error.message } : { data };
}

export async function getAllUsers() {
  const { data, error } = await supabase.from('users').select('*');
  return error ? { error: error.message } : { data };
}

export async function getUserById(id) {
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  return error ? { error: error.message } : { data };
}

export async function updateUser(id, updates) {
  const { data, error } = await supabase.from('users').update(updates).eq('id', id);
  return error ? { error: error.message } : { data };
}

export async function deleteUser(id) {
  const { data, error } = await supabase.from('users').delete().eq('id', id);
  return error ? { error: error.message } : { data };
}