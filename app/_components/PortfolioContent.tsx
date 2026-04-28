import { Flex } from "@/styled-system/jsx";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function PortfolioContent() {
  return (
    <Flex direction="column" gap={{ base: "12", md: "16" }} pb="16">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Flex>
  );
}
