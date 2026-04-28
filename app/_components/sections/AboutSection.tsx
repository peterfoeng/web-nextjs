import { Badge, Heading, Text } from "@/components/ui";
import { Box, Flex } from "@/styled-system/jsx";
import { techStack } from "../portfolio-data";

export default function AboutSection() {
  return (
    <Box as="section" id="about" aria-labelledby="about-title">
      <Flex align="baseline" gap={{ base: "2", md: "4" }} mb="6" wrap="wrap">
        <Text
          fontWeight="medium"
          color="orange.11"
          fontFamily="var(--font-playfair-display)"
        >
          01
        </Text>
        <Heading
          id="about-title"
          as="h2"
          fontSize={{ base: "xl", md: "4xl" }}
          fontFamily="var(--font-playfair-display)"
          color="orange.10"
        >
          About Me
        </Heading>
      </Flex>
      <Text mb="6">
        I&apos;m a Melbourne-based software engineer who works at the
        intersection of design, engineering, and content.
      </Text>

      <Flex direction={{ base: "column", md: "row" }} gap="4" mb="6">
        <Box
          borderWidth="1px"
          borderColor="orange.a6"
          borderRadius="md"
          p="4"
          flex="1"
        >
          <Text fontWeight="semibold" mb="1">
            RMIT University
          </Text>
          <Text color="fg.muted">Master of Computing, with Distinction</Text>
        </Box>
        <Box
          borderWidth="1px"
          borderColor="orange.a6"
          borderRadius="md"
          p="4"
          flex="1"
        >
          <Text fontWeight="semibold" mb="1">
            Best Student Award
          </Text>
          <Text color="fg.muted">Academic excellence in my cohort</Text>
        </Box>
      </Flex>

      <Text mb="4">
        Over the past 15+ years, I&apos;ve worked across agencies, enterprise
        organisations, and product teams, building accessible, performant
        digital experiences. Currently, I&apos;m a Senior Software Engineer at
        Bupa Australia, focused on scalable front-end systems and product
        quality.
      </Text>
      <Text mb="4">
        Before that, I spent more than 9 years at carsales.com.au, where I
        helped pioneer Torq, a component-based design system built with React,
        Mantine, and Vanilla Extract. It gave teams a consistent foundation for
        shipping UI at scale while maintaining strong accessibility standards.
      </Text>
      <Text mb="4">
        I also run District12, my freelance practice, where I deliver
        maintainable web solutions for local Australian businesses and explore
        how AI can improve modern web workflows.
      </Text>
      <Text mb="8">
        Outside engineering, my wife and I run Two Hungry Diners, a Melbourne
        food and travel channel built around honest reviews, local finds, and
        everyday adventures. It&apos;s a creative outlet that keeps me close to
        storytelling, audience thinking, and the details that make digital
        experiences feel human.
      </Text>

      <Heading
        as="h3"
        fontSize={{ base: "lg", md: "2xl" }}
        fontFamily="var(--font-playfair-display)"
        color="orange.11"
        mb="4"
      >
        Technologies I work with
      </Heading>
      <Flex wrap="wrap" gap="2">
        {techStack.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </Flex>
    </Box>
  );
}
