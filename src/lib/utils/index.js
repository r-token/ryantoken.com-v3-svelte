export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)
	
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const resolve = await resolver()
			const defaults = resolve.default
			const postContent = await defaults.render()
			const { metadata } = await resolver()
			const postPath = path.slice(11, -3)

			return {
				meta: metadata,
				path: postPath,
				postContent: postContent
			}
		})
	)

	return allPosts
}
