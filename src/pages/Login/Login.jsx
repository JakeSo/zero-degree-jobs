import { useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { Button, Container, FloatingLabel, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import supabase from '../../util/supabase';
import "./Login.css"
function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (data.session) navigate('/');
        };
        checkSession();
    }, [navigate]);

    const handleEmailLogin = (event) => {
        const email = event.target.email;
        const password = event.target.pass;
    }

    const handleOAuthLogin = async (provider) => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: window.location.origin + '/auth/callback',

            }
        });

        

        if (error) console.error('Login error:', error.message);
    };

    return (
        <Container id='login-container' className="text-center dark-glassy rounded-3">
            <h2 className='mb-3'>Login to zero°</h2>
            <Form id='login-form' onSubmit={handleEmailLogin}>
                <FloatingLabel color='black' label="Email" className=''>
                    <FormControl required id='email' />
                </FloatingLabel>
                <FloatingLabel label="Password">
                    <FormControl required type='password' id="pass" />
                </FloatingLabel>
            </Form>
            <div className="d-grid gap-3 mt-4">
                <Button
                    variant='primary'
                    type='submit'
                >
                    Login with Email
                </Button>
                <Button
                    variant="outline-secondary"
                    onClick={() => handleOAuthLogin('google')}
                    type='button'
                    size="lg"
                >
                    Continue with Google
                </Button>
            </div>
        </Container>
    );
}

export default Login; 