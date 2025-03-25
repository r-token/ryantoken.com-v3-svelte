export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const resolved = await resolver()
			// In Svelte 5, components are no longer classes with render methods
			// Instead, access metadata directly
			const { metadata } = resolved
			const postPath = path.slice(11, -3)

			return {
				meta: metadata,
				path: postPath,
				// Remove postContent or handle differently
			}
		})
	)

	return allPosts
}