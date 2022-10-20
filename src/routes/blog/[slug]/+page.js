export const load = async ({ params }) => {
	const post = await import(`../${params.slug}.md`)
	const { title, description, date, tags, imagePath } = post.metadata
	const content = post.default

	return {
		content,
		title,
		description,
		date,
		tags,
		imagePath
	}
}