import { Badge, Heading, Text } from "@/components/ui";
import { css } from "@/styled-system/css";
import { Box, Flex } from "@/styled-system/jsx";
import Link from "next/link";
import type { BlogPost } from "./blog-data";

type BlogDetailSidebarProps = {
  post: BlogPost;
};

export default function BlogDetailSidebar({
  post,
}: BlogDetailSidebarProps) {
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
        <Link
          href="/blog-lab"
          className={css({
            color: "fg.muted",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            _hover: { color: "orange.11" },
          })}
        >
          Blog Lab
        </Link>
        <Text as="span" color="orange.9">
          /
        </Text>
        <Text as="span" color="orange.11" fontWeight="medium">
          Article
        </Text>
      </Flex>
      <Text
        fontWeight="medium"
        color="orange.11"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        {post.heroLabel}
      </Text>
      <Heading
        as="h1"
        fontFamily="var(--font-playfair-display)"
        fontSize={{ base: "4xl", md: "6xl" }}
        lineHeight="1.05"
        color="orange.10"
      >
        {post.title}
      </Heading>
      <Text fontSize={{ base: "lg", md: "xl" }}>{post.heroSummary}</Text>
      <Text color="fg.muted">
        Published {post.publishedAt} by {post.author}. {post.readTime}.
      </Text>
      <Flex wrap="wrap" gap="2">
        <Badge variant="outline">{post.category}</Badge>
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </Flex>
      <Box
        h="1px"
        w={{ base: "24", md: "36" }}
        bg="orange.a7"
        aria-hidden="true"
      />
      <Flex wrap="wrap" gap="4">
        <Text color="fg.muted">
          <Link href="/blog-lab">Back to the blog experiment index</Link>
        </Text>
        <Text color="fg.muted">
          <Link href="/">Return to homepage</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
