<script>
	import { page } from '$app/stores'
	import LargeHeader from '$lib/components/LargeHeader.svelte'
	import Subheader from '$lib/components/Subheader.svelte'
	import '../../../prism-dracula.css'
	let { data } = $props();
	
	const formattedDate = () => {
		const dateString = new Date(data.date.replace(/-/g, '\/').replace(/T.+/, ''))
		const conciseDate = dateString.toLocaleDateString()
		return conciseDate
	}
</script>

<svelte:head>
	<title>Ryan Token - {data.title}</title>
	
	<meta name="description" content={data.description} />
	<meta name="keywords" content={"Ryan Token, Serverless, Jamstack, iOS, Web, Javascript, " + data.title} />
	<meta name="author" content="Ryan Token" />
	
	<meta property="og:title" content={"Ryan Token – " + data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:url" content={"https://www.ryantoken.com/blog/" + $page.params.slug} />
	<meta property="og:image" content={"https://www.ryantoken.com" + data.imagePath} />
	<meta property=“og:type” content="article" />
	
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={"Ryan Token – " + data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:site" content="@_ryantoken" />
	<meta name="twitter:image" content={"https://www.ryantoken.com" + data.imagePath} />
	<meta name="twitter:creator" content="@_ryantoken" />
</svelte:head>

<div class="lg:mx-44">
	<div>
		<LargeHeader text={ data.title } />
		<h2 class="italic mb-2 text-gray-500 dark:text-gray-400">{ data.description }</h2>
		<Subheader text={ 'Published ' + formattedDate() } />
	</div>
	
	<hr class="mb-6" />
	
	<article class="prose max-w-none prose-img:rounded-md prose-headings:font-semibold prose-p:text-gray-800 dark:prose-p:text-gray-300 prose-a:text-indigo-500 prose-a:no-underline dark:prose-a:text-sky-300 dark:prose-invert">
		<data.content />
	</article>
	
	<br />
</div>
