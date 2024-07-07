import React, { useState, useMemo } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  IconButton,
  Button,
  Text,
  Image,
  useTheme,
  useColorMode,
  useColorModeValue,
  VStack,
  Heading,
  List,
  ListItem,
  Stack,
  Container
} from "@chakra-ui/react";
import {
  FaSearch,
  FaUser,
  FaCog,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaMoon,
  FaSun,
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaTv,
  FaHeadphones,
  FaCamera,
  FaGamepad,
  FaPuzzlePiece,
  FaTruck
} from "react-icons/fa";

// Importaciones de imágenes
import slider1 from '../img/slider1.webp';
import slider2 from '../img/slider2.webp';
import slider3 from '../img/slider3.webp';
import img1 from '../img/img1.webp';
import img2 from '../img/img2.webp';
import img3 from '../img/img3.webp';

const useNeumorphismStyle = (isInset = false) => {
  const { colorMode } = useColorMode();
  return useMemo(() => ({
    bg: colorMode === "light" ? "#f0f4f8" : "#2a2a2a",
    boxShadow: colorMode === "light"
      ? `${isInset ? 'inset ' : ''}9px 9px 16px rgb(163,177,198,0.6), ${isInset ? 'inset ' : ''}-9px -9px 16px rgba(255,255,255, 0.8)`
      : `${isInset ? 'inset ' : ''}9px 9px 16px rgba(0,0,0,0.6), ${isInset ? 'inset ' : ''}-9px -9px 16px rgba(255,255,255, 0.1)`,
    borderRadius: "10px",
  }), [colorMode, isInset]);
};

const CardButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const neumorphismStyle = useNeumorphismStyle();
  const neumorphismInsetStyle = useNeumorphismStyle(true);

  return (
    <Button
      bg={isHovered ? theme.colors.green[500] : (colorMode === "light" ? "#f0f4f8" : "#2a2a2a")}
      color={isHovered ? "white" : theme.colors.green[500]}
      variant="solid"
      w="full"
      {...neumorphismStyle}
      _active={neumorphismInsetStyle}
      _hover={{
        bg: theme.colors.green[500],
        color: "white",
        boxShadow: colorMode === "light"
          ? "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255, 0.8)"
          : "12px 12px 20px rgba(0,0,0,0.7), -12px -12px 20px rgba(255,255,255, 0.1)",
        "& > span": {
          textShadow: "0 0 5px rgba(0,0,0,0.3)",
          fontWeight: "bold",
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text as="span">Ir</Text>
    </Button>
  );
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slider1, slider2, slider3];
  const neumorphismStyle = useNeumorphismStyle();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Box position="relative" h="300px" mb={8} {...neumorphismStyle} overflow="hidden">
      <Image 
        src={slides[currentSlide]} 
        alt={`Slide ${currentSlide + 1}`} 
        objectFit="cover" 
        w="100%" 
        h="100%" 
        borderRadius="10px"
      />
      <IconButton
        icon={<FaChevronLeft />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        {...neumorphismStyle}
        zIndex="1"
      />
      <IconButton
        icon={<FaChevronRight />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
        {...neumorphismStyle}
        zIndex="1"
      />
    </Box>
  );
};

const Sidebar = ({ title, items }) => {
  const neumorphismStyle = useNeumorphismStyle();
  const textColor = useColorModeValue("gray.600", "white");

  return (
    <Box w={{ base: "100%", lg: "250px" }} h="100%" p={4} {...neumorphismStyle}>
      <Heading size="md" mb={4} textAlign="center" color={textColor}>
        {title}
      </Heading>
      <List spacing={3}>
        {items.map((item, index) => (
          <ListItem key={index} {...neumorphismStyle} p={2} borderRadius="md">
            <Flex align="center">
              <Box mr={2} color={textColor}>
                {item.icon}
              </Box>
              <Text color={textColor}>{item.text}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const LandingPage = () => {
  const cardImages = [img1, img2, img3];
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#f0f4f8", "#1a1a1a");
  const textColor = useColorModeValue("gray.600", "white");
  const neumorphismStyle = useNeumorphismStyle();
  const neumorphismInsetStyle = useNeumorphismStyle(true);

  const catalogItems = useMemo(() => [
    { icon: <FaMobileAlt />, text: "Smartphones" },
    { icon: <FaLaptop />, text: "Laptops" },
    { icon: <FaTabletAlt />, text: "Tablets" },
    { icon: <FaTv />, text: "Smart TVs" },
    { icon: <FaHeadphones />, text: "Auriculares" },
    { icon: <FaCamera />, text: "Cámaras" },
    { icon: <FaGamepad />, text: "Consolas de juegos" },
    { icon: <FaPuzzlePiece />, text: "Accesorios" }
  ], []);

  const promoItems = useMemo(() => [
    { icon: <FaMobileAlt />, text: "50% de descuento en smartphones" },
    { icon: <FaLaptop />, text: "Compra una laptop, lleva auriculares gratis" },
    { icon: <FaPuzzlePiece />, text: "3x2 en accesorios" },
    { icon: <FaTruck />, text: "Envío gratis en compras superiores a $500" },
    { icon: <FaTv />, text: "Descuento de $100 en Smart TVs" }
  ], []);

  return (
    <ChakraProvider>
      <Box bg={bgColor} minH="100vh">
        <Container maxW={{ base: "container.xl", xl: "container.2xl" }} p={4}>
          <Box as="header" py={4} px={8} {...neumorphismStyle} mb={8}>
            <Flex justify="space-between" align="center">
              <IconButton icon={<FaSearch />} aria-label="Search" variant="ghost" {...neumorphismStyle} />
              <Text fontSize="3xl" fontWeight="bold" color={textColor} p={2} {...neumorphismInsetStyle}>
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

          <Stack direction={{ base: "column", lg: "row" }} spacing={4}>
            <Sidebar title="Catálogo de Productos" items={catalogItems} />
            
            <VStack flex={1} spacing={4}>
              <Slider />

              <Flex justify="center" align="center" wrap="wrap" gap={4}>
                {cardImages.map((img, index) => (
                  <Box
                    key={index}
                    {...neumorphismStyle}
                    p={4}
                    w={{ base: "100%", sm: "220px" }}
                    transition="transform 0.3s ease"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: colorMode === "light"
                        ? "12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255, 0.8)"
                        : "12px 12px 20px rgba(0,0,0,0.7), -12px -12px 20px rgba(255,255,255, 0.1)",
                    }}
                  >
                    <Box mb={4} h="120px" {...neumorphismStyle} overflow="hidden">
                      <Image src={img} alt={`Card Image ${index + 1}`} objectFit="cover" w="100%" h="100%" />
                    </Box>
                    <CardButton />
                  </Box>
                ))}
              </Flex>
            </VStack>

            <Sidebar title="Descuentos y Promociones" items={promoItems} />
          </Stack>

          <Box as="footer" py={4} px={8} {...neumorphismStyle} mt={8}>
            <Flex justify="center" align="center" mb={2}>
              {[FaFacebook, FaTwitter, FaInstagram].map((Icon, index) => (
                <IconButton
                  key={index}
                  icon={<Icon />}
                  aria-label={`Social ${index + 1}`}
                  variant="ghost"
                  mx={2}
                  {...neumorphismStyle}
                />
              ))}
            </Flex>
            <Text fontSize="sm" color={textColor} textAlign="center">
              Derechos de autor Sandowll 2024
            </Text>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default LandingPage;