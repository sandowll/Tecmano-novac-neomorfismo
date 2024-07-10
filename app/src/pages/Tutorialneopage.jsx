import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Text,
  IconButton,
  useColorModeValue,
  Code,
  Heading,
  extendTheme,
  Flex,
  useClipboard,
  Tooltip
} from "@chakra-ui/react";
import { FaSearch, FaCopy } from "react-icons/fa";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const CopyableCode = ({ code }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Flex align="center" mt={2}>
      <Code flex="1" p={2} fontSize="xs" overflowX="auto">
        {code}
      </Code>
      <Tooltip label={hasCopied ? "Copiado!" : "Copiar"} placement="top">
        <IconButton
          icon={<FaCopy />}
          size="sm"
          onClick={onCopy}
          ml={2}
          aria-label="Copiar código"
        />
      </Tooltip>
    </Flex>
  );
};

const ButtonExample = ({ title, description, buttonStyle, code }) => {
  return (
    <Box mb={4}>
      <Heading size="sm" mb={2}>{title}</Heading>
      <Text fontSize="sm" mb={2}>{description}</Text>
      <Flex align="center" mb={2}>
        <IconButton
          icon={<FaSearch />}
          aria-label={title}
          size="md"
          {...buttonStyle}
        />
      </Flex>
      <CopyableCode code={code} />
    </Box>
  );
};

const TutorialNeoPage = () => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const containerBgColor = useColorModeValue("gray.50", "gray.600");
  const textColor = useColorModeValue("gray.800", "white");

  const normalStyle = {
    bg: "white",
    color: "gray.800",
    border: "2px solid",
    borderColor: "gray.300",
  };

  const neumorphicElevatedStyle = {
    bg: "gray.100",
    color: "gray.800",
    boxShadow: "12px 12px 24px #a1a1a1, -12px -12px 24px #ffffff",
    borderRadius: "full",
    transition: "all 0.3s ease-in-out",
    _hover: {
      boxShadow: "15px 15px 30px #a1a1a1, -15px -15px 30px #ffffff",
      transform: "translateY(-2px)",
    },
  };

  const neumorphicInsetStyle = {
    bg: "gray.100",
    color: "gray.800",
    boxShadow: "inset 8px 8px 16px #d1d1d1, inset -8px -8px 16px #ffffff",
    borderRadius: "full",
    transition: "all 0.3s ease-in-out",
    _hover: {
      boxShadow: "inset 10px 10px 20px #d1d1d1, inset -10px -10px 20px #ffffff",
      transform: "scale(0.98)",
    },
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bgColor} minH="100vh" p={4}>
        <VStack spacing={6} align="stretch">
          <Heading textAlign="center" color={textColor} fontSize={["lg", "xl", "2xl"]} mb={2}>
            Estilos de Botones Neumórficos con Chakra UI|React
          </Heading>

          <Box bg={containerBgColor} p={4} borderRadius="xl" boxShadow="md">
            <ButtonExample
              title="1. Botón Normal con Borde"
              description="Un botón estándar con borde:"
              buttonStyle={normalStyle}
              code={`const normalStyle = {
  bg: "white",
  color: "gray.800",
  border: "2px solid",
  borderColor: "gray.300",
};`}
            />

            <ButtonExample
              title="2. Neumórfico Elevado"
              description="Botón con efecto neumórfico elevado:"
              buttonStyle={neumorphicElevatedStyle}
              code={`const neumorphicElevatedStyle = {
  bg: "gray.100",
  color: "gray.800",
  boxShadow: "12px 12px 24px #a1a1a1, -12px -12px 24px #ffffff",
  borderRadius: "full",
  transition: "all 0.3s ease-in-out",
  _hover: {
    boxShadow: "15px 15px 30px #a1a1a1, -15px -15px 30px #ffffff",
    transform: "translateY(-2px)",
  },
};`}
            />

            <ButtonExample
              title="3. Neumórfico Hundido"
              description="Botón con efecto neumórfico hundido:"
              buttonStyle={neumorphicInsetStyle}
              code={`const neumorphicInsetStyle = {
  bg: "gray.100",
  color: "gray.800",
  boxShadow: "inset 8px 8px 16px #d1d1d1, inset -8px -8px 16px #ffffff",
  borderRadius: "full",
  transition: "all 0.3s ease-in-out",
  _hover: {
    boxShadow: "inset 10px 10px 20px #d1d1d1, inset -10px -10px 20px #ffffff",
    transform: "scale(0.98)",
  },
};`}
            />
          </Box>

          <Box bg={containerBgColor} p={4} borderRadius="xl" boxShadow="md">
            <Heading size="md" color={textColor} mb={2}>Explicación</Heading>
            <Text color={textColor} fontSize="sm">
              1. El botón normal utiliza un borde simple para definir su forma.
            </Text>
            <Text mt={1} color={textColor} fontSize="sm">
              2. El estilo neumórfico elevado usa sombras externas pronunciadas, creando un efecto de "elevación" al pasar el mouse.
            </Text>
            <Text mt={1} color={textColor} fontSize="sm">
              3. El estilo neumórfico hundido utiliza sombras internas más suaves, simulando una "presión" del botón al interactuar.
            </Text>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default TutorialNeoPage;