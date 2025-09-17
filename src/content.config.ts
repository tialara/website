import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	services: defineCollection({
		loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			icon: z.string().optional(),
			order: z.number().default(0),
		}),
	}),
	testimonials: defineCollection({
		loader: glob({ base: './src/content/testimonials', pattern: '**/*.md' }),
		schema: z.object({
			name: z.string(),
			location: z.string().optional(),
			rating: z.number().min(1).max(5).default(5),
			order: z.number().default(0),
		}),
	}),
	certifications: defineCollection({
		loader: glob({ base: './src/content/certifications', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			institution: z.string(),
			year: z.number(),
			img: z.string().optional(),
			order: z.number().default(0),
		}),
	}),
};
