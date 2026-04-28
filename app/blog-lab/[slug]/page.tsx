import type { Metadata } from "next";
import { Badge, Heading, Text } from "@/components/ui";
import { Box, Flex } from "@/styled-system/jsx";
import { notFound } from "next/navigation";
import BlogDetailSidebar from "../_components/BlogDetailSidebar";
import BlogShell from "../_components/BlogShell";
import { blogPosts, getBlogPost } from "../_components/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog-lab/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Layout Lab",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog-lab/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog-lab/${post.slug}`,
      type: "article",
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogLabDetailPage(
  props: PageProps<"/blog-lab/[slug]">,
) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogShell sidebar={<BlogDetailSidebar post={post} />}>
      <Flex direction="column" gap={{ base: "8", md: "10" }} pb="16">
        <Box as="article" aria-labelledby="blog-post-body-title">
          <Flex align="baseline" gap={{ base: "2", md: "4" }} mb="4" wrap="wrap">
            <Text
              fontWeight="medium"
              color="orange.11"
              fontFamily="var(--font-playfair-display)"
            >
              02
            </Text>
            <Heading
              id="blog-post-body-title"
              as="h2"
              fontSize={{ base: "xl", md: "4xl" }}
              fontFamily="var(--font-playfair-display)"
              color="orange.10"
            >
              Article detail study
            </Heading>
          </Flex>
          <Text mb="8" color="fg.muted" maxW="2xl">
            This detail route uses fake editorial content to test reading
            cadence, metadata density, and long-form spacing.
          </Text>

          <Box
            borderWidth="1px"
            borderColor="orange.a6"
            borderRadius="md"
            p={{ base: "4", md: "6" }}
            mb="6"
          >
            <Text
              fontWeight="semibold"
              color="orange.11"
              mb="3"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              Key takeaways
            </Text>
            <Flex direction="column" gap="3">
              {post.keyTakeaways.map((takeaway) => (
                <Text key={takeaway} color="fg.muted">
                  {takeaway}
                </Text>
              ))}
            </Flex>
          </Box>

          <Flex direction="column" gap="8">
            {post.sections.map((section, index) => (
              <Box key={section.title}>
                <Text
                  color="orange.11"
                  fontWeight="medium"
                  mb="2"
                  fontFamily="var(--font-playfair-display)"
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontFamily="var(--font-playfair-display)"
                  color="orange.11"
                  mb="4"
                >
                  {section.title}
                </Heading>
                <Flex direction="column" gap="4">
                  {section.paragraphs.map((paragraph) => (
                    <Text key={paragraph} color="fg.muted" lineHeight="1.8">
                      {paragraph}
                    </Text>
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>

          <Flex wrap="wrap" gap="2" mt="8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Flex>
    </BlogShell>
  );
}
