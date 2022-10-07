export const load = async ({ fetch, params }) => {
	const { tag } = params
	const response = await fetch(`/api/posts`)
	const allPosts = await response.json()

	const posts = allPosts
		.filter(post => post.meta.tags.includes(tag))

	return {
		tag,
		posts
	}
}