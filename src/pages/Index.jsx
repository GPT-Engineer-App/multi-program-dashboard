import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, useToast } from "@chakra-ui/react";
import { FaUserCircle, FaSignOutAlt, FaCog, FaEnvelope, FaTasks } from "react-icons/fa";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      setIsAuthenticated(true);
      toast({
        title: "Login successful.",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login failed.",
        description: "Invalid username or password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    toast({
      title: "Logged out.",
      description: "You have been logged out.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {!isAuthenticated ? (
        <VStack spacing={4} width="100%">
          <Text fontSize="2xl">User Login</Text>
          <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4} width="100%">
          <HStack width="100%" justifyContent="space-between">
            <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNzA4NzAwN3ww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Menu>
              <MenuButton as={IconButton} icon={<FaUserCircle />} />
              <MenuList>
                <MenuItem icon={<FaCog />}>Settings</MenuItem>
                <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Text fontSize="2xl">Welcome, {username}</Text>
          <HStack spacing={4} width="100%" justifyContent="center">
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
              Messages
            </Button>
            <Button leftIcon={<FaTasks />} colorScheme="teal" variant="outline">
              Tasks
            </Button>
          </HStack>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
