import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
    Button,
    Input,
    VStack,
} from '@chakra-ui/react';
import { Field } from '../../components/ui/field';
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "../../components/ui/drawer";

import supabase from '../../util/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
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
        <DrawerRoot
            centerContent
            maxW="sm"
            w={"auto"}
            mt="8"
            p="8"
        >
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button fontFamily={'Raleway'} variant={'ghost'}>Login</Button>
            </DrawerTrigger>
            <DrawerContent bg={'brand.200'} h={"md"} offset={8} rounded="md">
                <DrawerCloseTrigger />
                <DrawerHeader>
                    <DrawerTitle as={'h2'} fontSize={'2xl'} mb={6}>Login to zero°</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <VStack as="form" spacing="4" width="full" onSubmit={handleEmailLogin}>
                        <Field label="Email" required>
                            <Input
                                type="email"
                                required
                                bg="blackAlpha.300"
                                border="none"
                            />
                        </Field>
                        <Field label="Password" required>
                            <Input
                                type="password"
                                required
                                bg="blackAlpha.300"
                                border="none"
                                mb={'3'}
                            />
                        </Field>
                        <Button
                            type="submit"
                            width="full"
                        >
                            Login with Email
                        </Button>
                        <Button
                            variant="outline"
                            borderColor={'white'}
                            onClick={() => handleOAuthLogin('google')}
                            width="full"
                        >
                            <FontAwesomeIcon icon={faGoogle} />
                            Continue with Google
                        </Button>
                        <Button
                            variant={'ghost'}
                            width={'full'}
                            onClick={() => alert('Not implemented :(')}
                        >Sign Up</Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </DrawerRoot>
    );
}

export default Login; 