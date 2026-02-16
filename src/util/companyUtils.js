import {supabase} from './supabase.jsx';

export const createCompanyProfile = async (name, description, website_url, industry) => {
    try {
        const { data, error } = await supabase
            .from('company')
            .insert(name, description, website_url, industry);
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error creating company profile:', error);
        return null;
    }
}