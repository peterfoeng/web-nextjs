import type { Metadata } from "next";
import { Text } from "@/components/ui/text";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import Hero from "./_components/Hero";
import PortfolioContent from "./_components/PortfolioContent";
import SectionNav from "./_components/sections/SectionNav";

export const metadata: Metadata = {
  title: "Senior Software Engineer",
  description:
    "Homepage of Peter Foeng, a Melbourne-based Senior Software Engineer specialising in frontend architecture, design systems, accessibility, and high-performance web experiences.",
};

export default function Home() {
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
            position="relative"
            p={{ base: "0", lg: "5" }}
            align="flex-start"
            justify="center"
            direction="column"
            gap="8"
            borderLeft={{ base: "none", lg: "2px solid {colors.orange.a6}" }}
            pl={{ base: "0", lg: "6" }}
          >
            <Hero />
            <SectionNav />
            <Flex
              display={{ base: "none", lg: "flex" }}
              direction="column"
              align="center"
              justify="center"
              gap="3"
              className={css({
                position: "absolute",
                bottom: "6",
                left: "50%",
                transform: "translateX(-50%)",
              })}
            >
              <Flex
                aria-hidden="true"
                h="11"
                w="6"
                align="flex-start"
                justify="center"
                borderWidth="2px"
                borderColor="orange.9"
                borderRadius="full"
                p="1"
              >
                <Box
                  h="2.5"
                  w="1"
                  bg="orange.9"
                  borderRadius="full"
                  className={css({
                    animation:
                      "slide-from-top 1.1s ease-in-out infinite alternate",
                  })}
                />
              </Flex>
              <Text
                fontSize="xs"
                color="fg.muted"
                textAlign="center"
                maxW="28"
              >
                Scroll to view content
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          width={{ base: "100%", lg: "58%" }}
          marginLeft={{ base: "0", lg: "0" }}
          padding={{ base: "0", lg: "4" }}
        >
          <PortfolioContent />
        </Box>
      </Flex>
    </main>
  );
}
