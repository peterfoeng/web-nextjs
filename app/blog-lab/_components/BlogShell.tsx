import { Box, Flex } from "@/styled-system/jsx";
import type { ReactNode } from "react";

type BlogShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export default function BlogShell({ sidebar, children }: BlogShellProps) {
  return (
    <main>
      <Flex
        gap={{ base: "8", lg: "12" }}
        direction={{ base: "column", lg: "row" }}
        align="stretch"
        justify="flex-start"
        minHeight="100vh"
        px={{ base: "4", md: "8" }}
        py={{ base: "6", lg: "8" }}
        bg="linear-gradient(160deg, {colors.orange.a1}, transparent 45%)"
      >
        <Box
          padding={{ base: "0", lg: "4" }}
          position={{ base: "static", lg: "sticky" }}
          top={{ base: "0", lg: "8" }}
          width={{ base: "100%", lg: "42%" }}
          height={{ base: "auto", lg: "calc(100dvh - 4rem)" }}
        >
          <Flex
            minH={{ base: "auto", lg: "calc(100dvh - 4rem)" }}
            as="section"
            p={{ base: "0", lg: "5" }}
            align="flex-start"
            justify="center"
            direction="column"
            gap="8"
            borderLeft={{ base: "none", lg: "2px solid {colors.orange.a6}" }}
            pl={{ base: "0", lg: "6" }}
          >
            {sidebar}
          </Flex>
        </Box>
        <Box
          width={{ base: "100%", lg: "58%" }}
          marginLeft={{ base: "0", lg: "0" }}
          padding={{ base: "0", lg: "4" }}
        >
          {children}
        </Box>
      </Flex>
    </main>
  );
}
