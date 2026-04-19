import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string()).optional(),
	}),
});

const books = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/books" }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		order: z.number().optional(),
		rating: z.number().min(1).max(5).optional(),
		status: z.enum(['reading', 'read', 'plan-to-read']),
		finishDate: z.date().optional(),
	}),
});

const travel = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/travel" }),
	schema: z.object({
		destination: z.string(),
		date: z.date(),
		description: z.string(),
	}),
});

const publications = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/publications" }),
	schema: z.object({
		title: z.string(),
		publisher: z.string(),
		pubDate: z.date(),
		link: z.string().url(),
	}),
});

export const collections = {
	blog,
	books,
	travel,
	publications,
};
