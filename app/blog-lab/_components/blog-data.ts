export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  heroLabel: string;
  heroSummary: string;
  tags: string[];
  keyTakeaways: string[];
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-scroll-depth",
    title: "Designing for Scroll Depth Without Losing Narrative Tension",
    excerpt:
      "A content-led layout experiment focused on keeping long-form reading immersive while still surfacing useful navigation cues.",
    category: "Layout Study",
    readTime: "6 min read",
    publishedAt: "April 18, 2026",
    author: "Peter Foeng",
    heroLabel: "Editorial Prototype",
    heroSummary:
      "Exploring how a portfolio-inspired frame can be adapted into a more editorial reading experience for a modern engineering blog.",
    tags: ["Layout", "Editorial", "UX", "Storytelling"],
    keyTakeaways: [
      "Use strong section rhythm so long articles still feel paced.",
      "Keep metadata compact but visible enough to help readers scan.",
      "Treat internal navigation as a reading aid, not a competing UI.",
    ],
    sections: [
      {
        title: "Start with a fixed narrative spine",
        paragraphs: [
          "Long-form blog layouts tend to fail when every section looks equally important. The reader loses the sense of forward motion, even if the writing itself is strong.",
          "A better pattern is to give the page a clear narrative spine: opening context, a middle section that expands the idea, and an ending that lands the point with confidence.",
        ],
      },
      {
        title: "Let metadata support the story",
        paragraphs: [
          "Tags, read time, date, and author data should not dominate the composition. They are useful, but they should frame the article rather than becoming the article.",
          "When metadata is grouped tightly and styled with restraint, it creates confidence without adding noise.",
        ],
      },
      {
        title: "Preserve contrast between overview and detail",
        paragraphs: [
          "The index page can feel faster, denser, and more directional. The detail page should slow down and give typography more room to breathe.",
          "That contrast makes navigation feel intentional instead of repetitive, even when both pages share the same visual language.",
        ],
      },
    ],
  },
  {
    slug: "component-systems-for-content-pages",
    title: "Component Systems for Content Pages Need Fewer Variants, Not More",
    excerpt:
      "Why content-heavy screens often improve when the design system stops treating every card and heading as a separate pattern.",
    category: "Systems Thinking",
    readTime: "7 min read",
    publishedAt: "April 12, 2026",
    author: "Peter Foeng",
    heroLabel: "Design Systems",
    heroSummary:
      "A fake article exploring how reusable UI primitives can still produce pages with personality when the layout does the heavy lifting.",
    tags: ["Design Systems", "Components", "Content", "Frontend"],
    keyTakeaways: [
      "Reduce component noise so layout and typography can carry tone.",
      "Keep card structures consistent and vary emphasis with spacing.",
      "Use fewer patterns, but make the ones you keep more deliberate.",
    ],
    sections: [
      {
        title: "Variation is often a layout problem",
        paragraphs: [
          "Teams frequently add new components because pages feel too similar, but similarity usually comes from structure rather than from the components themselves.",
          "If every section has the same width, spacing, cadence, and visual density, swapping one card recipe for another rarely fixes the underlying issue.",
        ],
      },
      {
        title: "Primitives scale better than bespoke content widgets",
        paragraphs: [
          "A small set of good primitives can support landing pages, article pages, and case studies if the system allows enough control over spacing, borders, and typography.",
          "That keeps the codebase smaller and makes experiments cheaper, which is exactly what you want when exploring new editorial directions.",
        ],
      },
      {
        title: "Editorial personality comes from rhythm",
        paragraphs: [
          "Readers notice rhythm before they notice the underlying component system. They feel the shifts between compact metadata, generous paragraphs, pull-out insights, and dense summary sections.",
          "That rhythm is what makes a content page feel considered.",
        ],
      },
    ],
  },
  {
    slug: "fake-content-real-constraints",
    title: "Fake Content, Real Constraints: A Safer Way to Explore New Page Types",
    excerpt:
      "Prototype routes can surface layout decisions early without forcing migrations, CMS decisions, or content rewrites into the same change set.",
    category: "Workflow",
    readTime: "5 min read",
    publishedAt: "April 4, 2026",
    author: "Peter Foeng",
    heroLabel: "Prototype Workflow",
    heroSummary:
      "Using isolated routes and fabricated editorial content to test page structures without touching the current production narrative.",
    tags: ["Prototyping", "Next.js", "Workflow", "Architecture"],
    keyTakeaways: [
      "Separate layout exploration from content migration work.",
      "Use fake data that is realistic enough to stress the UI.",
      "Keep experimental routes obvious so they do not confuse the production information architecture.",
    ],
    sections: [
      {
        title: "Prototype isolation keeps decisions cleaner",
        paragraphs: [
          "When layout exploration happens directly inside production routes, every design choice becomes entangled with stakeholder expectations, existing links, and content debt.",
          "Creating a sandbox route gives the team permission to compare options honestly before they harden into real architecture.",
        ],
      },
      {
        title: "Fake data should still be structurally honest",
        paragraphs: [
          "Placeholder content is only useful when it behaves like the future content model. That means realistic title lengths, believable summaries, and enough body copy to expose weak spacing decisions.",
          "The goal is not polish. The goal is to create enough pressure that the layout proves whether it can hold up.",
        ],
      },
      {
        title: "Make the experiment easy to extend",
        paragraphs: [
          "A good prototype route should be simple to delete, simple to evolve, and simple to point at during review.",
          "If the structure is clean enough, it can later become the foundation for a real blog without forcing you to keep any of the fake copy.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
