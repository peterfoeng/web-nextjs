import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Box, Flex } from "@/styled-system/jsx";

export default function Hero() {
  return (
    <Flex as="header" direction="column" gap="4" maxW="3xl">
      <Heading
        as="h1"
        fontFamily="var(--font-playfair-display)"
        fontSize={{ base: "3xl", md: "6xl" }}
        lineHeight="1.05"
        color="orange.10"
      >
        Hey, I&apos;m{" "}
        <Box as="span" fontStyle="italic">
          Peter Foeng
        </Box>
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }}>
        <strong>Senior Software Engineer</strong>
      </Text>
      <Text color="fg.muted">
        I build <strong>accessible</strong>, high-performance digital
        experiences with a strong focus on front-end architecture, design
        systems, and product quality. Currently engineering solutions at
        <strong> Bupa Australia</strong>, previously at carsales.com.au.
      </Text>
      <Text color="fg.muted">
        With over <strong>15 years</strong> across agencies, enterprise teams,
        and product environments, I stay focused on the front end using
        <em> React</em>, <em>Next.js</em>, and <em>TypeScript</em>, building
        interfaces that feel considered, fast, and easy to use.
      </Text>
      <Box
        h="1px"
        w={{ base: "24", md: "36" }}
        bg="orange.a7"
        aria-hidden="true"
      />
      <Text fontStyle="italic" color="fg.muted">
        Front-end first, with a bias for clean systems, sharp execution, and
        interfaces with a bit of personality.
      </Text>
    </Flex>
  );
}
