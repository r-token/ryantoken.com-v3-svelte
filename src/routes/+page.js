export const load = async ({ fetch }) => {
	const apiPostsResponse = await fetch(`/api/posts`)
	const allPosts = await apiPostsResponse.json()
	const recentPosts = allPosts.slice(0, 4)
	
	return {
		recentPosts
	}
}