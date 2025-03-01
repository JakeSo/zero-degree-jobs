import { Flex, Box, Button, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { SegmentedControl } from './ui/segmented-control';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import supabase from '../util/supabase';
import { useState, useEffect } from 'react';
import Login from '../pages/Login/Login';


const LINKS = [{
  label: "About",
  path: "/About"
},
{
  label: "Search",
  path: "/Search"
},
{
  label: "Your Profile",
  path: "/Profile"
}]



function Navbar() {
  const { pathname } = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  console.log("isOpen", isOpen)
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
        <IconButton display={{ md: 'none' }} aria-label="Open menu" variant={'ghost'} onClick={onToggle}>
          <FaBars />
        </IconButton>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        gap={6}
        alignItems="center"
        flex={1}
      >
        {LINKS.map(({ label, path }) => (
          <NavLink key={path} to={path} isActive={pathname === path}>
            {label}
          </NavLink>
        ))}
      </Flex>

      <Flex align="center" gap={4}>
        {/* <Flex
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
        </Flex> */}
        <SegmentedControl 
          size={"lg"} 
          defaultValue="Seeker"
          value={window.location.pathname.startsWith("/Employer") ? "Employer" : "Seeker"} 
          items={[{
            value:"Employer",
            label: (<RouterLink to="/Employer/Welcome">Employer</RouterLink>)
          },{
            value: "Seeker",
            label: <RouterLink to="/" >Seeker</RouterLink>
          }]} />
        {user ? (
          <Button variant="ghost" onClick={() => supabase.auth.signOut()}>Logout</Button>
        ) : (
          <Login />
        )}
      </Flex>
      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {LINKS.map(({label, path}) => (
                <NavLink to={path} key={path}>{label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
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

export default Navbar;