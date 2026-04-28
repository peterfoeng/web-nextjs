import type { Metadata } from "next";
import { Badge, Heading, Text } from "@/components/ui";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import Link from "next/link";
import BlogIndexSidebar from "./_components/BlogIndexSidebar";
import BlogShell from "./_components/BlogShell";
import { blogPosts } from "./_components/blog-data";

export const metadata: Metadata = {
  title: "Blog Layout Lab",
  description:
    "An isolated blog layout experiment exploring listing and article detail patterns with fake editorial content.",
  alternates: {
    canonical: "/blog-lab",
  },
};

export default function BlogLabPage() {
  return (
    <BlogShell sidebar={<BlogIndexSidebar />}>
      <Flex direction="column" gap={{ base: "8", md: "10" }} pb="16">
        <Box as="section" aria-labelledby="blog-lab-list-title">
          <Flex align="baseline" gap={{ base: "2", md: "4" }} mb="4" wrap="wrap">
            <Text
              fontWeight="medium"
              color="orange.11"
              fontFamily="var(--font-playfair-display)"
            >
              01
            </Text>
            <Heading
              id="blog-lab-list-title"
              as="h2"
              fontSize={{ base: "xl", md: "4xl" }}
              fontFamily="var(--font-playfair-display)"
              color="orange.10"
            >
              Prototype post index
            </Heading>
          </Flex>
          <Text mb="8" color="fg.muted" maxW="2xl">
            A simple listing view with enough metadata and contrast to test how
            a future blog archive might sit beside the existing portfolio
            aesthetic.
          </Text>

          <Flex direction="column" gap="4">
            {blogPosts.map((post) => (
              <Box
                key={post.slug}
                borderWidth="1px"
                borderColor="orange.a6"
                borderRadius="md"
                p={{ base: "4", md: "6" }}
                _hover={{ borderColor: "orange.a8" }}
              >
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  align={{ base: "flex-start", md: "flex-start" }}
                  gap="4"
                  mb="4"
                >
                  <Box>
                    <Text
                      color="orange.11"
                      fontWeight="medium"
                      textTransform="uppercase"
                      letterSpacing="0.08em"
                      mb="2"
                    >
                      {post.category}
                    </Text>
                    <Heading
                      as="h3"
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontFamily="var(--font-playfair-display)"
                      color="orange.11"
                      mb="3"
                    >
                      {post.title}
                    </Heading>
                    <Text color="fg.muted" maxW="2xl">
                      {post.excerpt}
                    </Text>
                  </Box>
                  <Text
                    color="fg.muted"
                    fontSize="sm"
                    minWidth={{ base: "auto", md: "140px" }}
                  >
                    {post.publishedAt}
                  </Text>
                </Flex>

                <Flex wrap="wrap" gap="2" mb="4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </Flex>

                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  align={{ base: "flex-start", md: "center" }}
                  gap="3"
                >
                  <Text color="fg.muted">
                    {post.author} • {post.readTime}
                  </Text>
                  <Link
                    href={`/blog-lab/${post.slug}`}
                    className={css({
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
                    Read article
                  </Link>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </BlogShell>
  );
}
