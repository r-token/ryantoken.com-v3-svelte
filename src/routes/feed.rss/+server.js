import { fetchMarkdownPosts } from '$lib/utils'

const siteURL = 'https://www.ryantoken.com/blog'
const siteTitle = 'Ryan Token - Blog'
const siteDescription = "Ryan's blog posts"

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
`<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
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
			<title><![CDATA[ ${post.meta.title} ]]></title>
			<link>${siteURL}${post.path}</link>
			<description><![CDATA[ ${post.meta.description} ]]></description>
			<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
			<content:encoded><![CDATA[ ${post.postContent.html} ]]></content:encoded>
		</item>`
	)
	.join('')}
</channel>
</rss>
`)