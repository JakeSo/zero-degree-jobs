import supabase from './supabase';

export const fetchNewJobListings = async () => {
  try {
    const { data: newJobs, error } = await supabase
      .from('jobs')
      .select('job_id,title,location,company, date_posted')
      .gte('date_posted', new Date(new Date() - 30 * 24 * 60 * 60 * 1000).toISOString());
    if (error) throw error;
    return newJobs;
  } catch (error) {
    console.error('Error fetching new job listings:', error);
    return [];
  }
}

export const fetchNearbyJobListings = async (location) => {
  try {
    const { data: nearbyJobs, error } = await supabase
      .from('jobs')
      .select('job_id,title,location,company')
      .ilike('location', `%${location}%`);
    if (error) throw error;
    return nearbyJobs;
  } catch (error) {
    console.error('Error fetching nearby job listings:', error);
    return [];
  }
}

export const addNewJob = async (jobData) => {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .insert(jobData);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding a new job:', error);
    return null;
  }
}