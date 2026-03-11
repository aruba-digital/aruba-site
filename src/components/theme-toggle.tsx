"use client";

import { Button, HStack, Text, useColorMode } from "@chakra-ui/react";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Button
      onClick={toggleColorMode}
      variant="outline"
      size="xs"
      borderRadius="full"
      borderColor="border.subtle"
      bg="bg.surfaceSoft"
      _hover={{ borderColor: "brand.primaryStrong" }}
      aria-label="Cambiar tema claro/oscuro"
    >
      <HStack spacing={1}>
        <Text as="span" fontSize="xs">
          {isDark ? "🌙" : "☀️"}
        </Text>
        <Text as="span" fontSize="xs">
          {isDark ? "Oscuro" : "Claro"}
        </Text>
      </HStack>
    </Button>
  );
}


