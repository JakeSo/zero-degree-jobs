import { Flex, Box, Button, Link, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import supabase from '../../util/supabase';
import { useState, useEffect } from 'react';
import Login from '../../pages/Login/Login';

function CustomNavbar() {
  const { pathname } = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const isEmployer = pathname.startsWith("/Employer");

  const [user, setUser] = useState(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => authListener.subscription.unsubscribe();
    }, []);

  return (
    <Flex 
      as="nav"
      p={3}
      position="fixed"
      w="100%"
      top={0}
      zIndex={10}
      bg="rgba(32, 58, 67, 0.8)"
      backdropFilter="blur(10px)"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display={{ base: 'block', lg: 'none' }} onClick={onToggle}>
        <Button variant="ghost">☰</Button>
      </Box>

      <Flex
        display={{ base: isOpen ? 'flex' : 'none', lg: 'flex' }}
        direction={{ base: 'column', lg: 'row' }}
        gap={6}
        alignItems="center"
        flex={1}
      >
        <NavLink to="/About" isActive={pathname === "/About"}>About</NavLink>
        <NavLink to="/Search" isActive={pathname === "/Search"}>Search</NavLink>
        <NavLink to="/Profile" isActive={pathname === "/Profile"}>Your Profile</NavLink>
      </Flex>

      <Flex align="center" gap={4}>
        <Flex
          position="relative"
          className='dark-glassy'
          borderRadius="md"
          width={"200px"}
          justifyContent={'center'}
          p={1}
          gap={1}
        >
          <NavLink w="50%" to="/Employer/Welcome" isActive={isEmployer}>Employer</NavLink>
          <NavLink w="50%" to="/" isActive={!isEmployer}>Seeker</NavLink>
          <Box
            position="absolute"
            bg="rgba(255, 255, 255, 0.2)"
            w="50%"
            h="100%"
            borderRadius="md"
            transition="all 0.3s ease"
            left={isEmployer ? '0' : '50%'}
            top="0"
          />
        </Flex>
        {user ? (
          <Button variant="ghost" onClick={() => supabase.auth.signOut()}>Logout</Button>
        ) : (
          <Login />
        )}
      </Flex>
    </Flex>
  );
}

const NavLink = ({ to, children, isActive, ...otherProps }) => (
  <Button
    as={RouterLink}
    to={to}
    {...otherProps}
    variant="ghost"
    position="relative"
    color={isActive ? 'white' : 'rgba(255, 255, 255, 0.8)'}
    _hover={{ textDecoration: 'none', color: 'white' }}
  >
    {children}
  </Button>
);

export default CustomNavbar;