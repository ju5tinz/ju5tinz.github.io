import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts. Drop a .md file into src/content/blog/ and it shows up
 * automatically — the filename becomes the URL slug.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    /** Set true to keep a post out of the site until it's ready. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
