import { Badge, Heading, Text } from "@/components/ui";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import Link from "next/link";

export default function BlogIndexSidebar() {
  return (
    <Flex as="header" direction="column" gap="4" maxW="3xl">
      <Flex
        as="nav"
        aria-label="Breadcrumb"
        wrap="wrap"
        gap="2"
        align="center"
      >
        <Link
          href="/"
          className={css({
            color: "fg.muted",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            _hover: { color: "orange.11" },
          })}
        >
          Home
        </Link>
        <Text as="span" color="orange.9">
          /
        </Text>
        <Text as="span" color="orange.11" fontWeight="medium">
          Blog Lab
        </Text>
      </Flex>
      <Text
        fontWeight="medium"
        color="orange.11"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        Blog Layout Lab
      </Text>
      <Heading
        as="h1"
        fontFamily="var(--font-playfair-display)"
        fontSize={{ base: "4xl", md: "6xl" }}
        lineHeight="1.05"
        color="orange.10"
      >
        Exploring editorial layouts with fake content
      </Heading>
      <Text fontSize={{ base: "lg", md: "xl" }}>
        New routes, isolated data, same visual language.
      </Text>
      <Text color="fg.muted">
        This section is intentionally separate from the existing homepage so we
        can experiment with list and article detail patterns without disturbing
        the current information architecture.
      </Text>
      <Flex wrap="wrap" gap="2">
        <Badge variant="outline">Fake Data</Badge>
        <Badge variant="outline">App Router</Badge>
        <Badge variant="outline">Homepage Pattern</Badge>
      </Flex>
      <Box
        h="1px"
        w={{ base: "24", md: "36" }}
        bg="orange.a7"
        aria-hidden="true"
      />
      <Text fontStyle="italic" color="fg.muted">
        The goal here is structure and feel, not production content.
      </Text>
    </Flex>
  );
}
