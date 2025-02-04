import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../util/supabase';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/');
      }
    });
  }, [navigate]);

  return <div>Loading...</div>;
}

export default AuthCallback; 