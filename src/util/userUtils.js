import {supabase} from './supabase.jsx';

export const signUpUser = async (email, password, additionalData) => {
  try {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: additionalData
        }
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error signing up user:', error);
    return null;
  }
}


export const addEmployer = async (user_id, company_id) => {
    try {
        const { data, error } = await supabase
            .from('employer')
            .insert({ user_id, company_id });
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding employer:', error);
        return null;
    }   
}