import { Badge, Heading, Text } from "@/components/ui";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import { experience } from "../portfolio-data";

export default function ExperienceSection() {
  return (
    <Box as="section" id="experience" aria-labelledby="experience-title">
      <Flex align="baseline" gap={{ base: "2", md: "4" }} mb="6" wrap="wrap">
        <Text
          fontWeight="medium"
          color="orange.11"
          fontFamily="var(--font-playfair-display)"
        >
          02
        </Text>
        <Heading
          id="experience-title"
          as="h2"
          fontSize={{ base: "xl", md: "4xl" }}
          fontFamily="var(--font-playfair-display)"
          color="orange.10"
        >
          Experience
        </Heading>
      </Flex>
      <Flex direction="column" gap="4">
        {experience.map((job) => (
          <Box
            key={`${job.period}-${job.company}`}
            borderWidth="1px"
            borderColor="orange.a6"
            borderRadius="md"
            p={{ base: "4", md: "6" }}
            _hover={{ borderColor: "orange.a8" }}
          >
            <Text color="fg.muted" mb="1">
              {job.period}
            </Text>
            <Heading
              as="h3"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily="var(--font-playfair-display)"
              color="orange.11"
              mb="1"
            >
              {job.role}
            </Heading>
            <Text fontWeight="medium" mb="3">
              {job.company}
            </Text>
            <Text mb="4">{job.summary}</Text>
            <Flex wrap="wrap" gap="2">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
      <a
        href="/resume.pdf"
        className={css({
          marginTop: "6",
          display: "inline-block",
          fontWeight: "semibold",
          color: "orange.11",
          textDecoration: "underline",
          _hover: { color: "orange.10" },
          _focusVisible: {
            outline: "2px solid {colors.orange.9}",
            outlineOffset: "2px",
            borderRadius: "sm",
          },
        })}
      >
        View Full Resume
      </a>
    </Box>
  );
}
