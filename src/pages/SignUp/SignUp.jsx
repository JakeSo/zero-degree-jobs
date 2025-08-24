import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Input,
    VStack,
    Textarea,
    Box,
    List,
    Fieldset,
    Field,
} from '@chakra-ui/react';
import supabase from '../../util/supabase';
import { fetchCompanies } from '../../util/jobUtils';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        current_job_title: '',
        current_company: '',
        bio: '',
        profile_picture_url: null,
    });
    const [companySuggestions, setCompanySuggestions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'current_company' && value.length > 2) {
            fetchCompanies(value).then(setCompanySuggestions);
        } else if (name === 'current_company') {
            setCompanySuggestions([]);
        }
    };

    const handleCompanySelect = (company) => {
        setFormData({ ...formData, current_company: company });
        setCompanySuggestions([]);
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profile_picture_url: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (error) throw error;

            const user = supabase.auth.user();
            const profileData = { ...formData, user_id: user.id };
            delete profileData.password; // Password is handled by Supabase auth

            const { data, error: profileError } = await supabase
                .from('user_profile')
                .insert(profileData);

            if (profileError) throw profileError;

            navigate('/');
        } catch (error) {
            console.error('Sign-up error:', error.message);
        }
    };

    return (
        <VStack as="form" spacing="4" width="full" onSubmit={handleSubmit}>
            <Fieldset.Root>
                <Fieldset.Legend>Sign Up</Fieldset.Legend>
                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>First Name</Field.Label>
                        <Input name="first_name" value={formData.first_name} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Last Name</Field.Label>
                        <Input name="last_name" value={formData.last_name} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Password</Field.Label>
                        <Input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Phone Number</Field.Label>
                        <Input name="phone_number" value={formData.phone_number} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Current Job Title</Field.Label>
                        <Input name="current_job_title" value={formData.current_job_title} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Current Company</Field.Label>
                        <Box position="relative">
                            <Input
                                name="current_company"
                                value={formData.current_company}
                                onChange={handleChange}
                            />
                            {companySuggestions.length > 0 && (
                                <List.Root
                                    position="absolute"
                                    bg="white"
                                    border="1px solid"
                                    borderColor="gray.200"
                                    borderRadius="md"
                                    zIndex="10"
                                    maxH="150px"
                                    overflowY="auto"
                                    mt="1"
                                >
                                    {companySuggestions.map((company, index) => (
                                        <List.Item
                                            key={index}
                                            p="2"
                                            cursor="pointer"
                                            _hover={{ bg: 'gray.100' }}
                                            onClick={() => handleCompanySelect(company)}
                                        >
                                            {company}
                                        </List.Item>
                                    ))}
                                </List.Root>
                            )}
                        </Box>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Bio</Field.Label>
                        <Textarea name="bio" value={formData.bio} onChange={handleChange} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Profile Picture</Field.Label>
                        <Input type="file" onChange={handleFileChange} />
                    </Field.Root>
                    <Button type="submit" width="full">
                        Sign Up
                    </Button>
                </Fieldset.Content>
            </Fieldset.Root>
        </VStack>
    );
};

export default SignUp;