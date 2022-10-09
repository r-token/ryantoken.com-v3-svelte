export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`)
	const posts = await response.json()

	console.log('posts:', posts)
	
	return {
		posts
	}
}