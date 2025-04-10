import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const [posts, projects, publications] = await Promise.all([
    getCollection("blog"),
    getCollection("projects"),
    getCollection("publications"),
  ]);

  const blogItems = posts
    .filter((x) => !x.data.draft)
    .map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    }));

  const projectItems = projects
    .filter((x) => !x.data.draft)
    .map((project) => ({
      ...project.data,
      link: `/projects/${project.slug}/`,
    }));

  const publicationItems = publications.map((publication) => ({
    ...publication.data,
    link: `/publications/${publication.slug}/`,
  }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: projectItems.concat(blogItems).concat(publicationItems),
  });
}
