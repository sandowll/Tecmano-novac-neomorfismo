import React, { useState, useEffect, useMemo } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  useColorMode,
  useColorModeValue,
  Container,
  Wrap,
  WrapItem,
  extendTheme
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUser,
  FaCog,
  FaMoon,
  FaSun,
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaTv,
  FaHeadphones,
  FaCamera,
  FaGamepad,
  FaPuzzlePiece
} from "react-icons/fa";

// Importaciones de imágenes
import slider1 from '../img/slider1.webp';
import slider2 from '../img/slider2.webp';
import slider3 from '../img/slider3.webp';

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const useNeumorphismStyle = (isInset = false) => {
  const { colorMode } = useColorMode();
  return useMemo(() => ({
    bg: colorMode === "light" ? "#e0e5ec" : "#2a2a2a",
    boxShadow: colorMode === "light"
      ? `${isInset ? 'inset ' : ''}9px 9px 16px #b8bec5, ${isInset ? 'inset ' : ''}-9px -9px 16px #ffffff`
      : `${isInset ? 'inset ' : ''}9px 9px 16px #1a1a1a, ${isInset ? 'inset ' : ''}-9px -9px 16px #3a3a3a`,
    borderRadius: "15px",
    color: colorMode === "light" ? "#374151" : "#D1D5DB",
  }), [colorMode, isInset]);
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slider1, slider2, slider3];
  const neumorphismStyle = useNeumorphismStyle();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Box position="relative" h="300px" mb={4} {...neumorphismStyle} overflow="hidden" w="100%">
      <Image 
        src={slides[currentSlide]} 
        alt={`Slide ${currentSlide + 1}`} 
        objectFit="cover" 
        w="100%" 
        h="100%" 
        borderRadius="15px"
      />
    </Box>
  );
};

const Catalog = ({ items }) => {
  const neumorphismStyle = useNeumorphismStyle();
  const textColor = useColorModeValue("gray.600", "white");

  return (
    <Box w="100%" p={4} {...neumorphismStyle}>
      <Wrap spacing={4} justify="space-between">
        {items.map((item, index) => (
          <WrapItem key={index}>
            <Flex align="center" {...neumorphismStyle} p={2} borderRadius="md">
              <Box mr={2} color={textColor}>
                {item.icon}
              </Box>
              <Text color={textColor}>{item.text}</Text>
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("gray.600", "white");
  const neumorphismStyle = useNeumorphismStyle();
  const neumorphismInsetStyle = useNeumorphismStyle(true);

  const logoStyle = {
    ...neumorphismInsetStyle,
    fontSize: "3xl",
    fontWeight: "bold",
    p: 2,
    ml: 2,
    mt: 2,
    color: textColor,
  };

  return (
    <Box as="header" py={4} px={8} {...neumorphismStyle} mb={8}>
      <Flex justify="space-between" align="center">
        <IconButton icon={<FaSearch />} aria-label="Search" variant="ghost" {...neumorphismStyle} />
        <Text sx={logoStyle}>
          Logo
        </Text>
        <Flex>
          <IconButton icon={<FaUser />} aria-label="User" variant="ghost" mx={2} {...neumorphismStyle} />
          <IconButton icon={<FaCog />} aria-label="Settings" variant="ghost" {...neumorphismStyle} />
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            ml={2}
            {...neumorphismStyle}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

const LandingPage = () => {
  const bgColor = useColorModeValue("#e0e5ec", "#2a2a2a");

  const catalogItems = useMemo(() => [
    { icon: <FaMobileAlt />, text: "Smartphones" },
    { icon: <FaLaptop />, text: "Laptops" },
    { icon: <FaTabletAlt />, text: "Tablets" },
    { icon: <FaTv />, text: "Smart TVs" },
    { icon: <FaHeadphones />, text: "Auriculares" },
    { icon: <FaCamera />, text: "Cámaras" },
    { icon: <FaGamepad />, text: "Consolas" },
    { icon: <FaPuzzlePiece />, text: "Accesorios" }
  ], []);

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} minH="100vh" transition="background-color 0.2s ease">
        <Container maxW="container.xl" p={4}>
          <Navbar />
          <Slider />
          <Catalog items={catalogItems} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default LandingPage;
