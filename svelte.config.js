import adapter from '@sveltejs/adapter-auto'
import preprocess from "svelte-preprocess"
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			]
		})
	],
	
	kit: {
		adapter: adapter()
	}
};

export default config
