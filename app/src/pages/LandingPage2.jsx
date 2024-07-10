import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  IconButton,
  Switch,
  Checkbox,
  extendTheme
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUser,
  FaMoon,
  FaSun,
  FaCog,
  FaVolumeUp,
  FaVolumeDown,
  FaMusic
} from "react-icons/fa";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const NeumorphicButton = ({ icon, ...props }) => (
  <IconButton
    icon={icon}
    aria-label={`Button ${icon}`}
    bg="white"
    boxShadow="inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff"
    borderRadius="full"
    size="lg"
    _hover={{
      boxShadow: "inset 8px 8px 16px #b8b9be, inset -8px -8px 16px #ffffff",
    }}
    {...props}
  />
);

const NeumorphicCheckbox = (props) => (
  <Checkbox
    bg="white"
    boxShadow="inset 4px 4px 8px #b8b9be, inset -4px -4px 8px #ffffff"
    borderRadius="full"
    size="lg"
    p={2}
    {...props}
  />
);

const NeumorphicSwitch = (props) => (
  <Switch
    bg="white"
    boxShadow="inset 4px 4px 8px #b8b9be, inset -4px -4px 8px #ffffff"
    borderRadius="full"
    size="lg"
    p={2}
    {...props}
  />
);

const LandingPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="white" minH="100vh" p={8}>
        <VStack spacing={8}>
          <HStack spacing={4}>
            <NeumorphicButton icon={<FaSearch />} />
            <NeumorphicButton icon={<FaUser />} />
            <NeumorphicButton icon={<FaMoon />} />
            <NeumorphicButton icon={<FaSun />} />
            <NeumorphicButton icon={<FaCog />} />
          </HStack>
          
          <HStack spacing={4}>
            <NeumorphicCheckbox />
            <NeumorphicCheckbox />
          </HStack>
          
          <HStack spacing={4}>
            <NeumorphicSwitch />
            <NeumorphicSwitch />
          </HStack>
          
          <HStack spacing={4}>
            <NeumorphicButton icon={<FaVolumeDown />} />
            <NeumorphicButton icon={<FaVolumeUp />} />
          </HStack>
          
          <NeumorphicButton icon={<FaMusic />} />
          
          <Box
            bg="white"
            boxShadow="inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff"
            borderRadius="full"
            p={4}
            fontSize="2xl"
            fontWeight="bold"
          >
            Logo
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default LandingPage;