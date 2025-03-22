import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Norberto Larrosa | Blog',
    description: 'My Blog',
    site: context.site,
    items: posts.map(() => ({
      title: posts.data.title,
      pubDate: posts.data.pubDate,
      description: posts.data.description,
      link: `/posts/${posts.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}