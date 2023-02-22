import { fetchMarkdownPosts } from '$lib/utils'

const siteURL = 'https://ryantoken.com'
const siteTitle = 'Ryan Token'
const siteDescription = "Ryan's personal website and blog"

const cleanHtmlString = (htmlString) => {
	return htmlString.replace(/<[^>]+>/g, '')
}

export const prerender = true
	
export const GET = async () => {
	const allPosts = await fetchMarkdownPosts()
	const sortedPosts = allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

	const body = render(sortedPosts)
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml',
		}
	};

	return new Response(
		body,
		options
	)
}

const render = (posts) =>
(
`<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<language>en</language>
<link>${siteURL}</link>
${posts
	.map(
		(post) => `
		<item>
			<guid isPermaLink="true">${siteURL}${post.path}</guid>
			<title>${post.meta.title}</title>
			<link>${siteURL}${post.path}</link>
			<description>${post.meta.description}</description>
			<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
			<content:encoded>"${post.postContent.html}"</content:encoded>
		</item>`
	)
	.join('')}
</channel>
</rss>
`)