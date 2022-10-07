import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	
	preprocess: [
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
