import { Heading, Text } from "@/components/ui";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { contacts } from "../portfolio-data";

export default function ContactSection() {
  return (
    <Box as="section" id="contact" aria-labelledby="contact-title">
      <Flex align="baseline" gap={{ base: "2", md: "4" }} mb="3" wrap="wrap">
        <Text
          fontWeight="medium"
          color="orange.11"
          fontFamily="var(--font-playfair-display)"
        >
          04
        </Text>
        <Heading
          id="contact-title"
          as="h2"
          fontSize={{ base: "xl", md: "4xl" }}
          fontFamily="var(--font-playfair-display)"
          color="orange.10"
        >
          Get In Touch
        </Heading>
      </Flex>
      <Text fontWeight="medium" mb="4">
        Interested in working together?
      </Text>
      <Text mb="6">
        I&apos;m always open to discussing new projects, freelance
        opportunities, or just having a chat about web development and design
        systems.
      </Text>
      <Text color="fg.muted" mb="4">
        Melbourne, Victoria, Australia
      </Text>

      <Flex direction="column" gap="3">
        {contacts.map((item) => (
          <Flex key={item.label} gap="2" align="center" wrap="wrap">
            <Text fontWeight="semibold" minW={{ base: "72px", md: "90px" }}>
              {item.label}
            </Text>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className={css({
                textDecoration: "underline",
                color: "orange.11",
                _hover: { color: "orange.10" },
                _focusVisible: {
                  outline: "2px solid {colors.orange.9}",
                  outlineOffset: "2px",
                  borderRadius: "sm",
                },
              })}
            >
              {item.value}
            </a>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
