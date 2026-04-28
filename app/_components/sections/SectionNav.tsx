import { css } from "@/styled-system/css";
import { Text } from "@/components/ui";
import { Box, Flex } from "@/styled-system/jsx";
import { sectionNav } from "../portfolio-data";

export default function SectionNav() {
  return (
    <Flex
      as="nav"
      aria-label="Section navigation"
      direction={{ base: "row", lg: "column" }}
      wrap={{ base: "wrap", lg: "nowrap" }}
      gap={{ base: "2", lg: "3" }}
      align="flex-start"
      w="full"
    >
      {sectionNav.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={`Jump to ${item.label} section`}
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "3",
            fontWeight: "medium",
            color: "fg.muted",
            lineHeight: "1",
            textDecoration: "none",
            transition: "color 0.2s ease",
            minHeight: "24px",
            paddingInline: "0.875rem",
            paddingBlock: "0.625rem",
            borderWidth: "1px",
            borderColor: "{colors.orange.a6}",
            borderRadius: "full",
            _hover: { color: "orange.11" },
            _focusVisible: {
              outline: "2px solid {colors.orange.9}",
              outlineOffset: "2px",
              borderRadius: "sm",
            },
            lg: {
              paddingInline: "0.75rem",
              paddingBlock: "0.625rem",
              borderWidth: "0",
              borderRadius: "0",
            },
            "&:hover [data-line='true']": { width: "16" },
          })}
        >
          <Text as="span" minW="7" fontFamily="var(--font-playfair-display)">
            {item.id}
          </Text>
          <Box
            as="span"
            aria-hidden="true"
            data-line="true"
            h="1px"
            w="10"
            bg="orange.a7"
            transition="width 0.2s ease"
          />
          <Text as="span">{item.label}</Text>
        </a>
      ))}
    </Flex>
  );
}
