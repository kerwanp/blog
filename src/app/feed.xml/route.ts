import { fetchPosts } from "@/libs/devto/fetch";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Martin Paucot",
    description: "Martin Paucot's Blog",
    feed_url: "https://www.martin-paucot.fr/feed.xml",
    site_url: "https://www.martin-paucot.fr",
    managingEditor: "contact@martin-paucot.fr (Martin Paucot)",
    webMaster: "contact@martin-paucot.fr (Martin Paucot)",
    copyright: `Copyright ${new Date().getFullYear()}, Martin Paucot`,
    language: "en-US",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const posts = await fetchPosts();

  for (const post of posts) {
    feed.item({
      guid: post.id.toString(),
      title: post.title,
      description: post.description,
      url: `https://www.martin-paucot.fr/blog/${post.slug}`,
      categories: post.tag_list,
      author: "Martin Paucot",
      date: post.published_at,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
