import { Flex } from "@/styled-system/jsx";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function About() {
  return (
    <Flex direction="column" gap="4">
      <Heading>Welcome to Next.js with Panda CSS!</Heading>
      <Text>
        Hey, I'm Peter Foeng Senior Software Engineer I build accessible,
        high-performance digital experiences for the web. Currently engineering
        solutions at Bupa Australia, previously at carsales.com.au.
      </Text>
      <Text>
        With over 15 years of experience at Melbourne's leading digital
        agencies, I specialize in crafting robust front-end solutions using
        React, Next.js, and TypeScript. I'm passionate about accessibility, web
        performance, and building design systems that scale.
      </Text>
    </Flex>
  );
}
