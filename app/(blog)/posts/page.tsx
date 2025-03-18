import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery, settingsQuery } from "@/sanity/lib/queries";
import * as demo from "@/sanity/lib/demo";
import MoreStories from "../more-stories";

export default async function PostsPage() {
  const [posts, settings] = await Promise.all([
    sanityFetch({
      query: postsQuery,
      params: { limit: 60 } // Fetch more posts than the homepage
    }),
    sanityFetch({ query: settingsQuery }),
  ]);

  if (!posts?.length) {
    return notFound();
  }

  return (
      <div className="container mx-auto px-5">
        <h2 className="mb-8 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          <Link href="/" className="hover:underline">
            {settings?.title || demo.title}
          </Link>
        </h2>

        <h1 className="mb-16 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          All Posts
        </h1>

        <section>
          <Suspense fallback={<div>Loading posts...</div>}>
            <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 mb-32">
              {posts.map((post: any) => (
                  <div key={post._id}>
                    <div className="group mb-5 block">
                      <Link href={`/posts/${post.slug}`} className="hover:underline">
                        <h3 className="mb-3 text-3xl leading-snug">
                          {post.title}
                        </h3>
                        <div className="mb-4 text-lg">
                          {post.date && (
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </time>
                          )}
                        </div>
                        <p className="text-xl leading-relaxed">{post.excerpt}</p>
                      </Link>
                    </div>
                    {post.author && (
                        <div className="text-sm">
                          By {post.author.name}
                        </div>
                    )}
                  </div>
              ))}
            </div>
          </Suspense>
        </section>

        <hr className="border-accent-2 mb-28" />
      </div>
  );
}