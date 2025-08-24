import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../util/supabase';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        //Check if new user
        const user = session.user;
        if (!user) {
          console.error('No user found in session');
          return;
        }
        const { data: profile } = await supabase
          .from('user_profile')
          .select('*')
          .eq('id', user.user.id)
          .single();
        if (!profile) {
          // Redirect to sign-up if no profile exists
          navigate('/signup');
        } else {
          navigate('/');
        }
      }
    });
  }, [navigate]);

  return <div>Loading...</div>;
}

export default AuthCallback; 