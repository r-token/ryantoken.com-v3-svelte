export const load = async ({ params }) => {
	const post = await import(`../${params.slug}.md`)
	const { title, description, date, tags, imagePath } = post.metadata
	const content = post.default
	
	console.log('post:', post)

	return {
		content,
		title,
		description,
		date,
		tags,
		imagePath
	}
}