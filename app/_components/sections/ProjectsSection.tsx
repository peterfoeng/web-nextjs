import { Badge, Heading, Text } from "@/components/ui";
import { Box, Flex } from "@/styled-system/jsx";
import { projects } from "../portfolio-data";

export default function ProjectsSection() {
  return (
    <Box as="section" id="projects" aria-labelledby="projects-title">
      <Flex align="baseline" gap={{ base: "2", md: "4" }} mb="6" wrap="wrap">
        <Text
          fontWeight="medium"
          color="orange.11"
          fontFamily="var(--font-playfair-display)"
        >
          03
        </Text>
        <Heading
          id="projects-title"
          as="h2"
          fontSize={{ base: "xl", md: "4xl" }}
          fontFamily="var(--font-playfair-display)"
          color="orange.10"
        >
          Key Projects & Impact
        </Heading>
      </Flex>
      <Flex direction="column" gap="4">
        {projects.map((project) => (
          <Box
            key={project.title}
            borderWidth="1px"
            borderColor="orange.a6"
            borderRadius="md"
            p={{ base: "4", md: "6" }}
            _hover={{ borderColor: "orange.a8" }}
          >
            <Heading
              as="h3"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily="var(--font-playfair-display)"
              color="orange.11"
              mb="1"
            >
              {project.title}
            </Heading>
            <Text fontWeight="medium" mb="3">
              {project.context}
            </Text>
            <Flex as="ul" direction="column" gap="2" mb="4" pl="5">
              {project.points.map((point) => (
                <Text as="li" key={point} color="fg.muted">
                  {point}
                </Text>
              ))}
            </Flex>
            <Flex wrap="wrap" gap="2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
