export const prerender = true

export const load = ({ url }) => {
	const currentRoute = url.pathname

	return {
		currentRoute
	}
}